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

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  points: string[];
  highlight?: string;
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
  year: string;
  category: 'AI & Data' | 'Leadership' | 'Software Engineering';
  credentialNote: string;
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
      title: 'The Beginning',
      subtitle: 'Foundational Exploration',
      points: [
        'Started B.Tech in Artificial Intelligence & Machine Learning at VITS Bhopal.',
        'Began rigorous exploration of programming fundamentals and core computer science.',
        'Developed keen interest in neural networks and emerging AI technologies.'
      ],
      highlight: 'Academic Journey Initiated'
    },
    {
      year: '2024',
      title: 'Building the Foundation',
      subtitle: 'Team Building & Campus Leadership',
      points: [
        'Founded Team Setu – a student innovation & hackathon collaboration cohort.',
        'Appointed Student Placement Coordinator for the Training & Placement Cell.',
        'Initiated cross-disciplinary technical projects and community problem-solving.',
        'Engaged actively in hackathons, student meetups, and developer networks.'
      ],
      highlight: 'Founded Team Setu'
    },
    {
      year: '2025',
      title: 'Building & Exploring',
      subtitle: 'Product Development & National Platforms',
      points: [
        'Engineered SkillBridge AI – an AI employability ecosystem for students and recruiters.',
        'Developed AgriSense AI – smart agricultural crop monitoring solution.',
        'Smart India Hackathon 2025 internal selection and institutional presentation.',
        'Cleared Round 2 at KIT\'s IRF Ideathon in Kolhapur, Maharashtra.',
        'AI for Bharat prototype shortlisted among prominent national submissions.'
      ],
      highlight: 'Multiple AI Prototypes Shortlisted'
    },
    {
      year: '2026',
      title: 'Leadership & Innovation',
      subtitle: 'National Recognition & Ecosystem Leadership',
      points: [
        'Selected as Google Student Ambassador 2026 representing campus tech innovation.',
        'Selected for AICTE–MIC IDE Bootcamp in Solapur, Maharashtra.',
        'Achieved Top 5 Team in India recognition in the IDE Bootcamp Innovation Challenge.',
        'Selected for Ryzen AMD Slingshot national shortlist at VIT Bhopal.',
        'Participated in the Claude One-Day Hackathon building AI-driven solutions.',
        'Attended Madhya Pradesh Startup Summit as an invited delegate at Ravindra Bhawan, Bhopal.',
        'Appointed President of the Student Activity Council (SAC) at VITS Bhopal.',
        'Selected as Core Volunteer for Google Developer Group (GDG) Bhopal (Top 70+ applicants).',
        'Continued collaborative engineering on GhatShield AI for environmental monitoring.'
      ],
      highlight: 'Top 5 in India & GSA 2026'
    },
    {
      year: '2027',
      title: 'The Next Chapter',
      subtitle: 'Graduation & Frontier AI Engineering',
      points: [
        'Expected B.Tech graduation in Artificial Intelligence & Machine Learning.',
        'Aspiring to contribute to high-impact AI engineering and product innovation.',
        'Exploring opportunities in research, tech entrepreneurship, and frontier AI systems.'
      ],
      highlight: 'Vision 2027'
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
      id: 'deloitte-da',
      title: 'Data Analytics Virtual Internship',
      issuer: 'Deloitte',
      year: '2025',
      category: 'AI & Data',
      credentialNote: 'Practical data analysis, dashboarding, business insights, and telemetry modeling simulation.'
    },
    {
      id: 'gsa-cert',
      title: 'Google Student Ambassador 2026',
      issuer: 'Google Developer Programs',
      year: '2026',
      category: 'Leadership',
      credentialNote: 'Official credential representing campus developer engagement and AI innovation.'
    },
    {
      id: 'aicte-bootcamp-cert',
      title: 'AICTE–MIC IDE Bootcamp 2026',
      issuer: 'Ministry of Education Innovation Cell & AICTE',
      year: '2026',
      category: 'Leadership',
      credentialNote: 'National certification in technology venture validation, prototyping, and pitch defense.'
    },
    {
      id: 'buildhub-ca',
      title: 'Campus Ambassador 2026',
      issuer: 'BuildHub',
      year: '2026',
      category: 'Leadership',
      credentialNote: 'Selected campus leader driving developer hackathon awareness and student participation.'
    },
    {
      id: 'tata-genai',
      title: 'GenAI Powered Data Analytics Virtual Internship',
      issuer: 'Tata',
      year: '2025',
      category: 'AI & Data',
      credentialNote: 'Enterprise-grade generative AI analytics, pattern recognition, and predictive workflows.'
    },
    {
      id: 'gemini-certified',
      title: 'Gemini Certified University Student',
      issuer: 'Google',
      year: '2026',
      category: 'AI & Data',
      credentialNote: 'Certified competency in prompt architecture, Gemini multimodality, and AI tool integration.'
    },
    {
      id: 'walmart-swe',
      title: 'Advanced Software Engineering Job Simulation',
      issuer: 'Walmart USA',
      year: '2025',
      category: 'Software Engineering',
      credentialNote: 'System design, data structures, enterprise scalability, and algorithmic optimization.'
    },
    {
      id: 'ide-entrepreneurship',
      title: 'Entrepreneurship & Innovation Certification',
      issuer: 'IDE Bootcamp, Solapur',
      year: '2026',
      category: 'Leadership',
      credentialNote: 'Hands-on validation of product-market fit, unit economics, and team governance.'
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
