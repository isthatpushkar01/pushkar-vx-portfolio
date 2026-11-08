import React, { useEffect, useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const p = PORTFOLIO_DATA.personal;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = async () => {
    const textContent = `
PUSHKAR VISHWAKARMA
AI Engineer | Generative AI Developer | Innovation Builder
Location: ${p.location}
Email: ${p.email} | Phone: ${p.phone}
LinkedIn: ${p.linkedin}
GitHub: ${p.github}

PROFESSIONAL SUMMARY
${p.bio}

EDUCATION
${p.education.degree}
${p.education.institution} (${p.education.duration})
Cumulative Grade Point Average (CGPA): ${p.education.cgpa}

TECHNICAL ARSENAL
• Programming Languages: Python, Java, JavaScript
• AI & Machine Learning: Machine Learning, Generative AI, LLMs, Prompt Engineering, Exploratory Data Analysis, Data Modelling, MLOps Fundamentals
• Frameworks: Flask, FastAPI, React.js
• Libraries: Pandas, NumPy, Scikit-learn, OpenCV
• Databases: MongoDB, SQLite
• Cloud & Tools: Google Gemini, Claude Console, AWS Fundamentals, Git, GitHub, VS Code

FEATURED PROJECTS
1. SkillBridge AI (April 2025 – Present) | Role: Developer
• AI-powered employability ecosystem connecting students, TPOs, and recruiters through intelligent skill assessment and skill-gap analysis.
• Tech Stack: Python, Flask, MongoDB, HTML5, CSS3, JavaScript, Generative AI, Git.

2. AgriSense AI (September 2025 – Present) | Role: Developer
• AI-driven smart agriculture solution providing crop monitoring, data analysis, and predictive farming advisory.
• Tech Stack: Python, Flask, Scikit-learn, Pandas, NumPy, MongoDB, REST APIs, Weather API.

3. GhatShield AI (October 2026 – Present) | Role: Collaborator
• Environmental water quality intelligence and pollution risk assessment platform for river ecosystems.
• Tech Stack: Python, FastAPI, React.js, TypeScript, Pandas, SQLite, SQLAlchemy, Pydantic.

EXPERIENCE & LEADERSHIP
• Founder & Team Lead – Team Setu (2024 – Present)
• Google Student Ambassador (2026) – Google Developer Programs
• President – Student Activity Council (SAC), VITS Bhopal (2026 – Present)
• Student Placement Coordinator – Training & Placement Cell, VITS Bhopal (2024 – Present)
• Core Volunteer – Google Developer Group (GDG), Bhopal (2026 – Present)
• National Delegate – AICTE–MIC IDE Bootcamp (Solapur, 2026) – Top 5 Team in India

HONORS & HACKATHONS
• Top 5 Team in India – AICTE–MIC IDE Bootcamp Innovation Challenge 2026
• AI for Bharat Challenge – AI Prototype Shortlisted
• KIT's IRF Ideathon, Kolhapur – Cleared Round 2 Qualifier
• Ryzen AMD Slingshot – National Shortlist at VIT Bhopal
• Smart India Hackathon 2025 – Institutional Internal Round Qualifier
• 3,000+ LinkedIn Followers Community
`.trim();

    try {
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadTxt = () => {
    const textContent = `PUSHKAR VISHWAKARMA - RESUME\nAI Engineer | Generative AI Developer\nCGPA: ${p.education.cgpa}\nEmail: ${p.email}\nPhone: ${p.phone}\nLinkedIn: ${p.linkedin}\nGitHub: ${p.github}\n\nEDUCATION\n${p.education.degree} - ${p.education.institution}\nCGPA: ${p.education.cgpa} (2023 - 2027)\n\nPROJECTS\n1. SkillBridge AI: Employability Ecosystem\n2. AgriSense AI: Smart Agriculture Platform\n3. GhatShield AI: Environmental Water Monitoring\n\nLEADERSHIP\n- Google Student Ambassador 2026\n- Founder & Lead, Team Setu\n- President, Student Activity Council VITS\n- Student Placement Coordinator`;
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Pushkar_Vishwakarma_Resume_CGPA_${p.education.cgpa}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0E0E12] border border-[#343438] rounded-2xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Top Control Bar with Screws */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#242428] bg-[#121216]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/10 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 id="resume-title" className="text-sm font-bold font-display text-white tracking-wide">
                Pushkar Vishwakarma — Curriculum Vitae
              </h2>
              <p className="text-[11px] font-mono text-[#8E8E93]">
                AI & Machine Learning · CGPA 8.39 · VITS Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#8E8E93] hover:text-white bg-[#18181D] hover:bg-[#202026] border border-[#2A2A30] rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#A6E635]" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#8E8E93] hover:text-white bg-[#18181D] hover:bg-[#202026] border border-[#2A2A30] rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-black bg-[#FF6A00] hover:bg-[#FF6A00]/90 rounded-lg transition-colors cursor-pointer uppercase"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#8E8E93] hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-1 cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#09090C] text-[#F5F5F5] font-sans selection:bg-[#FF6A00]/30">
          {/* Header */}
          <div className="border-b border-[#242428] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white uppercase">
                  PUSHKAR VISHWAKARMA
                </h1>
                <p className="text-xs font-mono font-bold text-[#FF6A00] mt-1 tracking-wider uppercase">
                  AI ENGINEER · GENERATIVE AI DEVELOPER · INNOVATION BUILDER
                </p>
                <p className="text-xs text-[#8E8E93] mt-1.5 font-mono">
                  Bhopal, Madhya Pradesh, India
                </p>
              </div>

              <div className="text-xs font-mono text-[#8E8E93] space-y-1 sm:text-right">
                <div>
                  Email:{' '}
                  <a href={`mailto:${p.email}`} className="text-white hover:text-[#FF6A00] transition-colors">
                    {p.email}
                  </a>
                </div>
                <div>
                  Phone: <span className="text-white">{p.phone}</span>
                </div>
                <div>
                  LinkedIn:{' '}
                  <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF6A00] transition-colors">
                    pushkar-vishwakarma
                  </a>
                </div>
                <div>
                  GitHub:{' '}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF6A00] transition-colors">
                    isthatpushkar01
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#121216] border border-[#242428] text-xs text-[#8E8E93] leading-relaxed font-sans">
              <span className="text-[#A6E635] font-mono font-semibold">Core Focus:</span>{' '}
              {p.tagline} Currently pursuing B.Tech in Artificial Intelligence & Machine Learning at Vaishnavi Institute of Technology & Science, Bhopal. Building intelligent, data-driven systems and leading student innovation.
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF6A00] mb-3">
              Education
            </h3>
            <div className="bg-[#121216] border border-[#242428] rounded-xl p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="text-sm font-semibold text-white">
                  {p.education.degree}
                </span>
                <span className="text-xs font-mono text-[#8E8E93]">
                  {p.education.duration}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#8E8E93] mt-1 font-mono">
                <span>{p.education.institution}</span>
                <span className="font-bold text-[#A6E635]">
                  Cumulative GPA: {p.education.cgpa} / 10.0
                </span>
              </div>
            </div>
          </div>

          {/* Technical Arsenal */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF6A00] mb-3">
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#121216] border border-[#242428] rounded-xl p-3.5 space-y-1">
                <span className="font-semibold text-white block font-mono">Programming & Core</span>
                <p className="text-[#8E8E93]">Python, Java, JavaScript, Object-Oriented Design, Data Structures</p>
              </div>
              <div className="bg-[#121216] border border-[#242428] rounded-xl p-3.5 space-y-1">
                <span className="font-semibold text-white block font-mono">AI & Machine Learning</span>
                <p className="text-[#8E8E93]">Machine Learning, Generative AI, LLMs, Prompt Engineering, EDA, Data Modelling, MLOps Fundamentals</p>
              </div>
              <div className="bg-[#121216] border border-[#242428] rounded-xl p-3.5 space-y-1">
                <span className="font-semibold text-white block font-mono">Frameworks & Libraries</span>
                <p className="text-[#8E8E93]">Flask, FastAPI, React.js, Pandas, NumPy, Scikit-learn, OpenCV</p>
              </div>
              <div className="bg-[#121216] border border-[#242428] rounded-xl p-3.5 space-y-1">
                <span className="font-semibold text-white block font-mono">Databases & Cloud Tools</span>
                <p className="text-[#8E8E93]">MongoDB, SQLite, REST APIs, Git, GitHub, VS Code, Google Gemini, Claude Console</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF6A00] mb-3">
              Featured Engineering Projects
            </h3>
            <div className="space-y-3">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="bg-[#121216] border border-[#242428] rounded-xl p-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">{proj.title}</span>
                      <span className="text-xs text-[#8E8E93] font-mono">· {proj.category}</span>
                    </div>
                    <span className="text-xs font-mono text-[#FF6A00]">{proj.duration}</span>
                  </div>
                  <p className="text-xs text-[#8E8E93] leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="text-xs text-[#8E8E93] list-disc list-inside space-y-1">
                    {proj.coreFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                  <div className="pt-1 flex flex-wrap gap-1 text-[11px] font-mono text-[#F5B900]">
                    <span className="text-[#55555A]">Tech:</span> {proj.techStack.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Leadership */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF6A00] mb-3">
              Leadership & Experience
            </h3>
            <div className="space-y-3">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div key={exp.id} className="bg-[#121216] border border-[#242428] rounded-xl p-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">{exp.title}</span>
                      <span className="text-xs text-[#8E8E93]">· {exp.organization}</span>
                    </div>
                    <span className="text-xs font-mono text-[#8E8E93]">{exp.period}</span>
                  </div>
                  <p className="text-xs text-[#8E8E93]">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Hackathons */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF6A00] mb-3">
              Selected Honors & Hackathons
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.hackathons.map((h) => (
                <div key={h.id} className="p-3 bg-[#121216] border border-[#242428] rounded-lg space-y-1">
                  <div className="flex items-center justify-between text-white font-medium">
                    <span>{h.title}</span>
                    <span className="text-[10px] font-mono text-[#A6E635]">{h.tag}</span>
                  </div>
                  <p className="text-xs text-[#8E8E93] font-sans">{h.roleOrResult}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#242428] bg-[#121216] flex items-center justify-between text-xs font-mono text-[#55555A]">
          <span>VERIFIED INSTITUTIONAL RECORD · BHOPAL, MP, INDIA</span>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors cursor-pointer"
          >
            CLOSE [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
