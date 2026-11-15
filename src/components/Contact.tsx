import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Github,
  Terminal,
  ExternalLink,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  onOpenResume?: () => void;
}

const WHATSAPP_NUMBER = '919425345884';
const INSTAGRAM_URL =
  'https://www.instagram.com/_is.that.pushkar_?psln=MW9yZ29jeXlsejVpbw==';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.9" />
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.9" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);

export const Contact: React.FC<ContactProps> = () => {
  const p = PORTFOLIO_DATA.personal;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [validationError, setValidationError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !phone || !subject || !message) {
      setValidationError('Please complete all required fields before sending via WhatsApp.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 7) {
      setValidationError('Please enter a valid phone number.');
      return;
    }

    const formattedMessage = [
      'Hello Pushkar,',
      '',
      'I would like to connect with you through your portfolio.',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Subject: ${subject}`,
      '',
      'Message:',
      message,
      '',
      'Thank you.',
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;
    setWhatsappUrl(url);

    // Trigger WhatsApp window safely without window.alert
    const popup = window.open(url, '_blank', 'noopener,noreferrer');
    if (popup) {
      popup.opener = null;
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--theme-accent-light, #FF6A00)' }}>
            <Terminal className="w-3.5 h-3.5" />
            <span>11 // DIRECT COMM_LINK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            LET&apos;S BUILD SOMETHING INTELLIGENT.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8E8E93]">
          OPEN FOR INTERNSHIPS, AI ROLES &amp; VENTURE COLLABORATIONS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Coordinates & Social Presence */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-white">
              Open for Strategic Collaborations
            </h3>
            <p className="text-sm text-[#8E8E93] leading-relaxed">
              Whether you are architecting a zero-to-one Generative AI product, recruiting high-velocity engineering interns, or seeking a proven student leader to anchor tech operations—my comms terminal is open.
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0D0D12] border border-[#22222A]">
                <Mail className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] text-[#8E8E93]">DIRECT EMAIL</p>
                  <a
                    href={`mailto:${p.email}`}
                    className="text-white hover:text-[#FF6A00] font-semibold transition-colors break-all"
                  >
                    {p.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0D0D12] border border-[#22222A]">
                <Phone className="w-4 h-4 text-[#A6E635] shrink-0" />
                <div>
                  <p className="text-[10px] text-[#8E8E93]">PHONE / WHATSAPP</p>
                  <a
                    href={`tel:${p.phone}`}
                    className="text-white hover:text-[#A6E635] font-semibold transition-colors"
                  >
                    {p.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0D0D12] border border-[#22222A]">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <div>
                  <p className="text-[10px] text-[#8E8E93]">LOCATION</p>
                  <p className="text-white font-semibold">{p.location}</p>
                </div>
              </div>

              {/* Dedicated Instagram Social Connection Card */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#0D0D14] hover:bg-[#14141E] border border-[#262634] hover:border-[var(--theme-accent,#FF6A00)] transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-8 h-8 rounded-lg bg-[#161622] border border-[#2A2A38] flex items-center justify-center shrink-0"
                    style={{ color: 'var(--theme-accent-light, #FF6A00)' }}
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider">INSTAGRAM</p>
                    <p className="text-white group-hover:text-[var(--theme-accent-light,#FF6A00)] font-semibold transition-colors truncate">
                      CONNECT WITH ME ON INSTAGRAM
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#8E8E93] group-hover:text-white shrink-0" />
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-[#1C1C22] flex flex-wrap gap-3 font-mono text-xs">
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14141C] hover:bg-[#1E1E28] border border-[#282834] text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>LINKEDIN</span>
            </a>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14141C] hover:bg-[#1E1E28] border border-[#282834] text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14141C] hover:bg-[#1E1E28] border border-[#282834] hover:border-[var(--theme-accent,#FF6A00)] text-white transition-colors"
            >
              <span style={{ color: 'var(--theme-accent-light, #FF6A00)' }}>
                <InstagramIcon className="w-3.5 h-3.5" />
              </span>
              <span>INSTAGRAM</span>
            </a>
            <a
              href="#hero"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14141C] hover:bg-[#1E1E28] border border-[#282834] text-[#F5B900] transition-colors ml-auto"
            >
              <span>TOP OF PAGE</span>
            </a>
          </div>
        </div>

        {/* Right: WhatsApp Direct Message Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#09090E] border border-[#24242E] relative font-mono">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E1E26] mb-5 text-xs">
            <span className="text-[#A6E635] flex items-center gap-2 font-bold">
              <MessageCircle className="w-4 h-4" />
              <span>DIRECT WHATSAPP DISPATCH</span>
            </span>
            <span className="text-[#8E8E93]">+91 94253 45884</span>
          </div>

          {validationError && (
            <div
              role="alert"
              className="mb-4 p-3 rounded-xl bg-[#2A1414] border border-[#7F2323] text-[#FF8A8A] text-xs flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {whatsappUrl && (
            <div className="mb-5 p-4 rounded-xl bg-[#0F1E14] border border-[#A6E635]/40 text-xs space-y-3">
              <div className="flex items-start gap-2 text-[#A6E635]">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    WhatsApp has opened with your message pre-filled.
                  </p>
                  <p className="text-[#D4D4D8] mt-1">
                    Please press Send inside WhatsApp to complete your message to Pushkar.
                  </p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1A2E20] hover:bg-[#23402B] border border-[#A6E635]/50 text-white font-bold uppercase transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#A6E635]" />
                <span>Open WhatsApp Manually (Fallback Link)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-[#8E8E93] mb-1">
                  FULL NAME *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#121218] border border-[#22222A] focus:border-[var(--theme-accent,#FF6A00)] rounded-xl px-3.5 py-2.5 text-white outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-[#8E8E93] mb-1">
                  PHONE NUMBER *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#121218] border border-[#22222A] focus:border-[var(--theme-accent,#FF6A00)] rounded-xl px-3.5 py-2.5 text-white outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-email" className="block text-[#8E8E93] mb-1">
                  EMAIL ADDRESS *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#121218] border border-[#22222A] focus:border-[var(--theme-accent,#FF6A00)] rounded-xl px-3.5 py-2.5 text-white outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-[#8E8E93] mb-1">
                  SUBJECT *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="AI Internship / Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#121218] border border-[#22222A] focus:border-[var(--theme-accent,#FF6A00)] rounded-xl px-3.5 py-2.5 text-white outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-[#8E8E93] mb-1">
                MESSAGE *
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Write your message, opportunity details, or collaboration note..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#121218] border border-[#22222A] focus:border-[var(--theme-accent,#FF6A00)] rounded-xl px-3.5 py-2.5 text-white outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg active:translate-y-0.5 cursor-pointer"
              style={{
                background: 'linear-gradient(to bottom, var(--theme-accent-light, #FF7A1A), var(--theme-accent, #E05500))',
                boxShadow: '0 6px 20px var(--theme-accent-glow-subtle, rgba(255,106,0,0.35))',
              }}
            >
              <Send className="w-4 h-4" />
              <span>SEND MESSAGE ON WHATSAPP</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
