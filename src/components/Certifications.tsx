import React, { useState, useEffect } from 'react';
import {
  CheckCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Eye,
  Maximize2,
  Minimize2,
  Download,
  ShieldCheck,
  Filter,
  Loader2,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';

function renderOrgBadge(certId: string): React.ReactNode {
  switch (certId) {
    case 'cert-deloitte':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#0F140A" stroke="#86BC25" strokeWidth="1.4" />
          <text x="5.5" y="15.5" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" fontWeight="900">D</text>
          <circle cx="16.5" cy="14.5" r="2" fill="#86BC25" />
        </svg>
      );
    case 'cert-wadhwani':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 8L7.5 18L12 10L16.5 18L21 8" stroke="#E03A3E" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="5.5" r="1.5" fill="#F58220" />
        </svg>
      );
    case 'cert-icessm':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" stroke="#D4AF37" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="8.5" ry="3.8" stroke="#38BDF8" strokeWidth="1.2" />
          <line x1="12" y1="3.5" x2="12" y2="20.5" stroke="#D4AF37" strokeWidth="1.2" />
        </svg>
      );
    case 'cert-gemini':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2.5C12 7.75 7.75 12 2.5 12C7.75 12 12 16.25 12 21.5C12 16.25 16.25 12 21.5 12C16.25 12 12 7.75 12 2.5Z" fill="#4285F4" />
        </svg>
      );
    case 'cert-isro':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2.5L15 8.5H9L12 2.5Z" fill="#FF6600" />
          <rect x="10.2" y="8.5" width="3.6" height="7" fill="#3B82F6" />
          <path d="M8.5 15.5L6.5 20.5H17.5L15.5 15.5H8.5Z" fill="#FF6600" />
        </svg>
      );
    case 'cert-kit':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <polygon points="12,2.5 20.5,7.2 20.5,16.8 12,21.5 3.5,16.8 3.5,7.2" stroke="#FF6B00" strokeWidth="1.6" fill="rgba(255,107,0,0.12)" />
          <circle cx="12" cy="12" r="2.8" fill="#E5A823" />
        </svg>
      );
    case 'cert-tata':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="#0072CE" strokeWidth="1.8" />
          <path d="M7.5 9H16.5M12 9V16.5" stroke="#38BDF8" strokeWidth="2.1" strokeLinecap="round" />
        </svg>
      );
    case 'cert-walmart':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3V7M12 17V21M4.5 7.5L8 9.5M16 14.5L19.5 16.5M4.5 16.5L8 14.5M16 9.5L19.5 7.5" stroke="#FFC220" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2" fill="#0071CE" />
        </svg>
      );
    case 'cert-buildhub':
    default:
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.8" stroke="#FF6600" strokeWidth="1.7" />
          <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.8" stroke="#38BDF8" strokeWidth="1.7" />
          <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.8" stroke="#A6E635" strokeWidth="1.7" />
          <rect x="13" y="13" width="7.5" height="7.5" rx="1.8" stroke="#F5B900" strokeWidth="1.7" />
        </svg>
      );
  }
}

export const Certifications: React.FC = () => {
  const certifications = PORTFOLIO_DATA.certifications;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [isZoomed, setIsZoomed] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState(false);

  const categories = [
    { id: 'ALL', label: 'ALL CREDENTIALS', count: certifications.length },
    { id: 'AI & Data', label: 'AI & DATA', count: certifications.filter((c) => c.category === 'AI & Data').length },
    { id: 'Research & Innovation', label: 'RESEARCH & INNOVATION', count: certifications.filter((c) => c.category === 'Research & Innovation').length },
    { id: 'Leadership', label: 'LEADERSHIP', count: certifications.filter((c) => c.category === 'Leadership').length },
    { id: 'Software Engineering', label: 'SOFTWARE ENGINEERING', count: certifications.filter((c) => c.category === 'Software Engineering').length },
  ];

  const filteredCerts =
    filterCategory === 'ALL'
      ? certifications
      : certifications.filter((c) => c.category === filterCategory);

  const openCert = (cert: Certification) => {
    setSelectedCert(cert);
    setIsZoomed(false);
    setModalError(false);
    setModalLoading(true);
  };

  const closeCert = () => {
    setSelectedCert(null);
    setIsZoomed(false);
    setModalLoading(false);
    setModalError(false);
  };

  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCert();
      } else if (e.key === 'ArrowRight') {
        const currIndex = certifications.findIndex((c) => c.id === selectedCert.id);
        const nextIndex = (currIndex + 1) % certifications.length;
        openCert(certifications[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currIndex = certifications.findIndex((c) => c.id === selectedCert.id);
        const prevIndex = (currIndex - 1 + certifications.length) % certifications.length;
        openCert(certifications[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert, certifications]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCert) return;
    const currIndex = certifications.findIndex((c) => c.id === selectedCert.id);
    const prevIndex = (currIndex - 1 + certifications.length) % certifications.length;
    openCert(certifications[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCert) return;
    const currIndex = certifications.findIndex((c) => c.id === selectedCert.id);
    const nextIndex = (currIndex + 1) % certifications.length;
    openCert(certifications[nextIndex]);
  };

  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C26] relative overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[450px] rounded-full pointer-events-none -z-10 opacity-35"
        style={{
          background: 'radial-gradient(circle, var(--theme-accent-glow-subtle, rgba(255,106,0,0.12)) 0%, transparent 70%)',
        }}
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent-light, #FF6A00)' }} />
            <span style={{ color: 'var(--theme-accent-light, #FF6A00)' }} className="font-bold">
              09 // CREDENTIAL ARCHIVE &amp; VERIFIED MILESTONES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            CERTIFICATIONS // VERIFIED ACHIEVEMENTS
          </h2>

          <p className="text-xs sm:text-sm font-mono text-[#A1A1AA] mt-2 max-w-2xl leading-relaxed">
            Every milestone represents a step forward in learning, innovation and professional growth.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0D0D14] border border-[#262634] font-mono text-xs self-start md:self-end shrink-0">
          <CheckCircle className="w-4 h-4 text-[#A6E635]" />
          <span className="text-white font-bold">{certifications.length}</span>
          <span className="text-[#8E8E93]">VERIFIED CREDENTIALS · ON-DEMAND VIEW</span>
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
              type="button"
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase transition-colors duration-200 cursor-pointer shrink-0 flex items-center gap-2 ${
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
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-black/30 text-white' : 'bg-[#1C1C26] text-[#71717A]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Lightweight Metadata-Only Certificate Cards Grid (Zero Inline Scans Loaded Until Clicked) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="group relative rounded-2xl p-5 sm:p-6 bg-[#0A0A10] border border-[#20202C] hover:border-[var(--theme-accent,#FF6A00)] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 flex flex-col justify-between shadow-lg"
          >
            <div>
              {/* Organization Badge + Year */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#181822] mb-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#12121B] border border-[#252534] flex items-center justify-center shrink-0">
                    {renderOrgBadge(cert.id)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-wider">
                      ISSUING ORGANIZATION
                    </p>
                    <p className="text-xs font-mono font-bold text-white truncate">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-[#A6E635] shrink-0 tabular-nums">
                  {cert.year}
                </span>
              </div>

              {/* Certificate Title */}
              <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[var(--theme-accent-light,#FF6A00)] transition-colors leading-snug mb-2">
                {cert.title}
              </h3>

              {/* Issue Date & Category Metadata */}
              <p className="text-[11px] font-mono text-[#8E8E93] mb-4">
                <span>{cert.date}</span>
                <span aria-hidden="true"> · </span>
                <span>{cert.certificateType}</span>
              </p>
            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-[#161622] flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => openCert(cert)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#14141E] hover:bg-[#1E1E2C] text-white border border-[#2C2C3A] hover:border-[var(--theme-accent,#FF6A00)] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent-light, #FF6A00)' }} />
                <span>VIEW CERTIFICATE</span>
              </button>

              {cert.originalPdf && (
                <a
                  href={cert.originalPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#12121A] hover:bg-[#1C1C28] text-[#A1A1AA] hover:text-white border border-[#262634] transition-colors cursor-pointer"
                  title="Open Original PDF in New Tab"
                  aria-label={`Open ${cert.title} PDF in new tab`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ON-DEMAND CERTIFICATE LIGHTBOX MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/92"
          onClick={closeCert}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] rounded-2xl bg-[#09090F] border-2 overflow-hidden flex flex-col shadow-2xl"
            style={{
              borderColor: 'var(--theme-accent, #2B2B3C)',
              boxShadow: '0 25px 90px rgba(0,0,0,0.98), 0 0 35px var(--theme-accent-glow-subtle)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Chrome */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#12121A] border-b border-[#222230]">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#181824] border border-[#2A2A38] flex items-center justify-center shrink-0">
                  {renderOrgBadge(selectedCert.id)}
                </div>
                <div className="min-w-0">
                  <h3 id="cert-modal-title" className="text-xs sm:text-sm font-display font-black text-white uppercase truncate">
                    {selectedCert.title}
                  </h3>
                  <p className="text-[10px] font-mono text-[#8E8E93] truncate">
                    {selectedCert.issuer} · {selectedCert.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsZoomed((z) => !z)}
                  className="p-2 rounded-lg bg-[#181824] hover:bg-[#222232] text-[#D4D4D8] hover:text-white border border-[#2B2B3C] transition-colors cursor-pointer"
                  title={isZoomed ? 'Reset Zoom' : 'Zoom In'}
                >
                  {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                <a
                  href={selectedCert.originalPdf || selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#181824] hover:bg-[#222232] text-[#D4D4D8] hover:text-white border border-[#2B2B3C] transition-colors cursor-pointer"
                  title="Open Original Document in New Tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={closeCert}
                  className="p-2 rounded-lg bg-[#241414] hover:bg-[#341818] text-[#FF7A7A] hover:text-white border border-[#442020] transition-colors cursor-pointer"
                  title="Close Certificate Viewer (Esc)"
                  aria-label="Close certificate modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* On-Demand Document Display Canvas */}
            <div className="relative flex-1 bg-[#050508] p-3 sm:p-6 overflow-auto flex items-center justify-center min-h-[320px]">
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-[#111118]/90 hover:bg-[#1C1C28] text-white border border-[#2C2C3E] shadow-2xl transition-colors cursor-pointer"
                title="Previous Certificate (Left Arrow)"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-[#111118]/90 hover:bg-[#1C1C28] text-white border border-[#2C2C3E] shadow-2xl transition-colors cursor-pointer"
                title="Next Certificate (Right Arrow)"
                aria-label="Next certificate"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {modalLoading && !modalError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-xs font-mono text-[#8E8E93] pointer-events-none">
                  <Loader2 className="w-6 h-6 animate-spin text-[#FF8A32]" />
                  <span>Loading Original Certificate Asset...</span>
                </div>
              )}

              {modalError ? (
                <div className="text-center font-mono text-xs text-[#A1A1AA] space-y-3 p-6 max-w-md">
                  <AlertCircle className="w-8 h-8 text-[#FF7A7A] mx-auto" />
                  <p className="text-white font-bold">Could not load certificate preview inline.</p>
                  <a
                    href={selectedCert.originalPdf || selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6A00] text-black font-bold uppercase"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Open Original File</span>
                  </a>
                </div>
              ) : (
                <div
                  className={`transition-transform duration-200 max-w-full flex items-center justify-center ${
                    isZoomed ? 'scale-125 sm:scale-140 cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed((z) => !z)}
                >
                  <img
                    key={selectedCert.id}
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    onLoad={() => setModalLoading(false)}
                    onError={() => {
                      setModalLoading(false);
                      setModalError(true);
                    }}
                    className={`max-h-[60vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-lg shadow-[0_15px_50px_rgba(0,0,0,0.9)] border border-[#20202A] transition-opacity duration-200 ${
                      modalLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                </div>
              )}
            </div>

            {/* Bottom Metadata Drawer */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#0D0D14] border-t border-[#1C1C28] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#A1A1AA]">
                <span className="text-white font-bold">{selectedCert.certificateType}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedCert.date}</span>
                {selectedCert.certificateId && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#38BDF8]">ID: {selectedCert.certificateId}</span>
                  </>
                )}
                {selectedCert.verificationCodes && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#A6E635] truncate max-w-xs">{selectedCert.verificationCodes}</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.originalPdf || selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-black font-bold uppercase transition-all shadow-md cursor-pointer"
                  style={{
                    background: 'linear-gradient(to right, var(--theme-accent-light, #FF7A1A), var(--theme-accent, #E05500))',
                  }}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{selectedCert.originalPdf ? 'OPEN ORIGINAL PDF' : 'OPEN FULL SIZE'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
