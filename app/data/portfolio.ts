export const portfolioData = {
  profile: {
    name: 'Yunus Ahmad Baktir',
    title: 'Technical Project Manager | IT Project Lead',
    bio: 'A results-driven Technical Project Manager with over 8 years of experience leading digital transformation initiatives in the government and banking sectors. Expert in Requirement Engineering, bridging the gap between non-technical stakeholders and development teams to deliver high-performance, scalable systems. Proven leader in Project Governance, managing full project lifecycles using modern collaboration tools like ClickUp, Trello, and Miro to ensure 100% on-time delivery. Strong technical background in frontend and backend development, with hands-on experience in Angular, Next.js, Vue.js, Python, Docker, and CI/CD pipelines.',
    yearsOfExperience: '8+',
  },
  contact: {
    email: 'yunus.baktir@gmail.com',
    phone: '+62 895-6303-6922-6',
    linkedin: 'linkedin.com/in/yunusahmadbaktir',
    github: 'https://github.com/yunusffz',
  },
  skills: {
    projectManagement: ['ClickUp', 'Trello', 'Miro', 'GitLab', 'GitHub'],
    managementFrameworks: [
      'Requirement Engineering',
      'Project Governance',
      'SDLC',
      'System Architecture',
    ],
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
      title: 'Senior Frontend Engineer / Technical Lead',
      company: 'Jabar Digital Service',
      period: 'Oct 2019 – Dec 2025',
      responsibilities: [
        'System Design Leadership: Orchestrated high-level technical discussions for Ekosistem Data Jabar to ensure frontend scalability and data efficiency.',
        'Operational Management: Streamlined deployment cycles by implementing automated CI/CD pipelines via GitLab and managing containerized environments with Docker.',
        'Project Delivery: Managed the development of sophisticated user interfaces and ensured modularity and responsiveness across government digital products.',
        'API Integration Oversight: Engineered robust backend services using Python to support seamless data flow between server and frontend.',
      ],
    },
    {
      title: 'Technical Project Manager',
      company: 'Solmit Bangun Indonesia',
      period: 'Jan 2019 – Sep 2019',
      responsibilities: [
        'Requirement Engineering: Translated complex client business requirements into detailed technical specifications for the engineering team.',
        'Project Governance: Managed project lifecycles, timelines, and task priorities using ClickUp and Trello to ensure consistent on-time delivery.',
        'Operational Deployment: Led the installation, configuration, and deployment of applications while providing comprehensive guidance to end-users.',
      ],
    },
    {
      title: 'Full Stack Developer / Banking Solution Specialist',
      company: 'Solmit Bangun Indonesia',
      period: 'Feb 2017 – Dec 2018',
      responsibilities: [
        'Solution Management: Developed internal banking applications with a focus on Risk Management and Risk-Based Audit systems.',
        'Data Reliability: Designed and maintained mission-critical web applications, ensuring high-precision data integrity for financial operations.',
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
