import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  FileText,
  Award,
  ExternalLink,
  X,
  Maximize2,
  Minimize2,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Hash,
} from 'lucide-react';

const PAPER_PDF_URL = '/assets/research/ICESSM-2026_Full-Length_Research_Papers.pdf#page=222';
const PAPER_PDF_HEAD_URL = '/assets/research/ICESSM-2026_Full-Length_Research_Papers.pdf';
const CERT_IMAGE_URL = '/assets/research/icessm-2026-presentation-certificate.jpg';

const TOPICS = [
  '5G Network Slicing',
  'Machine Learning',
  'Network Security',
  'Network Function Virtualization (NFV)',
  'Software-Defined Networking (SDN)',
  'Anomaly Detection',
  'Threat Classification',
  'Security Monitoring',
  'AI-Driven Network Management',
];

export const ResearchPublications: React.FC = () => {
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [paperFallbackOpen, setPaperFallbackOpen] = useState(false);
  const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(null);
  const [certLoading, setCertLoading] = useState(false);
  const [certError, setCertError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Non-blocking check so READ RESEARCH PAPER opens directly if PDF asset is hosted on server
  useEffect(() => {
    let active = true;
    fetch(PAPER_PDF_HEAD_URL, { method: 'HEAD' })
      .then((res) => {
        if (!active) return;
        const ct = res.headers.get('content-type') || '';
        setPdfAvailable(res.ok && ct.toLowerCase().includes('pdf'));
      })
      .catch(() => {
        if (active) setPdfAvailable(false);
      });
    return () => {
      active = false;
    };
  }, []);

  // Modal keyboard & scroll cleanup
  useEffect(() => {
    if (!certModalOpen && !paperFallbackOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCertModalOpen(false);
        setPaperFallbackOpen(false);
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certModalOpen, paperFallbackOpen]);

  const openCertificateModal = () => {
    setCertError(false);
    setCertLoading(true);
    setIsZoomed(false);
    setCertModalOpen(true);
  };

  const closeCertificateModal = () => {
    setCertModalOpen(false);
    setCertLoading(false);
    setCertError(false);
    setIsZoomed(false);
  };

  return (
    <section
      id="publications"
      className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C26] relative overflow-hidden"
    >
      {/* Subtle Ambient Accent Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[420px] rounded-full pointer-events-none -z-10 opacity-40"
        style={{
          background: 'radial-gradient(circle, var(--theme-accent-glow-subtle, rgba(255,106,0,0.14)) 0%, transparent 70%)',
        }}
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-2.5">
            <BookOpen className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent-light, #FF6A00)' }} />
            <span style={{ color: 'var(--theme-accent-light, #FF6A00)' }} className="font-bold">
              08 // PUBLISHED CONFERENCE PROCEEDINGS · ICESSM-2026
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            RESEARCH &amp; PUBLICATIONS // ACADEMIC CONTRIBUTIONS
          </h2>

          <p className="text-xs sm:text-sm font-mono text-[#A1A1AA] mt-2 max-w-2xl leading-relaxed">
            Exploring intelligent systems, emerging technologies and research-driven innovation.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0D0D14] border border-[#262634] font-mono text-xs self-start md:self-end shrink-0">
          <CheckCircle2 className="w-4 h-4 text-[#A6E635]" />
          <span className="text-white font-bold">PAGES 222–234</span>
          <span className="text-[#8E8E93]">· ISBN 978-93-94840-88-1</span>
        </div>
      </div>

      {/* Main Structured Publication Card */}
      <article
        className="rounded-3xl bg-[#0A0A10] border border-[#242432] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
        style={{
          boxShadow: '0 24px 60px rgba(0,0,0,0.92), 0 0 30px var(--theme-accent-glow-subtle, rgba(255,106,0,0.1))',
        }}
      >
        {/* Top Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-[#1E1E28] font-mono text-xs">
          <div className="flex flex-wrap items-center gap-3 text-[#A1A1AA]">
            <span className="text-[#D4AF37] font-bold uppercase tracking-wider">
              4th International Conference (ICESSM-2026)
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A6E635] font-semibold">
              Presented &amp; Published in Proceedings
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#8E8E93]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#FF8A32]" />
              <span>May 15–16, 2026</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Hash className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>pp. 222–234</span>
            </span>
          </div>
        </div>

        {/* Paper Title & Authors */}
        <div className="space-y-4 mb-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white leading-snug max-w-4xl">
            Machine Learning-Enabled Security for 5G Network Slicing: Challenges, Solutions, and Future Directions
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-1 text-xs font-mono">
            <div className="lg:col-span-7 flex items-start gap-2.5 text-[#D4D4D8]">
              <Users className="w-4 h-4 text-[#FF8A32] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider mb-0.5">
                  AUTHORS &amp; AFFILIATION
                </p>
                <p className="text-white font-semibold leading-relaxed">
                  Pushkar Vishwakarma, Dr. Jayshree Boaddh, Prof. Akrati Shrivastava
                </p>
                <p className="text-[#8E8E93] text-[11px]">
                  Vaishnavi Institute of Technology &amp; Science (VITS), Bhopal
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-start gap-2.5 text-[#D4D4D8]">
              <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider mb-0.5">
                  ORGANIZING INSTITUTION &amp; PROCEEDINGS
                </p>
                <p className="text-white font-semibold leading-relaxed">
                  Sri Balaji College of Engineering &amp; Technology, Jaipur, Rajasthan, India
                </p>
                <p className="text-[#8E8E93] text-[11px]">
                  ICESSM-2026 Full Length Research Papers · ISBN: 978-93-94840-88-1
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Abstract / Concise Overview */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#07070C] border border-[#1E1E28] mb-6">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF8A32] mb-2">
            RESEARCH OVERVIEW
          </p>
          <p className="text-xs sm:text-sm text-[#B4B4BC] leading-relaxed">
            This paper reviews security challenges in 5G network slicing and examines how machine learning can support intelligent security management. It explores threats across the network-slicing lifecycle, ML applications such as anomaly detection and resource allocation, existing security mechanisms, and future research directions.
          </p>
        </div>

        {/* Key Topics Covered */}
        <div className="mb-8">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#8E8E93] mb-2.5">
            KEY RESEARCH TOPICS COVERED
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-[#D4D4D8]">
            {TOPICS.map((topic, index) => (
              <React.Fragment key={topic}>
                <span className="text-[#E4E4E7] hover:text-[var(--theme-accent-light,#FF6A00)] transition-colors">
                  {topic}
                </span>
                {index < TOPICS.length - 1 && (
                  <span className="text-[#4B4B58]" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Two Independent Functional Action Buttons */}
        <div className="pt-6 border-t border-[#1E1E28] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {pdfAvailable ? (
              <a
                href={PAPER_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-black uppercase tracking-wider text-white transition-all active:translate-y-0.5 cursor-pointer"
                style={{
                  background: 'linear-gradient(to bottom, var(--theme-accent-light, #FF7A1A), var(--theme-accent, #E05500))',
                  boxShadow: '0 6px 20px var(--theme-accent-glow-subtle, rgba(255,106,0,0.35))',
                }}
              >
                <FileText className="w-4 h-4" />
                <span>READ RESEARCH PAPER (P. 222)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setPaperFallbackOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-black uppercase tracking-wider text-white transition-all active:translate-y-0.5 cursor-pointer"
                style={{
                  background: 'linear-gradient(to bottom, var(--theme-accent-light, #FF7A1A), var(--theme-accent, #E05500))',
                  boxShadow: '0 6px 20px var(--theme-accent-glow-subtle, rgba(255,106,0,0.35))',
                }}
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESEARCH PAPER (PP. 222–234)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              type="button"
              onClick={openCertificateModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#151520] hover:bg-[#1E1E2C] text-white border border-[#2E2E3E] hover:border-[var(--theme-accent,#FF6A00)] text-xs font-mono font-bold uppercase tracking-wider transition-all active:translate-y-0.5 cursor-pointer"
            >
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>VIEW PRESENTATION CERTIFICATE</span>
            </button>
          </div>

          <span className="text-[11px] font-mono text-[#71717A]">
            VERIFIED CONFERENCE RECORD · ICESSM-2026
          </span>
        </div>
      </article>

      {/* ON-DEMAND PRESENTATION CERTIFICATE LIGHTBOX MODAL */}
      {certModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/92"
          onClick={closeCertificateModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="research-cert-modal-title"
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] rounded-2xl bg-[#09090F] border-2 overflow-hidden flex flex-col shadow-2xl"
            style={{
              borderColor: 'var(--theme-accent, #D4AF37)',
              boxShadow: '0 25px 90px rgba(0,0,0,0.98), 0 0 35px var(--theme-accent-glow-subtle)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Chrome */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#12121A] border-b border-[#222230]">
              <div className="min-w-0">
                <h3
                  id="research-cert-modal-title"
                  className="text-xs sm:text-sm font-display font-black text-white uppercase truncate"
                >
                  ICESSM-2026 Certificate of Presentation
                </h3>
                <p className="text-[10px] font-mono text-[#8E8E93] truncate">
                  Sri Balaji College of Engineering &amp; Technology, Jaipur · May 15–16, 2026
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsZoomed((prev) => !prev)}
                  className="p-2 rounded-lg bg-[#181824] hover:bg-[#222232] text-[#D4D4D8] hover:text-white border border-[#2B2B3C] transition-colors cursor-pointer"
                  title={isZoomed ? 'Reset Zoom' : 'Zoom In'}
                >
                  {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                <a
                  href={CERT_IMAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#181824] hover:bg-[#222232] text-[#D4D4D8] hover:text-white border border-[#2B2B3C] transition-colors cursor-pointer"
                  title="Open Full Size Image in New Tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={closeCertificateModal}
                  className="p-2 rounded-lg bg-[#241414] hover:bg-[#341818] text-[#FF7A7A] hover:text-white border border-[#442020] transition-colors cursor-pointer"
                  title="Close Modal (Esc)"
                  aria-label="Close presentation certificate viewer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Image Display Stage */}
            <div className="relative flex-1 bg-[#050508] p-4 sm:p-6 overflow-auto flex items-center justify-center min-h-[320px]">
              {certLoading && !certError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-xs font-mono text-[#8E8E93]">
                  <Loader2 className="w-6 h-6 animate-spin text-[#FF8A32]" />
                  <span>Loading Original Presentation Certificate...</span>
                </div>
              )}

              {certError ? (
                <div className="text-center font-mono text-xs text-[#A1A1AA] space-y-3 p-6 max-w-md">
                  <AlertCircle className="w-8 h-8 text-[#FF7A7A] mx-auto" />
                  <p className="text-white font-bold">Unable to render preview image inline.</p>
                  <a
                    href={CERT_IMAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6A00] text-black font-bold uppercase"
                  >
                    <span>Open Original Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <div
                  className={`transition-transform duration-200 max-w-full flex items-center justify-center ${
                    isZoomed ? 'scale-125 sm:scale-135 cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed((prev) => !prev)}
                >
                  <img
                    src={CERT_IMAGE_URL}
                    alt="ICESSM-2026 Certificate of Presentation awarded to Pushkar Vishwakarma"
                    onLoad={() => setCertLoading(false)}
                    onError={() => {
                      setCertLoading(false);
                      setCertError(true);
                    }}
                    className={`max-h-[66vh] w-auto max-w-full object-contain rounded-lg border border-[#20202A] shadow-2xl transition-opacity duration-200 ${
                      certLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-3 bg-[#0D0D14] border-t border-[#1C1C28] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8E8E93]">
              <span>Paper: Machine Learning-Enabled Security for 5G Network Slicing</span>
              <a
                href={CERT_IMAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF8A32] inline-flex items-center gap-1.5 font-bold transition-colors"
              >
                <span>OPEN FULL RESOLUTION</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* RESEARCH PAPER DETAILS MODAL FALLBACK (ONLY SHOWN IF FULL PROCEEDINGS PDF FILE IS NOT ON SERVER) */}
      {paperFallbackOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90"
          onClick={() => setPaperFallbackOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="paper-info-modal-title"
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-[#0A0A10] border border-[#2E2E3C] p-6 sm:p-8 space-y-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#1E1E28] pb-4">
              <div>
                <p className="text-[10px] font-mono font-bold text-[#FF8A32] uppercase tracking-widest mb-1">
                  ICESSM-2026 CONFERENCE PROCEEDINGS · PAGES 222–234
                </p>
                <h3 id="paper-info-modal-title" className="text-lg font-display font-bold text-white">
                  Machine Learning-Enabled Security for 5G Network Slicing: Challenges, Solutions, and Future Directions
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPaperFallbackOpen(false)}
                className="p-2 rounded-lg bg-[#181822] hover:bg-[#242432] text-[#A1A1AA] hover:text-white border border-[#2C2C3A] cursor-pointer"
                aria-label="Close research paper details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs font-mono text-[#B4B4BC]">
              <p>
                <span className="text-white font-bold">Authors:</span> Pushkar Vishwakarma, Dr. Jayshree Boaddh, Prof. Akrati Shrivastava (VITS Bhopal)
              </p>
              <p>
                <span className="text-white font-bold">Proceedings:</span> ICESSM-2026 Full Length Research Papers (ISBN: 978-93-94840-88-1)
              </p>
              <p>
                <span className="text-white font-bold">Organizer:</span> Sri Balaji College of Engineering &amp; Technology, Jaipur · May 15–16, 2026
              </p>
              <p className="text-xs font-sans text-[#9CA3AF] leading-relaxed pt-2 border-t border-[#181822]">
                This paper reviews security challenges in 5G network slicing and examines how machine learning can support intelligent security management, covering lifecycle threats, anomaly detection, resource allocation, security mechanisms, and future research directions.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#12121A] border border-[#262634] text-xs font-mono text-[#A1A1AA] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#F5B900] shrink-0 mt-0.5" />
              <span>
                Proceedings PDF file is not yet bundled on this server (<code className="text-white">public/assets/research/ICESSM-2026_Full-Length_Research_Papers.pdf</code>). Once uploaded, the button opens directly to Page 222.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setPaperFallbackOpen(false);
                  openCertificateModal();
                }}
                className="px-4 py-2 rounded-xl bg-[#181824] hover:bg-[#222232] border border-[#2E2E3E] text-white text-xs font-mono font-bold uppercase cursor-pointer"
              >
                View Presentation Certificate
              </button>
              <button
                type="button"
                onClick={() => setPaperFallbackOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#FF6A00] text-black text-xs font-mono font-bold uppercase cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
