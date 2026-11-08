import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const p = PORTFOLIO_DATA.personal;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.8 } });

      const mailtoUrl = `mailto:${p.email}?subject=${encodeURIComponent(
        `[PORTFOLIO] ${formData.subject || 'Opportunity Inquiry'}`
      )}&body=${encodeURIComponent(
        `Hi Pushkar,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('idle');
      }, 5000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6A00] uppercase tracking-wider mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>11 // DIRECT COMM_LINK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            LET'S BUILD SOMETHING INTELLIGENT.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8E8E93]">
          OPEN FOR INTERNSHIPS, AI ROLES &amp; VENTURE COLLABORATIONS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Coordinates */}
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
                <div>
                  <p className="text-[10px] text-[#8E8E93]">DIRECT_EMAIL</p>
                  <a
                    href={`mailto:${p.email}`}
                    className="text-white hover:text-[#FF6A00] font-semibold transition-colors"
                  >
                    {p.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0D0D12] border border-[#22222A]">
                <Phone className="w-4 h-4 text-[#A6E635] shrink-0" />
                <div>
                  <p className="text-[10px] text-[#8E8E93]">PHONE_SECURE</p>
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
                  <p className="text-[10px] text-[#8E8E93]">LOCATION_COORDINATES</p>
                  <p className="text-white font-semibold">{p.location}</p>
                </div>
              </div>
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
              href="#hero"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14141C] hover:bg-[#1E1E28] border border-[#282834] text-[#F5B900] transition-colors ml-auto"
            >
              <span>TOP OF PAGE ⇡</span>
            </a>
          </div>
        </div>

        {/* Right: Encrypted Terminal Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#09090E] border border-[#24242E] relative font-mono">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E1E26] mb-5 text-xs">
            <span className="text-[#A6E635] flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#A6E635] animate-pulse" />
              TERMINAL_CHANNEL: ENCRYPTED
            </span>
            <span className="text-[#8E8E93]">PROTOCOL: TLS 1.3</span>
          </div>

          {status === 'sent' && (
            <div className="mb-4 p-3 rounded-xl bg-[#0F1E14] border border-[#A6E635]/40 text-[#A6E635] text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Payload received. Dispatching to Pushkar's priority inbox...</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-[#8E8E93] mb-1">YOUR_NAME [STRING]</label>
              <input
                type="text"
                required
                placeholder="e.g. Elena Rostova"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#121218] border border-[#22222A] focus:border-[#FF6A00] rounded-xl px-3.5 py-2.5 text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#8E8E93] mb-1">COMM_CHANNEL_EMAIL [STREAMS]</label>
              <input
                type="email"
                required
                placeholder="e.g. elena@anthropic.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#121218] border border-[#22222A] focus:border-[#FF6A00] rounded-xl px-3.5 py-2.5 text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#8E8E93] mb-1">MISSION_SUBJECT [ENUM]</label>
              <input
                type="text"
                required
                placeholder="e.g. AI Engineering Internship / Project Collaboration"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#121218] border border-[#22222A] focus:border-[#FF6A00] rounded-xl px-3.5 py-2.5 text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#8E8E93] mb-1">TRANSMISSION_PAYLOAD [BUFFER]</label>
              <textarea
                required
                rows={4}
                placeholder="Transmit mission parameters, project requirements, or collaborative roadmap..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#121218] border border-[#22222A] focus:border-[#FF6A00] rounded-xl px-3.5 py-2.5 text-white outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 px-6 rounded-xl bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-black font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg active:translate-y-0.5 cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT_PACKET // SEND KEYPRESS'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
