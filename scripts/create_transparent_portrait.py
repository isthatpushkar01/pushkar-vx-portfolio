import numpy as np
from PIL import Image
from scipy import ndimage

print("Loading original image...")
im = Image.open("src/assets/images/pushkar_actual_portrait.jpeg").convert("RGBA")
arr = np.array(im).astype(float)
rgb = arr[:, :, :3]

# Compute luminance
lum = 0.299 * rgb[:, :, 0] + 0.587 * rgb[:, :, 1] + 0.114 * rgb[:, :, 2]

# Compute color difference from typical sky (low saturation, lum > 175)
r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
max_c = np.maximum(np.maximum(r, g), b)
min_c = np.minimum(np.minimum(r, g), b)
sat = np.where(max_c > 0, (max_c - min_c) / (max_c + 1e-5), 0)

# Sky detector:
# Sky in this photo has high luminance (lum > 170) and low-to-moderate saturation (sat < 0.20)
is_sky = (lum > 170) & (sat < 0.22)

# Also check around the boundary: any pixel with lum > 160 connected to the border
is_sky_candidate = (lum > 162) & (sat < 0.25)

# Seed from outer border (top row, left column, right column)
h, w = lum.shape
seed = np.zeros((h, w), dtype=bool)
seed[0, :] = True
seed[:, 0] = True
seed[:, -1] = True
seed[-1, :150] = True # bottom-left sky corner
seed[-1, -50:] = True # bottom-right sky corner

# Connected component labeling of sky
labeled, num_features = ndimage.label(is_sky_candidate)
border_labels = np.unique(labeled[seed])
border_labels = border_labels[border_labels != 0]

sky_mask = np.isin(labeled, border_labels)

# Person mask is the inverted sky mask
person_mask = ~sky_mask

# Fill all holes inside the person mask (e.g., white Nike logo, watch glints, highlights)
person_mask = ndimage.binary_fill_holes(person_mask)

# Remove any small stray disconnected islands in the sky (area < 500 pixels)
labeled_person, num_person = ndimage.label(person_mask)
sizes = ndimage.sum(person_mask, labeled_person, range(num_person + 1))
# Find the main person component (largest component)
largest_label = np.argmax(sizes[1:]) + 1
person_mask = (labeled_person == largest_label)

# Fill holes again
person_mask = ndimage.binary_fill_holes(person_mask)

# Convert to float alpha in range [0, 1]
alpha = person_mask.astype(float)

# Gentle morphological erosion by 1 pixel to remove the exact 1-pixel bright sky bleed on outer fringe
eroded_mask = ndimage.binary_erosion(person_mask, iterations=1)
alpha_eroded = eroded_mask.astype(float)

# Smooth the edge using gaussian filter (sigma=1.2 for natural sub-pixel anti-aliasing)
alpha_smooth = ndimage.gaussian_filter(alpha_eroded, sigma=1.2)
# Normalize and clamp
alpha_smooth = np.clip((alpha_smooth - 0.1) / 0.8, 0.0, 1.0)

# Defringe / De-halo: on the semi-transparent boundary (0 < alpha < 0.95),
# if the original pixel has high luminance from sky bleeding, pull it towards the interior person colors
edge_zone = (alpha_smooth > 0.01) & (alpha_smooth < 0.95)
# Push any bright fringe pixels towards natural dark/hair/skin tones
bright_fringe = edge_zone & (lum > 130)
# Darken the fringe so it blends completely invisibly onto black background
decay = np.clip((lum - 130) / 100.0, 0, 1)
for c in range(3):
    rgb[bright_fringe, c] *= (1.0 - 0.7 * decay[bright_fringe])

# Combine into RGBA array
output_arr = np.zeros((h, w, 4), dtype=np.uint8)
output_arr[:, :, :3] = np.clip(rgb, 0, 255).astype(np.uint8)
output_arr[:, :, 3] = np.clip(alpha_smooth * 255.0, 0, 255).astype(np.uint8)

out_im = Image.fromarray(output_arr, "RGBA")
output_path = "src/assets/images/pushkar_portrait_transparent.png"
out_im.save(output_path, "PNG")
print(f"Saved transparent portrait to {output_path} successfully!")
