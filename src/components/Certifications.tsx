import React, { useState, useEffect, useRef } from 'react';
import {
  FileCheck,
  CheckCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Eye,
  Award,
  Sparkles,
  Maximize2,
  Minimize2,
  Download,
  ShieldCheck,
  Filter,
} from 'lucide-react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const certifications = PORTFOLIO_DATA.certifications;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [isZoomed, setIsZoomed] = useState(false);

  const categories = [
    { id: 'ALL', label: 'ALL CREDENTIALS', count: certifications.length },
    { id: 'AI & Data', label: 'AI & DATA', count: certifications.filter(c => c.category === 'AI & Data').length },
    { id: 'Research & Innovation', label: 'RESEARCH & INNOVATION', count: certifications.filter(c => c.category === 'Research & Innovation').length },
    { id: 'Leadership', label: 'LEADERSHIP', count: certifications.filter(c => c.category === 'Leadership').length },
    { id: 'Software Engineering', label: 'SOFTWARE ENGINEERING', count: certifications.filter(c => c.category === 'Software Engineering').length },
  ];

  const filteredCerts = filterCategory === 'ALL'
    ? certifications
    : certifications.filter((c) => c.category === filterCategory);

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        const currIndex = certifications.findIndex((c) => c.id === selectedCert.id);
        const nextIndex = (currIndex + 1) % certifications.length;
        setSelectedCert(certifications[nextIndex]);
        setIsZoomed(false);
      } else if (e.key === 'ArrowLeft') {
        const currIndex = certifications.findIndex((c) => c.id === selectedCert.id);
        const prevIndex = (currIndex - 1 + certifications.length) % certifications.length;
        setSelectedCert(certifications[prevIndex]);
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert, certifications]);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${y.toFixed(2)}deg) rotateY(${x.toFixed(2)}deg) translateY(-8px) scale(1.025)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setHoveredId(null);
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCert) return;
    const currIndex = certifications.findIndex((c) => c.id === selectedCert.id);
    const prevIndex = (currIndex - 1 + certifications.length) % certifications.length;
    setSelectedCert(certifications[prevIndex]);
    setIsZoomed(false);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCert) return;
    const currIndex = certifications.findIndex((c) => c.id === selectedCert.id);
    const nextIndex = (currIndex + 1) % certifications.length;
    setSelectedCert(certifications[nextIndex]);
    setIsZoomed(false);
  };

  return (
    <section 
      id="certifications" 
      className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C26] relative overflow-hidden select-none"
    >
      {/* Background Subtle Ambient Lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] blur-3xl rounded-full pointer-events-none -z-10 transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, var(--theme-accent-glow, rgba(255,106,0,0.12)) 0%, transparent 70%)',
        }}
      />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-2.5">
            <span 
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: 'var(--theme-accent-light, #38BDF8)' }}
            />
            <span style={{ color: 'var(--theme-accent-light, #FF6A00)' }} className="font-bold">
              09 // CREDENTIAL ARCHIVE & VERIFIED MILESTONES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            CERTIFICATIONS // VERIFIED ACHIEVEMENTS
          </h2>

          <p className="text-xs sm:text-sm font-mono text-[#A1A1AA] mt-2 max-w-2xl leading-relaxed">
            Every milestone represents a step forward in learning, innovation and professional growth.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0D0D14] border border-[#262634] shadow-md font-mono text-xs self-start md:self-end">
          <ShieldCheck className="w-4 h-4 text-[#A6E635]" />
          <span className="text-white font-bold">{certifications.length}</span>
          <span className="text-[#8E8E93]">ORIGINAL CREDENTIALS</span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none font-mono">
        <Filter className="w-3.5 h-3.5 text-[#8E8E93] mr-1 shrink-0" />
        {categories.map((cat) => {
          const isActive = filterCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-2 ${
                isActive
                  ? 'text-white shadow-lg'
                  : 'bg-[#101017] text-[#8E8E93] hover:text-white border border-[#22222E]'
              }`}
              style={{
                backgroundColor: isActive ? 'var(--theme-accent, #FF6A00)' : undefined,
                borderColor: isActive ? 'var(--theme-accent-light, #FF6A00)' : undefined,
                boxShadow: isActive ? '0 0 16px var(--theme-accent-glow, rgba(255,106,0,0.4))' : undefined,
              }}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                isActive ? 'bg-black/30 text-white' : 'bg-[#1C1C26] text-[#71717A]'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Responsive Certificate Cards Grid with 3D Hover & Lift */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredCerts.map((cert) => {
          const isHovered = hoveredId === cert.id;
          const hasSiblingHovered = hoveredId !== null && !isHovered;

          return (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className={`group relative rounded-2xl p-4 bg-[#0A0A0F] border transition-[opacity,border-color,box-shadow] duration-250 cursor-pointer flex flex-col justify-between overflow-hidden will-change-transform ${
                hasSiblingHovered ? 'opacity-50 grayscale-[0.2]' : 'opacity-100'
              }`}
              style={{
                borderColor: isHovered ? 'var(--theme-accent, #383848)' : '#20202B',
                boxShadow: isHovered
                  ? `0 24px 45px -10px rgba(0,0,0,0.9), 0 0 30px ${cert.brandColors.primary}33, 0 0 20px var(--theme-accent-glow-subtle)`
                  : '0 8px 24px -6px rgba(0,0,0,0.8)',
                zIndex: isHovered ? 30 : 1,
              }}
            >
              {/* Card Ambient Rim Light Sweep */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(400px circle at 50% 0%, ${cert.brandColors.primary}22, transparent 70%)`,
                }}
              />

              <div>
                {/* Top Issuer Badge & Year */}
                <div className="flex items-center justify-between pb-2.5 border-b border-[#181822] mb-3">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full inline-block"
                      style={{ backgroundColor: cert.brandColors.primary }}
                    />
                    <span className="text-[11px] font-mono font-bold text-white uppercase truncate max-w-[190px]">
                      {cert.issuer}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#14141E] border border-[#242432] text-[#A6E635] font-semibold">
                    {cert.date}
                  </span>
                </div>

                {/* Document Realistic Visual Preview with Original Aspect Ratio */}
                <div className="relative rounded-xl overflow-hidden bg-[#060609] border border-[#1E1E28] mb-3.5 aspect-[1.414/1] shadow-inner group/img">
                  <img
                    src={cert.thumbnail || cert.image}
                    alt={cert.title}
                    loading="lazy"
                    decoding="async"
                    width={480}
                    height={340}
                    className="w-full h-full object-contain p-1.5 transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Document Gloss Shine Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.08] pointer-events-none" />

                  {/* Hover Floating Pill: VIEW FULL CERTIFICATE */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-3">
                    <span 
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-white text-[11px] font-mono font-black tracking-wider uppercase shadow-2xl transition-transform duration-200 group-hover:scale-105"
                      style={{
                        background: 'linear-gradient(to right, var(--theme-accent, #FF7A1A), var(--theme-accent-light, #E05500))',
                        boxShadow: '0 0 15px var(--theme-accent-glow, rgba(255,106,0,0.5))',
                      }}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>VIEW FULL CERTIFICATE</span>
                    </span>
                  </div>
                </div>

                {/* Certificate Title */}
                <h3 className="text-sm font-display font-black text-white group-hover:text-[var(--theme-accent-light,#FF6A00)] transition-colors leading-snug mb-1.5">
                  {cert.title}
                </h3>

                {/* Certificate Type / Additional Details */}
                <p className="text-[11px] font-mono font-semibold text-[#FF8A32] mb-1.5">
                  {cert.certificateType}
                  {cert.additionalDetail ? ` • ${cert.additionalDetail}` : ''}
                </p>

                {/* Credential Note */}
                <p className="text-xs text-[#8E8E93] leading-relaxed line-clamp-2">
                  {cert.credentialNote}
                </p>
              </div>

              {/* Card Footer: Skills & Verified Tag */}
              <div className="mt-4 pt-3 border-t border-[#161622] flex items-center justify-between text-[10px] font-mono">
                <div className="flex flex-wrap gap-1 max-w-[70%]">
                  {cert.skills.slice(0, 2).map((s, idx) => (
                    <span 
                      key={idx}
                      className="px-1.5 py-0.5 rounded bg-[#12121A] text-[#8E8E93] truncate border border-[#1E1E28]"
                    >
                      {s}
                    </span>
                  ))}
                  {cert.skills.length > 2 && (
                    <span className="px-1 py-0.5 text-[#55555A]">
                      +{cert.skills.length - 2}
                    </span>
                  )}
                </div>

                <span className="flex items-center gap-1 text-[#A6E635] font-bold shrink-0">
                  <CheckCircle className="w-3 h-3" />
                  <span>VERIFIED</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULL-SCREEN CERTIFICATE LIGHTBOX MODAL */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#040406]/94 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => {
            setSelectedCert(null);
            setIsZoomed(false);
          }}
        >
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-5xl max-h-[92vh] rounded-2xl bg-[#09090F] border-2 border-[#2B2B3C] shadow-[0_30px_90px_rgba(0,0,0,0.98)] overflow-hidden flex flex-col transition-all duration-300"
            style={{
              borderColor: 'var(--theme-accent, #2B2B3C)',
              boxShadow: '0 25px 90px rgba(0,0,0,0.98), 0 0 35px var(--theme-accent-glow-subtle)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Chrome */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-gradient-to-r from-[#14141E] via-[#0E0E14] to-[#14141E] border-b border-[#222230]">
              <div className="flex items-center gap-2.5 min-w-0">
                <span 
                  className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse"
                  style={{ backgroundColor: selectedCert.brandColors.primary }}
                />
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-display font-black text-white uppercase truncate">
                    {selectedCert.title}
                  </h3>
                  <p className="text-[10px] font-mono text-[#8E8E93] truncate">
                    ISSUED BY {selectedCert.issuer} • {selectedCert.date}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Zoom Toggle */}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-1.5 rounded-lg bg-[#181824] hover:bg-[#222232] text-[#D4D4D8] hover:text-white border border-[#2B2B3C] transition-colors cursor-pointer"
                  title={isZoomed ? 'Reset Zoom' : 'Zoom In'}
                >
                  {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                {/* View Original Asset Link */}
                <a
                  href={selectedCert.originalPdf || selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-[#181824] hover:bg-[#222232] text-[#D4D4D8] hover:text-white border border-[#2B2B3C] transition-colors cursor-pointer"
                  title="Open Original Document in New Tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedCert(null);
                    setIsZoomed(false);
                  }}
                  className="p-1.5 rounded-lg bg-[#241414] hover:bg-[#341818] text-[#FF7A7A] hover:text-white border border-[#442020] transition-colors cursor-pointer"
                  title="Close Certificate Viewer (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document Display Canvas */}
            <div className="relative flex-1 bg-[#050508] p-3 sm:p-6 overflow-auto flex items-center justify-center min-h-[300px]">
              {/* Prev Stepper Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-[#111118]/80 hover:bg-[#1C1C28] text-white border border-[#2C2C3E] backdrop-blur-md shadow-2xl transition-all cursor-pointer active:scale-95"
                title="Previous Certificate (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Stepper Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-[#111118]/80 hover:bg-[#1C1C28] text-white border border-[#2C2C3E] backdrop-blur-md shadow-2xl transition-all cursor-pointer active:scale-95"
                title="Next Certificate (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Main Image (Uncropped, Full Quality) */}
              <div 
                className={`transition-all duration-300 max-w-full flex items-center justify-center ${
                  isZoomed ? 'scale-125 sm:scale-140 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[60vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-lg shadow-[0_15px_50px_rgba(0,0,0,0.9)] border border-[#20202A]"
                />
              </div>
            </div>

            {/* Bottom Metadata Drawer */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#0D0D14] border-t border-[#1C1C28] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#A1A1AA]">
                <span className="text-white font-bold">{selectedCert.certificateType}</span>
                <span>•</span>
                <span>{selectedCert.date}</span>
                {selectedCert.certificateId && (
                  <>
                    <span>•</span>
                    <span className="text-[#38BDF8]">ID: {selectedCert.certificateId}</span>
                  </>
                )}
                {selectedCert.verificationCodes && (
                  <>
                    <span>•</span>
                    <span className="text-[#A6E635] truncate max-w-xs">{selectedCert.verificationCodes}</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#55555A] hidden md:inline">
                  USE ARROW KEYS OR SWIPE TO NAVIGATE
                </span>
                <a
                  href={selectedCert.originalPdf || selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-black font-bold uppercase transition-all shadow-md cursor-pointer"
                  style={{
                    background: 'linear-gradient(to right, var(--theme-accent-light, #FF7A1A), var(--theme-accent, #E05500))',
                  }}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>VIEW FULL SIZE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
