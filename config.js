/**
 * ============================================================
 *  PORTFOLIO CONFIGURATION - edit this file to make it yours
 * ============================================================
 *
 *  This is the single source of truth for all portfolio data.
 *  Replace every value below with your own information, swap
 *  the profileImage URL for your photo and resume.pdf for your CV,
 *  then open index.html (no build step required).
 */
window.portfolioConfig = {
  personal: {
    name: 'Agung Anugrah Illahi',
    title: 'FullStack Developer',
    subtitle: 'Python | JavaScript | Node.js | PHP',
    tagline: 'Technical Lead, Senior Software Engineer, Technical Trainer and Content Creator',
    // Placeholder avatar - swap for your own (e.g. './profile_picture.png').
    profileImage: 'me.jpg',
  },

  contact: {
    email: 'agunganugrahIllahi123@gmail.com',
    address: 'Padang, Indonesia',
    linkedin: 'www.linkedin.com/in/agung-anugrah-illahi',
    github: 'https://github.com/agung-anugrah',
  },

  summary:
    'Informatics student with a focus on full-stack web development, backend development, and data-driven applications. Experienced in building web applications using React, Node.js, Express.js, PHP, and MySQL, with additional experience working with MongoDB. Skilled in using Python for data processing, analysis, and machine learning projects. Experienced in developing interactive dashboards, decision support systems, and practical software solutions. Familiar with Git and GitHub for version control and collaborative software development.',

  skills: [
    {
      name: 'Programming',
      skills: [
        'Python',
        'JavaScript',
        'PHP'
      ]
    },

    {
      name: 'Frontend',
      skills: [
        'React',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap'
      ]
    },

    {
      name: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'Django',
        'REST API'
      ]
    },

    {
      name: 'Database',
      skills: [
        'MySQL',
        'MongoDB'
      ]
    },

    {
      name: 'Data & Machine Learning',
      skills: [
        'Data Processing',
        'Data Scraping',
        'Machine Learning'
      ]
    },

    {
      name: 'Tools & Version Control',
      skills: [
        'Git',
        'GitHub',
        'Microsoft Excel',
        'Microsoft Word',
        'Microsoft PowerPoint',
        'Microsoft Access'
      ]
    }
  ],

  experience: {
  jobs: [
    {
      company: 'General Elections Commission of Padang City',
      companyUrl: 'https://kota-padang.kpu.go.id/',
      position: 'Intern',
      startDate: 'Mar 2026',
      endDate: 'Apr 2026',
      description:
        'Supported administrative and system development activities during an internship at the General Elections Commission of Padang City. Managed administrative records, developed a web-based guest service application, contributed to website interface improvements, and assisted with guest reception and registration.',
      skills: [
        'Web Development',
        'Data Management',
        'Administrative Support',
        'UI Improvement',
        'Guest Service'
      ],
      jobType: 'Internship',
      location: 'Padang, Indonesia'
    }
  ],
  training: []
},

  education: [
    {
      degree: 'Bachelor of Informatics',
      institution: 'Universitas Putra Indonesia "YPTK" Padang',
      startDate: '2023',
      endDate: 'Present',
      grade: '3.82/4.00',
      courses: [
        'Web Development',
        'Database Systems',
        'Data Processing',
        'Machine Learning',
        'Object-Oriented Programming'
      ]
    },
  ],

  projects: [
  {
    name: 'Guest Service System',
    company: 'KPU Kota Padang',
    year: '2026',
    url: 'https://bukutamukpu.site/',
    description:
      'A web-based guest service system developed to support guest registration and visitor data management at KPU Kota Padang. The system helps digitize the guest registration process and organize visitor information efficiently.',
    skills: [
      'PHP Native',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap'
    ]
  },
   {
    name: 'Cryptography App',
    company: 'Personal Project',
    year: '2026',
    url: 'https://github.com/agung-anugrah/CryptoGraphyApp',
    description:
      'A desktop cryptography application built with Python and CustomTkinter, implementing AES symmetric encryption and RSA asymmetric encryption for encrypting and decrypting data.',
    skills: [
      'Python',
      'CustomTkinter',
      'Cryptography',
      'AES',
      'RSA'
    ]
  },
  {
    name: 'HalalTravel',
    company: 'Personal Project',
    year: '2025',
    url: 'https://github.com/agung-anugrah/HalalTravel',
    description:
      'A web-based travel project developed using PHP, JavaScript, CSS, and MySQL without external frameworks or libraries.',
    skills: [
      'PHP Native',
      'MySQL',
      'JavaScript',
      'CSS'
    ]
  },
  {
  name: 'DSS - Selecting Renovation Eligible Houses',
  company: 'Personal Project',
  year: '2025',
  url: 'https://github.com/agung-anugrah/DSS-Selecting_Renovation_Eligible_Houses',
  description:
    'A web-based decision support system designed to assist in selecting eligible recipients for house renovation assistance. The system uses the MOORA method to evaluate alternatives objectively based on weighted criteria and generate rankings.',
  skills: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'Bootstrap',
    'MOORA'
  ]
},

],

  certifications: [
    { name: 'UPG Sustainability Leader', issuer: 'United People Global', date: 'Jul 2022', description: 'Certification in sustainability leadership.' },
    { name: 'Global Peace Ambassador', issuer: 'Global Peace Chain', date: 'Jun 2022', description: 'Recognized as a Global Peace Ambassador.' },
    { name: 'SQL Intermediate', issuer: 'HackerRank', date: 'Feb 2022', description: 'Demonstrated intermediate SQL skills.' },
    { name: 'SQL Basic', issuer: 'HackerRank', date: 'Dec 2021', description: 'Demonstrated basic SQL skills.' },
  ],

  contentCreation: {
    description: 'Passionate about sharing knowledge through writing and creating technical content that helps developers grow.',
    platforms: [
      { name: 'Personal Blog', icon: 'blog', url: 'https://mwaseemzakir.com/', description: 'Technical articles on .NET, Angular, and software architecture', gradient: 'linear-gradient(135deg, #1f6feb 0%, #0891b2 100%)' },
      { name: 'Medium', icon: 'medium', url: 'https://medium.com/@mwaseemzakir', description: 'In-depth tutorials and thought leadership pieces', gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)' },
      { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com/@mwaseemzakir', description: 'Video tutorials and coding demonstrations', gradient: 'linear-gradient(135deg, #dc2626 0%, #be123c 100%)' },
    ],
    topics: ['.NET Development', 'Clean Architecture', 'Best Practices', 'Career Tips', 'System Design'],
  },
};
