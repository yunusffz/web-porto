export const portfolioData = {
  profile: {
    name: 'Yunus Ahmad Baktir',
    title: 'Frontend Engineer',
    bio: 'Dedicated Frontend Engineer with over 8 years of experience specializing in building high-performance, scalable web applications using Angular, Next.js, and Vue.js. Proven track record in leading technical discussions and translating complex government and banking business requirements into seamless user interfaces. Expert in optimizing performance and modernizing UI/UX with TailwindCSS, ShadCN, and Headless UI. Passionate about excellence in code quality, implementing robust CI/CD pipelines with Docker, and driving impactful digital transformation through data-driven visualizations.',
    yearsOfExperience: '8+',
  },
  contact: {
    email: 'yunus.baktir@gmail.com',
    phone: '+62 895-6303-6922-6',
    linkedin: 'linkedin.com/in/yunusahmadbaktir',
    github: 'https://github.com/yunusffz',
  },
  skills: {
    frontend: ['TypeScript', 'JavaScript', 'Next.js', 'Angular', 'Vue.js', 'HTML5', 'CSS3'],
    uiStyling: ['TailwindCSS', 'ShadCN', 'Headless UI', 'Bootstrap'],
    backend: ['Python (FastAPI, Flask)', 'PHP (Laravel, CodeIgniter)', 'MySQL', 'PostgreSQL'],
    tools: [
      'Docker',
      'Git',
      'CI/CD (GitLab, Github)',
      'Nginx',
      'Leaflet',
      'ArcGIS JS',
      'Geoserver',
    ],
  },
  employment: [
    {
      title: 'Senior Frontend Engineer',
      company: 'Jabar Digital Service',
      period: 'Oct 2019 – Dec 2025',
      responsibilities: [
        'System Design Leadership: Participated in high-level technical discussions regarding system architecture for Ekosistem Data Jabar to ensure frontend scalability and data efficiency.',
        'Frontend Development: Developed and maintained sophisticated user interfaces using Angular, focusing on creating modular and responsive components.',
        'API Integration: Engineered robust backend services and APIs using Python to support seamless data flow between the server and the frontend.',
        'Modern DevOps Practices: Orchestrated containerized environments using Docker and streamlined deployment by implementing CI/CD pipelines through GitLab.',
      ],
    },
    {
      title: 'Technical Project Manager',
      company: 'Solmit Bangun Indonesia',
      period: 'Jan 2019 – Sep 2019',
      responsibilities: [
        'Requirement Engineering: Translated complex client business requirements into detailed technical specifications for the development team.',
        'Project Governance: Managed project lifecycles, timelines, and task priorities using structured data in Excel to ensure on-time delivery.',
        'Operational Deployment: Led the installation, deployment, and configuration of applications while providing comprehensive training and guidance to end-users.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Solmit Bangun Indonesia',
      period: 'Feb 2017 – Dec 2018',
      responsibilities: [
        'Banking Solution Specialist: Developed internal banking applications with a specific focus on Risk Management and Risk-Based Audit systems.',
        'Data Integrity & Maintenance: Designed, built, and maintained web applications to support critical banking operations, ensuring high-precision data reliability.',
        'System Optimization: Leveraged various technology stacks to optimize system efficiency and scalability for financial industry standards.',
      ],
    },
  ],
  projects: [
    {
      name: 'Ekosistem Data Jabar',
      description:
        'Built frontend interfaces using Angular/Next.js and developed FastAPI backends with Docker orchestration.',
      technologies: ['Angular', 'Next.js', 'FastAPI', 'Docker'],
      achievement: undefined,
    },
    {
      name: 'Satu Peta Jabar (West Java One Map)',
      description:
        'Developed interactive geospatial visualizations using Angular and ArcGIS JS, including Nginx and CI/CD setup. Engineered a high-efficiency map rendering system by transitioning from raw data processing to WMS (Web Map Service) and Raster Image tiling, resulting in a 70% improvement in initial loading performance.',
      technologies: ['Angular', 'ArcGIS JS', 'Nginx', 'WMS', 'CI/CD'],
      achievement: '70% improvement in initial loading performance',
    },
    {
      name: 'Waze Data Visualization',
      description:
        'Processed traffic data to create real-time visualizations using Angular and Flask.',
      technologies: ['Angular', 'Flask', 'Data Visualization'],
      achievement: undefined,
    },
    {
      name: 'Pikobar Web',
      description:
        'Developed data marts and interactive health monitoring dashboards using Vue.js and Chart.js.',
      technologies: ['Vue.js', 'Chart.js', 'Data Marts'],
      achievement: undefined,
    },
    {
      name: 'Risk-Based Audit Systems',
      description:
        'Delivered tailored audit solutions for Regional Banks (Bank Papua, Bank Maluku, Bank Jateng), managing everything from DB design to UI development.',
      technologies: ['Full Stack', 'Database Design', 'Banking Systems'],
      achievement: undefined,
    },
  ],
  education: {
    degree: 'Bachelor of Engineering in Informatics',
    institution: 'STMIK Bandung',
    period: 'Sep 2013 – Jan 2017',
    gpa: '3.54 / 4.00',
    focus: 'Software Development, Data Structures, and System Architecture',
  },
} as const
