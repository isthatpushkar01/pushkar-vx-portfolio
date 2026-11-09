export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  duration: string;
  status: 'In Active Development' | 'Prototype Shortlisted' | 'Collaborative Research';
  description: string;
  image: string;
  coreFeatures: string[];
  plannedFeatures?: string[];
  pipelineSteps?: string[];
  pipelineNote?: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  badge?: string;
  description: string;
  responsibilities: string[];
}

export interface TimelineActivity {
  title: string;
  category: 'Education' | 'Leadership' | 'Hackathon' | 'Certification' | 'Research' | 'Conference';
  date?: string;
  detail: string;
  badge?: string;
  iconName?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  points: string[];
  highlight?: string;
  activities?: TimelineActivity[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; projectLinked?: string[] }[];
}

export interface HackathonEvent {
  id: string;
  title: string;
  roleOrResult: string;
  location: string;
  year: string;
  description: string;
  tag: string;
}

export interface LocationNode {
  id: string;
  city: string;
  state: string;
  label: string;
  coordinates: { x: number; y: number }; // Relative map coordinates (%)
  highlights: string[];
  role: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  certificateType: string;
  year: string;
  category: 'AI & Data' | 'Leadership' | 'Software Engineering' | 'Research & Innovation';
  credentialNote: string;
  image: string;
  originalPdf?: string;
  certificateId?: string;
  verificationCodes?: string;
  additionalDetail?: string;
  skills: string[];
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  detail: string;
  iconName: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Pushkar Vishwakarma',
    brand: 'PUSHKAR.VX',
    titles: [
      'AI Engineer',
      'Generative AI Developer',
      'Innovation Builder',
      'Tech Leader'
    ],
    tagline: 'Building Intelligent Solutions. Leading Innovation. Creating Impact.',
    alternativeTagline: 'Code. Innovate. Build. Repeat.',
    location: 'Bhopal, Madhya Pradesh, India',
    email: 'is.that.pushkar01@gmail.com',
    phone: '+91 9691585949',
    linkedin: 'https://www.linkedin.com/in/pushkar-vishwakarma-0b759a37a',
    github: 'https://github.com/isthatpushkar01',
    communitySize: '3,000+ followers',
    education: {
      degree: 'B.Tech – Artificial Intelligence & Machine Learning',
      institution: 'Vaishnavi Institute of Technology & Science, Bhopal',
      duration: '2023 – 2027',
      cgpa: '8.39',
      status: 'Undergraduate Student'
    },
    bio: `I am Pushkar Vishwakarma, an Artificial Intelligence and Machine Learning enthusiast, developer and innovation-driven student leader.

Currently pursuing B.Tech in Artificial Intelligence and Machine Learning at Vaishnavi Institute of Technology & Science, Bhopal.

My journey revolves around exploring emerging technologies, building intelligent applications, participating in innovation challenges, developing AI-powered products and leading student communities.

From creating AI-driven solutions to representing my institution at innovation platforms, I continuously explore how technology can solve meaningful real-world problems.

I believe in learning by building, leading through action and creating technology that makes a difference.`,
    philosophy: 'Technology is not just about writing code. It is about identifying problems, exploring possibilities and building solutions that create impact.',
    statement: 'I BUILD WITH INTELLIGENCE. I LEAD WITH PURPOSE. I EXPLORE BEYOND BOUNDARIES.'
  },

  projects: [
    {
      id: 'skillbridge-ai',
      title: 'SkillBridge AI',
      category: 'AI-Powered Employability Ecosystem',
      role: 'Developer',
      duration: 'April 2025 – Present',
      status: 'In Active Development',
      description: 'An AI-powered employability ecosystem connecting students, Training & Placement Officers (TPOs), and recruiters through intelligent skill assessment, career recommendations, and employability analytics.',
      image: '/src/assets/images/skillbridge_ai_preview_1794061672635.jpg',
      coreFeatures: [
        'Verified digital student profiles with comprehensive skill evidence',
        'Multi-dimensional skill assessments and competency records',
        'AI-based skill-gap analysis tailored to real employer requirements',
        'Explainable job-role matching engine',
        'Personalized career recommendation pathways',
        'Specialized 3-tier dashboards: Student, TPO, and Recruiter views',
        'Automated placement workflow management and analytics'
      ],
      pipelineSteps: [
        'Student Profile Creation',
        'Skill Evidence Collection',
        'Competency Extraction',
        'Skill Assessment Engine',
        'Job Requirement Comparison',
        'Skill Gap Identification',
        'Explainable Matching',
        'Career Recommendations'
      ],
      pipelineNote: 'Job-match percentages represent skill alignment based on verified competencies, not probability of employment.',
      techStack: ['Python', 'Flask', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript', 'Generative AI', 'Git', 'GitHub'],
      githubUrl: 'https://github.com/isthatpushkar01',
      demoUrl: '#'
    },
    {
      id: 'agrisense-ai',
      title: 'AgriSense AI',
      category: 'AI-Powered Smart Agriculture',
      role: 'Developer',
      duration: 'September 2025 – Present',
      status: 'In Active Development',
      description: 'An AI-driven agricultural decision-support platform designed to empower farmers with crop analysis, environmental monitoring, intelligent advisory alerts, and actionable data-driven farming insights.',
      image: '/src/assets/images/agrisense_ai_preview_1794061673877.jpg',
      coreFeatures: [
        'High-resolution crop health analysis and real-time monitoring',
        'Agricultural environmental data modeling and soil diagnostics',
        'Smart farming recommendations and tailored fertilization advice',
        'Predictive weather-based risk insights and frost/heat warnings',
        'Early crop disease identification and mitigation workflows',
        'Intuitive, mobile-accessible decision support interface'
      ],
      plannedFeatures: [
        'Live Mandi price intelligence and commodity market trends',
        'Nearby warehouse discovery and cold-storage availability maps',
        'Bhashini-powered multilingual voice interaction in vernacular languages'
      ],
      techStack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'MongoDB', 'REST APIs', 'Weather API', 'JavaScript'],
      githubUrl: 'https://github.com/isthatpushkar01',
      demoUrl: '#'
    },
    {
      id: 'ghatshield-ai',
      title: 'GhatShield AI',
      category: 'Environmental Intelligence & Water Quality',
      role: 'Collaborator',
      duration: 'October 2026 – Present',
      status: 'Collaborative Research',
      description: 'An AI-powered environmental monitoring solution engineered to support water-quality assessment, pollution-risk analysis, environmental sensor data validation, and evidence-based ecological decision-making.',
      image: '/src/assets/images/ghatshield_ai_preview_1794061673742.jpg',
      coreFeatures: [
        'Water-quality assessment workflows using river sensor networks',
        'Environmental data validation and outlier noise filtering',
        'Multi-parameter pollution-risk trend analysis (pH, DO, Turbidity, BOD)',
        'Data trend identification and anomaly warning systems',
        'Systematic sampling-plan management along riverbank nodes',
        'Automated regulatory report generation with AI-assisted insights',
        'Bilingual ecological reporting exploration'
      ],
      techStack: ['Python', 'FastAPI', 'React.js', 'TypeScript', 'Pandas', 'SQLite', 'SQLAlchemy', 'Pydantic', 'ReportLab', 'Claude Console', 'Git'],
      githubUrl: 'https://github.com/isthatpushkar01',
      demoUrl: '#'
    }
  ] as Project[],

  timeline: [
    {
      year: '2023',
      title: 'Academic Genesis & AI/ML Foundation',
      subtitle: 'B.Tech in Artificial Intelligence & Machine Learning',
      highlight: 'B.Tech AI & ML Genesis',
      points: [
        'Began B.Tech journey in Artificial Intelligence & Machine Learning at Vaishnavi Institute of Technology & Science (VITS) Bhopal.',
        'Immersed in core algorithmic programming, Data Structures, Python, Object-Oriented Design, and computational mathematics.',
        'Initiated exploration of neural networks, foundational ML models, and emerging generative frameworks.',
        'Formulated vision for bridging technology with real-world community challenges.'
      ],
      activities: [
        {
          title: 'B.Tech AI & ML Inauguration',
          category: 'Education',
          date: 'August 2023',
          detail: 'Enrolled in specialized B.Tech in Artificial Intelligence & Machine Learning at VITS Bhopal, maintaining an 8.39 CGPA track record.',
          badge: 'VITS Bhopal · 8.39 CGPA'
        },
        {
          title: 'Core Computer Science & Mathematics for ML',
          category: 'Education',
          date: '2023',
          detail: 'Built rigorous foundations in Python, Java, discrete structures, and applied linear algebra for artificial intelligence.',
          badge: 'Foundations'
        }
      ]
    },
    {
      year: '2024',
      title: 'Team Setu & Institutional Leadership',
      subtitle: 'Ecosystem Building & Career Enablement',
      highlight: 'Founded Team Setu & T&P Role',
      points: [
        'Founded Team Setu – a student innovation and hackathon cohort uniting developers, designers, and problem-solvers.',
        'Appointed Student Placement Coordinator at VITS Training & Placement Cell, coordinating corporate recruitment drives and student skill readiness.',
        'Started technical collaboration initiatives, hackathon teams, and peer-to-peer developer mentorship.',
        'Began engineering exploratory AI prototypes for environmental and institutional problem spaces.'
      ],
      activities: [
        {
          title: 'Founded Team Setu',
          category: 'Leadership',
          date: '2024',
          detail: 'Founded Team Setu to create real-world technological solutions, leading 15+ student engineers across national hackathons.',
          badge: 'Founder & Team Lead'
        },
        {
          title: 'Student Placement Coordinator',
          category: 'Leadership',
          date: '2024 – Present',
          detail: 'Appointed Coordinator at Training & Placement Cell, facilitating campus recruitment drives, industry workshops, and student analytics.',
          badge: 'T&P Cell VITS'
        },
        {
          title: 'Technical Collaboration & Innovation Initiatives',
          category: 'Leadership',
          date: '2024',
          detail: 'Initiated cross-campus coding sprints, hackathon strategy groups, and developer meetups across Bhopal.',
          badge: 'Collaborative Tech'
        }
      ]
    },
    {
      year: '2025',
      title: 'National Innovation Platforms & Industry Job Simulations',
      subtitle: 'Hackathons, Enterprise Simulators & Gemini Certification',
      highlight: 'National Hackathons & 4 Industry Certs',
      points: [
        'Smart India Hackathon (SIH) 2025 internal presentation, rigorous technical evaluation, and selection process.',
        'KIT\'s Innovation and Research Foundation (KIT\'s IRF) IDEATHON 2025 participation in Kolhapur, Maharashtra.',
        'Deloitte Data Analytics Job Simulation – Completed forensic technology and data storytelling simulation (August 31, 2025).',
        'Tata GenAI Powered Data Analytics Job Simulation – Explored generative AI, delinquency prediction, and risk profiling (August 30, 2025).',
        'Google for Education – Gemini Certified Student qualification awarded on October 15, 2025 (Valid through October 14, 2028).',
        'Walmart Global Tech Advanced Software Engineering Job Simulation – Advanced data structures, software architecture, and relational design (October 19, 2025).'
      ],
      activities: [
        {
          title: 'Smart India Hackathon (SIH) 2025 Selection',
          category: 'Hackathon',
          date: '2025',
          detail: 'Qualified through institutional internal screening with high-impact technology pitch and software architecture evaluation.',
          badge: 'SIH 2025 Qualifier'
        },
        {
          title: 'KIT\'s IRF IDEATHON 2025, Kolhapur',
          category: 'Hackathon',
          date: '2025',
          detail: 'Competed at KIT\'s Innovation and Research Foundation, Kolhapur (supported by MSInS, MoSDEE, GoM and DST NIDHI i-TBI, MoST, GoI).',
          badge: 'Round 2 Cleared'
        },
        {
          title: 'Deloitte Data Analytics Job Simulation',
          category: 'Certification',
          date: 'August 31, 2025',
          detail: 'Completed practical tasks in exploratory data analysis, forensic technology, and business reporting (Verification: AQ4Kdj2Wjxi7hwnQk).',
          badge: 'Deloitte / Forage'
        },
        {
          title: 'Tata GenAI Powered Data Analytics Simulation',
          category: 'Certification',
          date: 'August 30, 2025',
          detail: 'Completed AI-driven collections strategy, risk profiling, and delinquency forecasting with generative AI (Verification: Trveq6cLS9LLK6YLt).',
          badge: 'Tata / Forage'
        },
        {
          title: 'Gemini Certified Student – University',
          category: 'Certification',
          date: 'October 15, 2025',
          detail: 'Awarded Google for Education certification verifying core competency in Gemini AI, prompt design, and multimodal systems (Valid 2025–2028).',
          badge: 'Google for Education'
        },
        {
          title: 'Walmart Advanced Software Engineering Simulation',
          category: 'Certification',
          date: 'October 19, 2025',
          detail: 'Completed tasks in advanced data structures, software architecture, relational database design, and data munging (Verification: wWBKJBbFWES2KGT6e).',
          badge: 'Walmart Global Tech'
        }
      ]
    },
    {
      year: '2026',
      title: 'Apex Leadership, Research Presentation & National Honors',
      subtitle: 'Google Student Ambassador, SAC President & Flagship Challenges',
      highlight: 'Top 5 Team in India & GSA 2026',
      points: [
        'Google Student Ambassador (GSA) 2026 – Selected to champion Google AI & developer technologies on campus.',
        'President – Student Activity Council (SAC), VITS Bhopal, leading campus-wide governance, hackathons, and culture.',
        'Core Volunteer – Google Developer Group (GDG) Bhopal, selected from 70+ applicants for Central India tech festivals.',
        'AICTE–MIC Innovation, Design and Entrepreneurship (IDE) Bootcamp, Solapur – Selected national delegate.',
        'Top 5 Team in India – Earned national Top 5 Team in India honors in the Innovation Challenge at IDE Bootcamp.',
        'Wadhwani Foundation Ignite Bootcamp – Idea to Plan (April 08, 2026) – 18 hours of ideation, business modeling, and financial planning.',
        'AI for Bharat prototype shortlisted among prominent national entries targeting high-impact public domain solutions.',
        'AMD Ryzen Slingshot selection at VIT Bhopal for high-performance computing and innovation.',
        'KIT and innovation-related activities and cross-college engineering collaborations.',
        'Madhya Pradesh Startup Summit 2026 – Invited delegate representing youth entrepreneurship at Ravindra Bhawan, Bhopal.',
        'ISRO Bharatiya Antariksh Hackathon 2026 – Selected participant with successful space challenge idea submission (Certificate ID: 2026H2S06BAH-P24840).',
        'ICESSM-2026 Research Paper Presentation – Presented "Machine Learning-Enabled Security for 5G Network Slicing: Challenges, Solutions, and Future Directions" at 4th International Conference.',
        'Claude One-Day Hackathon – Participated in building autonomous LLM agents and prompt architectures.',
        'BuildHub Digital Innovation Fest 2026 – Appointed Official Campus Ambassador (Certificate ID: BH-CA-2026061326).'
      ],
      activities: [
        {
          title: 'Google Student Ambassador 2026',
          category: 'Leadership',
          date: '2026',
          detail: 'Selected campus tech ambassador representing Google technologies, developer student programs, and AI workshops.',
          badge: 'Google Student Ambassador'
        },
        {
          title: 'President – Student Activity Council',
          category: 'Leadership',
          date: '2026 – Present',
          detail: 'Elected President of the apex student body at VITS Bhopal, steering technical festivals, club governance, and administrative alignment.',
          badge: 'Apex Campus Leadership'
        },
        {
          title: 'Top 5 Team in India – AICTE/MIC IDE Bootcamp',
          category: 'Hackathon',
          date: '2026',
          detail: 'Recognized among Top 5 Teams across all participating Indian engineering colleges in Solapur, Maharashtra.',
          badge: 'National Top 5'
        },
        {
          title: 'ICESSM-2026 Research Paper Presentation',
          category: 'Research',
          date: 'May 15–16, 2026',
          detail: 'Presented research on "Machine Learning-Enabled Security for 5G Network Slicing" at Sri Balaji College, Jaipur.',
          badge: 'Research Paper Presentation'
        },
        {
          title: 'ISRO Bharatiya Antariksh Hackathon 2026',
          category: 'Hackathon',
          date: '2026',
          detail: 'Participated in ISRO space challenge powered by Hack2skill with successful idea submission (ID: 2026H2S06BAH-P24840).',
          badge: 'ISRO Participation'
        },
        {
          title: 'Wadhwani Foundation Ignite Bootcamp',
          category: 'Certification',
          date: 'April 08, 2026',
          detail: 'Completed 18 hours of venture validation, prototyping, business modeling, and financial planning.',
          badge: 'Wadhwani Foundation'
        },
        {
          title: 'Core Volunteer – GDG Bhopal',
          category: 'Leadership',
          date: '2026',
          detail: 'Selected among top volunteers from 70+ applicants to organize DevFests, AI workshops, and community events.',
          badge: 'GDG Bhopal'
        },
        {
          title: 'BuildHub Digital Innovation Fest Ambassador',
          category: 'Leadership',
          date: '2026',
          detail: 'Appointed Official Campus Ambassador for BuildHub Innovation & Entrepreneurship Club (ID: BH-CA-2026061326).',
          badge: 'BuildHub Ambassador'
        },
        {
          title: 'AMD Ryzen Slingshot Selection',
          category: 'Hackathon',
          date: '2026',
          detail: 'Selected among top national contenders in high-performance computing challenge at VIT Bhopal.',
          badge: 'AMD Ryzen Slingshot'
        },
        {
          title: 'Madhya Pradesh Startup Summit 2026',
          category: 'Conference',
          date: '2026',
          detail: 'Invited delegate representing university innovation at Ravindra Bhawan, Bhopal.',
          badge: 'MP Startup Summit'
        },
        {
          title: 'AI for Bharat Prototype Shortlist',
          category: 'Hackathon',
          date: '2026',
          detail: 'Engineered AI-driven prototype for public good, shortlisted in nationwide evaluation rounds.',
          badge: 'National Shortlist'
        },
        {
          title: 'Claude One-Day Hackathon',
          category: 'Hackathon',
          date: '2026',
          detail: 'Built rapid generative AI solutions and autonomous prompt pipelines in intensive hackathon.',
          badge: 'Claude Hackathon'
        }
      ]
    },
    {
      year: '2027',
      title: 'B.Tech Graduation & Future Innovation Horizons',
      subtitle: 'Expected B.Tech Completion & Frontier AI Deployment',
      highlight: 'Expected B.Tech Graduation',
      points: [
        'Expected B.Tech graduation in Artificial Intelligence & Machine Learning from VITS Bhopal.',
        'Future goals and upcoming innovation milestones: scaling enterprise-grade AI systems and autonomous agentic workflows.',
        'Advancing research in decentralized 5G security, computer vision for public safety, and smart agriculture decision engines.',
        'Scaling Team Setu into an impactful technology incubator and contributing to India\'s deep-tech developer ecosystem.'
      ],
      activities: [
        {
          title: 'B.Tech AI & ML Graduation',
          category: 'Education',
          date: 'Expected 2027',
          detail: 'Completion of 4-year degree in Artificial Intelligence & Machine Learning with established technical leadership.',
          badge: 'Graduation Horizon'
        },
        {
          title: 'Future Goals & Innovation Milestones',
          category: 'Research',
          date: '2027 Horizon',
          detail: 'Focusing on production-scale generative systems, agentic architectures, and startup expansion.',
          badge: 'Upcoming Milestones'
        }
      ]
    }
  ] as TimelineMilestone[],

  experience: [
    {
      id: 'team-setu',
      title: 'Founder & Team Lead',
      organization: 'Team Setu',
      period: '2024 – Present',
      badge: 'Student Innovation Team',
      description: 'Founded and led a premier student innovation team focused on technology development, hackathon problem-solving, and cross-functional engineering.',
      responsibilities: [
        'Define technical roadmap and team strategy for national hackathons and ideathons.',
        'Spearhead project development from problem discovery to technical prototype.',
        'Coordinate task distribution, peer code reviews, and architectural decisions.',
        'Foster culture of peer mentoring, rapid learning, and collaborative building.'
      ]
    },
    {
      id: 'gsa-2026',
      title: 'Google Student Ambassador',
      organization: 'Google Developer Student Programs',
      period: '2026',
      badge: 'Global Tech Program',
      description: 'Selected as Google Student Ambassador for 2026 to represent developer technologies, foster AI education, and lead campus engagement.',
      responsibilities: [
        'Drive technology awareness across campus around modern Google developer tools and AI models.',
        'Organize hands-on workshops, developer study jams, and technical hackathons.',
        'Facilitate access to Google Cloud, Gemini API, and developer ecosystem resources.',
        'Represent the student voice in regional and national developer forums.'
      ]
    },
    {
      id: 'sac-president',
      title: 'President – Student Activity Council',
      organization: 'Vaishnavi Institute of Technology & Science, Bhopal',
      period: '2026 – Present',
      badge: 'Apex Campus Leadership',
      description: 'Leading the apex student council overseeing student activities, technical clubs, inter-college events, and institutional representation.',
      responsibilities: [
        'Lead and coordinate cross-departmental student committees and sub-councils.',
        'Strengthen student-faculty alignment and institutional administrative collaboration.',
        'Spearhead campus-wide cultural, technical, and sports festivals.',
        'Champion student welfare, grievance representation, and vibrant campus culture.'
      ]
    },
    {
      id: 'placement-coordinator',
      title: 'Student Placement Coordinator',
      organization: 'Training & Placement Cell, VITS Bhopal',
      period: '2024 – Present',
      badge: 'Industry Relations',
      description: 'Coordinating campus recruitment drives, industry-readiness training sessions, and corporate relations.',
      responsibilities: [
        'Coordinate end-to-end recruitment drives and pool campus placements with visiting tech recruiters.',
        'Manage student candidate communication, aptitude assessment logistics, and interview schedules.',
        'Assist in organizing industry mock interviews, resume reviews, and soft-skill bootcamps.',
        'Maintain recruitment records and student employability tracking databases.'
      ]
    },
    {
      id: 'gdg-volunteer',
      title: 'Core Volunteer',
      organization: 'Google Developer Group (GDG), Bhopal',
      period: '2026 – Present',
      badge: 'Community Leadership',
      description: 'Selected as a Core Volunteer from among 70+ applicants to support premier developer community gatherings and DevFest initiatives.',
      responsibilities: [
        'Support large-scale developer event planning and operational execution across Bhopal.',
        'Engage with participants, speakers, and tech professionals during tech symposiums.',
        'Promote open-source initiatives and developer outreach in Central India.'
      ]
    },
    {
      id: 'ide-bootcamp',
      title: 'National Delegate & Top 5 Team',
      organization: 'AICTE–MIC Innovation & Entrepreneurship Bootcamp',
      period: '2026',
      badge: 'National Innovation',
      description: 'Represented VITS Bhopal at the national IDE Bootcamp in Solapur, Maharashtra, achieving Top 5 Team in India honors.',
      responsibilities: [
        'Engaged in rigorous 5-day residential venture ideation, market validation, and business modeling.',
        'Delivered high-stakes pitch presentations to national jury and industry investors.',
        'Ranked among the Top 5 Teams across India in the Innovation Challenge.'
      ]
    }
  ] as ExperienceItem[],

  skills: [
    {
      category: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', projectLinked: ['SkillBridge AI', 'AgriSense AI'] },
        { name: 'Generative AI', projectLinked: ['SkillBridge AI'] },
        { name: 'Large Language Models (LLMs)', projectLinked: ['SkillBridge AI', 'GhatShield AI'] },
        { name: 'Prompt Engineering', projectLinked: ['SkillBridge AI'] },
        { name: 'Exploratory Data Analysis', projectLinked: ['AgriSense AI', 'GhatShield AI'] },
        { name: 'Data Modelling', projectLinked: ['AgriSense AI'] },
        { name: 'MLOps Fundamentals', projectLinked: ['SkillBridge AI'] }
      ]
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', projectLinked: ['SkillBridge AI', 'AgriSense AI', 'GhatShield AI'] },
        { name: 'Java', projectLinked: ['Academic Engineering'] },
        { name: 'JavaScript', projectLinked: ['SkillBridge AI', 'AgriSense AI'] }
      ]
    },
    {
      category: 'Frameworks & Web',
      skills: [
        { name: 'Flask', projectLinked: ['SkillBridge AI', 'AgriSense AI'] },
        { name: 'FastAPI', projectLinked: ['GhatShield AI'] },
        { name: 'React.js', projectLinked: ['GhatShield AI', 'Portfolio'] },
        { name: 'HTML5 & CSS3', projectLinked: ['SkillBridge AI', 'AgriSense AI'] },
        { name: 'REST APIs', projectLinked: ['AgriSense AI', 'GhatShield AI'] },
        { name: 'Full Stack Development', projectLinked: ['SkillBridge AI'] }
      ]
    },
    {
      category: 'Libraries & Data',
      skills: [
        { name: 'Pandas', projectLinked: ['AgriSense AI', 'GhatShield AI'] },
        { name: 'NumPy', projectLinked: ['AgriSense AI'] },
        { name: 'Scikit-learn', projectLinked: ['AgriSense AI'] },
        { name: 'OpenCV', projectLinked: ['Exploratory Vision'] },
        { name: 'MongoDB', projectLinked: ['SkillBridge AI', 'AgriSense AI'] },
        { name: 'SQLite', projectLinked: ['GhatShield AI'] }
      ]
    },
    {
      category: 'AI Platforms & Cloud',
      skills: [
        { name: 'Google Gemini', projectLinked: ['GSA 2026', 'Portfolio AI'] },
        { name: 'Claude / Anthropic Console', projectLinked: ['GhatShield AI', 'Hackathons'] },
        { name: 'AWS Fundamentals', projectLinked: ['Cloud Deployment'] }
      ]
    },
    {
      category: 'Developer Tools',
      skills: [
        { name: 'Git & GitHub', projectLinked: ['SkillBridge AI', 'Team Setu'] },
        { name: 'Visual Studio Code', projectLinked: ['Daily Stack'] }
      ]
    }
  ] as SkillCategory[],

  hackathons: [
    {
      id: 'ide-bootcamp-2026',
      title: 'AICTE–MIC IDE Bootcamp 2026',
      roleOrResult: 'Top 5 Team in India – Innovation Challenge',
      location: 'Solapur, Maharashtra (NB Navale University)',
      year: '2026',
      description: 'Selected participant representing VITS Bhopal at the prestigious national innovation bootcamp organized by Ministry of Education Innovation Cell (MIC) & AICTE. Earned Top 5 Team in India honors.',
      tag: 'National Top 5'
    },
    {
      id: 'ai-for-bharat',
      title: 'AI for Bharat Challenge',
      roleOrResult: 'AI Prototype Shortlisted',
      location: 'National / Online',
      year: '2025',
      description: 'Engineered an AI-powered prototype focused on high-impact public domain applications; successfully shortlisted in national evaluation rounds.',
      tag: 'National Shortlist'
    },
    {
      id: 'kit-ideathon',
      title: 'KIT\'s IRF Ideathon',
      roleOrResult: 'Cleared Round 2 Qualifier',
      location: 'Kolhapur, Maharashtra',
      year: '2025',
      description: 'Presented innovative technological solution at Kolhapur Institute of Technology\'s International Research Forum, successfully clearing Round 2.',
      tag: 'Round 2 Cleared'
    },
    {
      id: 'ryzen-amd-slingshot',
      title: 'Ryzen AMD Slingshot',
      roleOrResult: 'National Shortlist',
      location: 'VIT Bhopal, Madhya Pradesh',
      year: '2026',
      description: 'Selected among top national contenders in high-performance computing and innovation challenge sponsored by AMD Ryzen at VIT Bhopal.',
      tag: 'Selected Shortlist'
    },
    {
      id: 'sih-2025',
      title: 'Smart India Hackathon 2025',
      roleOrResult: 'Institute-Level Internal Selection',
      location: 'VITS Bhopal',
      year: '2025',
      description: 'Qualified through rigorous institutional internal evaluation rounds with prototype presentation for SIH national problem statements.',
      tag: 'Institute Qualifier'
    },
    {
      id: 'claude-hackathon',
      title: 'Claude One-Day Hackathon',
      roleOrResult: 'Participant & Builder',
      location: 'Online Tech Ecosystem',
      year: '2026',
      description: 'Fast-paced intensive sprint building real-world AI applications with Anthropic Claude API models and prompt orchestration.',
      tag: 'Intensive Sprint'
    },
    {
      id: 'mp-startup-summit',
      title: 'Madhya Pradesh Startup Summit 2026',
      roleOrResult: 'Invited Delegate',
      location: 'Ravindra Bhawan, Bhopal',
      year: '2026',
      description: 'Participated as an institutional delegate networking with founders, investors, and state innovation policy leaders at Ravindra Bhawan.',
      tag: 'Ecosystem Delegate'
    }
  ] as HackathonEvent[],

  locations: [
    {
      id: 'bhopal',
      city: 'Bhopal',
      state: 'Madhya Pradesh',
      label: 'Home & Institutional Base',
      coordinates: { x: 48, y: 50 },
      highlights: [
        'Vaishnavi Institute of Technology & Science (VITS) Campus',
        'Madhya Pradesh Startup Summit at Ravindra Bhawan',
        'Google Developer Group (GDG) Bhopal activities & tech meetups',
        'President – Student Activity Council leadership base',
        'Training & Placement operations coordination'
      ],
      role: 'Education, Community Leadership & Primary Lab'
    },
    {
      id: 'solapur',
      city: 'Solapur',
      state: 'Maharashtra',
      label: 'AICTE–MIC IDE Bootcamp',
      coordinates: { x: 44, y: 68 },
      highlights: [
        'NB Navale Sinhgad College of Engineering campus',
        '5-Day AICTE–MIC Innovation & Entrepreneurship residential bootcamp',
        'Achieved Top 5 Team in India in the National Innovation Challenge'
      ],
      role: 'National Innovation Recognition'
    },
    {
      id: 'kolhapur',
      city: 'Kolhapur',
      state: 'Maharashtra',
      label: 'KIT\'s IRF Ideathon',
      coordinates: { x: 40, y: 72 },
      highlights: [
        'Kolhapur Institute of Technology International Research Forum',
        'Round 2 qualification in national ideation & prototype showcase'
      ],
      role: 'Technical Ideation & Defense'
    }
  ] as LocationNode[],

  achievements: [
    {
      id: 'gsa-milestone',
      title: 'Google Student Ambassador 2026',
      organization: 'Google Developer Student Programs',
      year: '2026',
      detail: 'Selected to represent Google technologies, AI initiatives, and student developer growth across the institution.',
      iconName: 'Award'
    },
    {
      id: 'top-5-india',
      title: 'Top 5 Team in India – IDE Bootcamp',
      organization: 'AICTE & Ministry of Education Innovation Cell (MIC)',
      year: '2026',
      detail: 'Recognized among the Top 5 Teams across all national participating colleges in the Innovation Challenge in Solapur.',
      iconName: 'Trophy'
    },
    {
      id: 'ai-bharat-shortlist',
      title: 'AI for Bharat – Prototype Shortlist',
      organization: 'National AI Initiative',
      year: '2025',
      detail: 'AI-driven prototype selected among competitive national entries targeting critical public good use cases.',
      iconName: 'Sparkles'
    },
    {
      id: 'amd-slingshot',
      title: 'Ryzen AMD Slingshot – National Shortlist',
      organization: 'AMD Ryzen & VIT Bhopal',
      year: '2026',
      detail: 'Shortlisted for advanced hardware and AI acceleration challenge at VIT Bhopal.',
      iconName: 'Cpu'
    },
    {
      id: 'sih-qualifier',
      title: 'Smart India Hackathon Qualifier',
      organization: 'Internal Institutional Selection, VITS',
      year: '2025',
      detail: 'Qualified through internal screening process with strong technical presentation for SIH.',
      iconName: 'CheckCircle'
    },
    {
      id: 'kit-round-2',
      title: 'KIT Innovation Hackathon – Round 2',
      organization: 'KIT Kolhapur',
      year: '2025',
      detail: 'Cleared competitive Round 2 at the International Research Forum Ideathon.',
      iconName: 'ShieldCheck'
    },
    {
      id: 'linkedin-community',
      title: '3,000+ Followers Professional Network',
      organization: 'LinkedIn Community',
      year: 'Ongoing',
      detail: 'Consistently sharing technical learnings, hackathon insights, and AI project updates with an engaged network.',
      iconName: 'Users'
    },
    {
      id: 'gdg-volunteer-selection',
      title: 'Core Volunteer – GDG Bhopal',
      organization: 'Google Developer Group Bhopal',
      year: '2026',
      detail: 'Selected among top volunteers from 70+ applicants to facilitate Central India’s tech community events.',
      iconName: 'HeartHandshake'
    }
  ] as Achievement[],

  certifications: [
    {
      id: 'cert-deloitte',
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte / Forage',
      date: 'August 31, 2025',
      certificateType: 'Certificate of Completion',
      year: '2025',
      category: 'AI & Data',
      credentialNote: 'Completed practical tasks in exploratory data analysis and forensic technology.',
      image: '/assets/certificates/deloitte.jpg',
      verificationCodes: 'Enrolment: AQ4Kdj2Wjxi7hwnQk | User: AW7Ae7HJN8Zpkv3do',
      skills: ['Data Analysis', 'Forensic Technology', 'Data Storytelling', 'Deloitte Simulation'],
      brandColors: {
        primary: '#86BC25',
        secondary: '#000000',
        accent: '#86BC25'
      }
    },
    {
      id: 'cert-wadhwani',
      title: 'Ignite Bootcamp – Idea to Plan',
      issuer: 'Wadhwani Foundation',
      date: 'April 08, 2026',
      certificateType: 'Certificate of Participation',
      year: '2026',
      category: 'Leadership',
      additionalDetail: 'This certificate confirms the completion of 18 hours of training.',
      credentialNote: 'Gained essential skills in ideation, prototyping, business modeling, and financial planning.',
      image: '/assets/certificates/wadhwani.jpg',
      skills: ['Ideation', 'Prototyping', 'Business Modeling', 'Financial Planning'],
      brandColors: {
        primary: '#E03A3E',
        secondary: '#F58220',
        accent: '#F58220'
      }
    },
    {
      id: 'cert-icessm',
      title: 'Certificate of Presentation – ICESSM 2026',
      issuer: 'Sri Balaji College of Engineering & Technology, Jaipur',
      date: 'May 15–16, 2026',
      certificateType: 'Certificate of Presentation',
      year: '2026',
      category: 'Research & Innovation',
      additionalDetail: '4th International Conference on Engineering, Social Science & Management (ICESSM-2026)',
      credentialNote: 'Presented research paper: "Machine Learning-Enabled Security for 5G Network Slicing: Challenges, Solutions, and Future Directions".',
      image: '/assets/certificates/icessm.jpg',
      skills: ['Machine Learning', '5G Network Slicing', 'Security Architectures', 'Research Defense'],
      brandColors: {
        primary: '#D4AF37',
        secondary: '#1A365D',
        accent: '#D4AF37'
      }
    },
    {
      id: 'cert-gemini',
      title: 'Gemini Certified Student – University',
      issuer: 'Google for Education',
      date: 'October 15, 2025',
      certificateType: 'University Qualification',
      year: '2025',
      category: 'AI & Data',
      additionalDetail: 'Valid through: October 14, 2028',
      credentialNote: 'Demonstrated knowledge, skills, and basic competencies needed to use Google AI.',
      image: '/assets/certificates/gemini.png',
      originalPdf: '/assets/aistudio/Gemini_Certificate_70fa0d55.pdf',
      skills: ['Google AI', 'Gemini Models', 'Prompt Engineering', 'Multimodal Systems'],
      brandColors: {
        primary: '#4285F4',
        secondary: '#34A853',
        accent: '#FBBC05'
      }
    },
    {
      id: 'cert-isro',
      title: 'Bharatiya Antariksh Hackathon 2026',
      issuer: 'Indian Space Research Organisation (ISRO), powered by Hack2skill',
      date: '2026',
      certificateType: 'Certificate of Participation',
      year: '2026',
      category: 'Research & Innovation',
      certificateId: '2026H2S06BAH-P24840',
      additionalDetail: 'Participation and successful idea submission',
      credentialNote: 'Recognized for enthusiasm, innovation, and commitment to solving real-world space challenges.',
      image: '/assets/certificates/isro.png',
      originalPdf: '/assets/aistudio/ISRO_Hackathon_Certificate__379936cd.pdf',
      skills: ['Space Tech Solutions', 'Idea Submission', 'Geospatial Workflows', 'ISRO Hackathon'],
      brandColors: {
        primary: '#003399',
        secondary: '#FF6600',
        accent: '#FF6600'
      }
    },
    {
      id: 'cert-kit',
      title: 'IDEATHON 2025',
      issuer: 'KIT\'s Innovation and Research Foundation (KIT\'s IRF), Kolhapur',
      date: '2025',
      certificateType: 'Certificate of Participation',
      year: '2025',
      category: 'Research & Innovation',
      additionalDetail: 'Supported by MSInS, MoSDEE, GoM and DST NIDHI i-TBI, MoST, GoI',
      credentialNote: 'Awarded for remarkable participation reflecting innovation, intellect, and purposeful creation.',
      image: '/assets/certificates/kit_irf.png',
      originalPdf: '/assets/aistudio/KIT-CERTIFICATE_15a0021b.pdf',
      skills: ['Innovation', 'Intellect', 'Purposeful Creation', 'Startup Ideation'],
      brandColors: {
        primary: '#FF6B00',
        secondary: '#0A2540',
        accent: '#E5A823'
      }
    },
    {
      id: 'cert-tata',
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata / Forage',
      date: 'August 30, 2025',
      certificateType: 'Certificate of Completion',
      year: '2025',
      category: 'AI & Data',
      verificationCodes: 'Enrolment: Trveq6cLS9LLK6YLt | User: AW7Ae7HJN8Zpkv3do',
      credentialNote: 'Completed exploratory data analysis, delinquency prediction with AI, and AI collections strategy.',
      image: '/assets/certificates/tata_genai.png',
      originalPdf: '/assets/aistudio/TATA_GEN_AI_Certificate_65961353.pdf',
      skills: ['Exploratory Data Analysis', 'Risk Profiling', 'Delinquency Prediction', 'AI Collections'],
      brandColors: {
        primary: '#0072CE',
        secondary: '#1B4E9B',
        accent: '#0072CE'
      }
    },
    {
      id: 'cert-walmart',
      title: 'Advanced Software Engineering Job Simulation',
      issuer: 'Walmart Global Tech / Forage',
      date: 'October 19, 2025',
      certificateType: 'Certificate of Completion',
      year: '2025',
      category: 'Software Engineering',
      verificationCodes: 'Enrolment: wWBKJBbFWES2KGT6e | User: AW7Ae7HJN8Zpkv3do',
      credentialNote: 'Completed tasks in advanced data structures, software architecture, relational database design, and data munging.',
      image: '/assets/certificates/walmart.png',
      originalPdf: '/assets/aistudio/Walmart_Certificate__7a92929e.pdf',
      skills: ['Advanced Data Structures', 'Software Architecture', 'Relational Database Design', 'Data Munging'],
      brandColors: {
        primary: '#0071CE',
        secondary: '#FFC220',
        accent: '#FFC220'
      }
    },
    {
      id: 'cert-buildhub',
      title: 'Official Campus Ambassador – BuildHub Digital Innovation Fest 2026',
      issuer: 'BuildHub – Innovation & Entrepreneurship Club',
      date: '2026',
      certificateType: 'Campus Ambassador Certificate',
      year: '2026',
      category: 'Leadership',
      certificateId: 'BH-CA-2026061326',
      credentialNote: 'Awarded for dedication, leadership, and commitment to promoting innovation, creativity, and entrepreneurship.',
      image: '/assets/certificates/buildhub.png',
      originalPdf: '/assets/aistudio/BuildHub_Certificate__5c26e209.pdf',
      skills: ['Leadership', 'Innovation', 'Community Outreach', 'Entrepreneurship'],
      brandColors: {
        primary: '#FF6600',
        secondary: '#0F1E36',
        accent: '#FF6600'
      }
    }
  ] as Certification[],

  leadershipHighlights: [
    {
      title: 'Cross-Disciplinary Team Leadership',
      description: 'Founded Team Setu and leading 15+ student developers, guiding product roadmaps, hackathon architecture, and code hygiene.'
    },
    {
      title: 'Institutional Representation & Public Speaking',
      description: 'Represented VITS Bhopal across state and national stages including MP Startup Summit, AICTE IDE Bootcamp Solapur, and KIT Kolhapur.'
    },
    {
      title: 'Event Management & Campus Culture',
      description: 'As President of the Student Activity Council, steering campus-wide fests, technical hackathons, and student-faculty collaboration.'
    },
    {
      title: 'Placement Coordination & Career Enablement',
      description: 'Facilitating student training and placement operations, helping bridge campus competencies with corporate engineering expectations.'
    }
  ]
};
