import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Arati Khanolkar",
  title: "Arati Khanolkar",
  subTitle: "Software Engineer with 4+ years of experience leading impactful projects for global clients, driving innovation and delivering scalable solutions to optimize business operations",
  resumeLink:
    "https://drive.google.com/file/d/1295dwqOoebKSUigCJZ7tGK5x762w6ivk/view?usp=sharing",
  displayGreeting: true,
  interests: [
    "Full-Stack Software Development",
    "API Design and Integration",
    "Data Engineering and Analytics",
    "System Architecture and Design",
    "Software Project Management"
  ]
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KhanolkarArati/",
  linkedin: "https://www.linkedin.com/in/arati-khanolkar/",
  gmail: "aratik@umich.edu",
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Michigan - Dearborn",
      website: "https://umdearborn.edu/",
      logo: require("./assets/images/UMLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
    },
    {
      schoolName: "D. Y. Patil College of Engineering and Technology, Kolhapur",
      website: "https://coek.dypgroup.edu.in/",
      logo: require("./assets/images/DYPLogo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "June 2015 - May 2019",
    }
  ]
};

const skillsSection = {
  title: "Skills and Technologies",
  subTitle: "EXPERIENCED FULL STACK DEVELOPER WITH EXPERTISE IN SCALABLE SYSTEM DESIGN AND CLOUD SOLUTIONS",
  description: "Leveraging cutting-edge technologies to deliver robust and efficient solutions that drive business success.",
  skillGroups: [
    {
      title: "Languages",
      icon: "fas fa-code",
      skills: [
        { name: "Python", proficiency: 85 },
        { name: "JavaScript", proficiency: 90 },
        { name: "TypeScript", proficiency: 80 },
        { name: "C#", proficiency: 75 },
        { name: "C++", proficiency: 70 },
      ],
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      skills: [
        { name: "Java", proficiency: 85 },
        { name: "Spring Boot", proficiency: 80 },
        { name: "Microservices", proficiency: 85 },
        { name: "NodeJs", proficiency: 80 },
        { name: "MVC", proficiency: 75 },
        { name: "Splunk", proficiency: 60 },
      ],
    },
    {
      title: "Frontend",
      icon: "fab fa-react",
      skills: [
        { name: "React", proficiency: 85 },
        { name: "Angular", proficiency: 80 },
        { name: "EmberJs", proficiency: 85 },
        { name: "HTML", proficiency: 95 },
        { name: "CSS", proficiency: 90 },
        { name: "BootStrap", proficiency: 90 },
      ],
    },
    {
      title: "Datastores",
      icon: "fas fa-database",
      skills: [
        { name: "MySQL", proficiency: 90 },
        { name: "MongoDB", proficiency: 80 },
        { name: "AWS S3", proficiency: 80 },
        { name: "PostgreSQL", proficiency: 85 },
        { name: "Redis", proficiency: 70 },
        { name: "Kafka", proficiency: 75 },
      ],
    },
    {
      title: "CI/CD Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", proficiency: 95 },
        { name: "Docker", proficiency: 90 },
        { name: "Jenkins", proficiency: 80 },
        { name: "Bitbucket", proficiency: 85 },
        { name: "SonarQube", proficiency: 75 },
        { name: "Atlassian", proficiency: 80 },
      ],
    },
    {
      title: "System Design",
      icon: "fas fa-network-wired",
      skills: [
        { name: "RESTful APIs", proficiency: 90 },
        { name: "Scalable Architecture", proficiency: 90 },
        { name: "Distributed Systems", proficiency: 85 },
        { name: "High-level Design", proficiency: 85 },
        { name: "Low-level Design", proficiency: 80 },
      ],
    },
    {
      title: "Tools & Methods",
      icon: "fas fa-tasks",
      skills: [
        { name: "Agile", proficiency: 90 },
        { name: "SDLC", proficiency: 85 },
        { name: "MS Office", proficiency: 95 },
        { name: "JIRA", proficiency: 80 },
        { name: "Confluence", proficiency: 75 },
      ],
    },
  ],
  display: true,
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Product Developer",
      company: "Epicor Software Corporation",
      companylogo: require("./assets/images/epicor_logo.jpg"),
      date: "May 2025 – Present",
      desc: "Designed and developed full-stack MES solutions, integrating IoT and data systems to improve real-time production workflows.",
      descBullets: [
        "Developed core features for Epicor’s Manufacturing Execution System (MES) platform (on-premises and cloud), enabling digital work instructions and real-time production guidance for manufacturing customers",
        "Modernised enterprise web application using Ember.js and JavaScript, improving real-time production visibility and operator decision-making",
        "Engineered backend integrations using Node.js to connect IoT devices and shop-floor systems, enabling automated process control, data collection, and audit-ready error traceability",
        "Built scalable data management and reporting functionality using MongoDB, and improved software quality and deployment reliability through automated testing and CI/CD pipelines (Mocha, Chai, Puppeteer, Selenium, TeamCity, GitHub, JIRA)"
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      company: "University of Michigan - Dearborn",
      companylogo: require("./assets/images/UMDLogo.png"),
      date: "January 2024 – April 2025",
      desc: "Responsibilities and Courses Instructed:",
      descBullets: [
        "Grading exams, assignments, and projects",
        "Teaching labs for Software Engineering Tools class",
        "Undergraduate: CIS 285 Software Engineering Tools, and CIS 476 Software Architecture & Design Patterns",
        "Graduate: CIS 527 Computer Networks"
      ]
    },
    {
      role: "Application Development Analyst",
      company: "Accenture Solutions, Pune, India",
      companylogo: require("./assets/images/AccLogo.png"),
      date: "January 2022 – July 2023",
      desc: "Led critical projects to improve efficiency and automate processes for a telecom client.",
      descBullets: [
        "Led a team of 7 developers to automate data pre-processing for a US telecom client, leveraging Java (SOAP, REST) and React, reducing test data creation time by 40% and improving overall workflow efficiency",
        "Engineered and deployed end-to-end payment trigger automation system using Java, Spring Boot, Maven, and MySQL, reducing payment processing time by 30%, optimizing billing cycles and enhancing payment logic accuracy",
        "Architected a Kafka-driven real-time data processing pipeline, modernizing legacy schedulers and improving efficiency by 20%",
        "Collaborated cross-functionally with business units to define project scope, optimize software functionality, and ensure seamless project handovers using JIRA and Agile methodologies"
      ]
    },
    {
      role: "System Engineer",
      company: "Tata Consultancy Services, Mumbai, India",
      companylogo: require("./assets/images/TCSLogo.png"),
      date: "November 2019 – January 2022",
      desc: "Designed and implemented scalable applications and improved system performance.",
      descBullets: [
        "Led a team of 4 developers to design and launch a scalable Video Conferencing Web App using Java, Node.js, and Angular,supporting 100+ concurrent users and integrating key features like Notes, Recording, File Sharing, and Screenshare",
        "Built high-performance RESTful APIs for real-time data transfer using Java, JavaScript, and TypeScript, improving system scalability and reducing response latency",
        "Established and automated CI/CD pipelines from scratch with Jenkins, Git, and SonarQube, resulting in a 40% reduction in release cycles and ensuring faster, more reliable software releases",
        "Optimized SQL database performance using MySQL Workbench, reducing query response times by 20%, leading to faster data retrieval and improved system efficiency"
      ]
    },
    {
      role: "Web Development Intern",
      company: "Delphinus Technology Inc, India",
      companylogo: require("./assets/images/Delphinus.png"),
      date: "December 2017 – January 2018",
      desc: "Contributed to web development projects, focusing on creating responsive and user-friendly websites.",
      descBullets: [
        "Developed dynamic user interfaces using HTML5, CSS3, and JavaScript",
        "Improved website design and functionality with jQuery and Bootstrap",
        "Supported back-end development with PHP for enhanced website functionality",
        "Utilized Git for version control and efficient team collaboration"
      ]
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Innovative solutions and tools I've built",
  projects: [
    {
      image: require("./assets/images/CarLogo.png"),
      projectName: "Car Brand Detection using Neural Networks",
      projectDesc: "Built custom CNN and pre-trained VGG16 models to predict car brands with 93% accuracy, leveraging data preprocessing and augmentation techniques.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/KhanolkarArati/" },
        { name: "Presentation (PPTX)", url: "https://drive.google.com/uc?id=1xqoohZ1sC-SMGE0GDf8FTSt32FLd_y-X&export=download" }
      ]
    },
    {
      image: require("./assets/images/coldspy.png"),
      projectName: "Cold Start Optimization in Serverless Code",
      projectDesc: "Reduced cold start times by 42% using AWS Lambda optimization techniques. Built ColdSpy, a profiling tool that improved code efficiency by 20%.",
      footerLink: [
        { name: "Presentation (PPTX)", url: "https://drive.google.com/uc?id=189twYCrFQ1hB439OJmq6H2PK5zhNtyoZ&export=download" }
      ]
    },
    {
      image: require("./assets/images/chatbot1.png"),
      projectName: "AI-Powered Bakery Assistant",
      projectDesc: "Developed an AI chatbot using OpenAI GPT for personalized customer interactions, order management, and social media integration for a bakery.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/KhanolkarArati/" }
      ]
    },
    {
      image: require("./assets/images/review.png"),
      projectName: "E-commerce Review Sentiment Analysis",
      projectDesc: "Created a sentiment analysis tool using Python and Scikit-learn to analyze customer reviews, providing actionable insights for product improvement.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/KhanolkarArati/" },
        { name: "Presentation (PPTX)", url: "https://drive.google.com/uc?id=1zljPjJHNNnGafuQYALQf-4sULXEoyXcZ&export=download" }
      ]
    },
    {
      image: require("./assets/images/PantryPal.png"),
      projectName: "College Pantry Management System",
      projectDesc: "Developed a grocery ordering system with Java, Angular, and AWS S3, achieving 99.9% uptime and reducing server costs by 25%.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/KhanolkarArati/" },
        { name: "Presentation (PPTX)", url: "https://drive.google.com/uc?id=1awNzj0arHbjz8o0K4KKL0XBb94sKPalz&export=download" }
      ]
    },
    {
      image: require("./assets/images/SmartTrolley.png"),
      projectName: "Smart Billing System",
      projectDesc: "Engineered smart shopping carts with Raspberry Pi for automated scanning, reducing queue times by 75%. Built a web app with Java, PHP, HTML, CSS, and MySQL.",
      footerLink: [
        { name: "Publication URL", url: "https://www.ijariit.com/manuscripts/v5i2/V5I2-1763.pdf" }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certifications, awards, etc.

const achievementSection = {
  title: "Certification And Publication",

  achievementsCards: [
    {
      title: "Microsoft Azure Fundamentals",
      subtitle: "Earned the Microsoft Azure Fundamentals AZ-900 certification, demonstrating foundational knowledge of cloud concepts and Azure services.",
      image: require("./assets/images/azureLogo.png"),
      imageAlt: "Microsoft Azure Logo",
      footerLink: [
        {
          name: "Certification Details",
          url: "https://www.credly.com/badges/eacd1eb8-f2ce-40f7-8cce-53a3e72f94ae/linked_in_profile"
        }
      ]
    },
    {
      title: "Smart Billing System Publication",
      subtitle: "Published research on revolutionizing billing with Smart Shopping Cart for Seamless Transactions",
      image: require("./assets/images/PublicationCertificate.jpg"),
      imageAlt: "Smart Billing System Logo",
      footerLink: [
        {
          name: "Publication Details",
          url: "https://www.ijariit.com/research-paper/d2d-smart-billing-system/"
        }
      ]
    }
  ],
  display: true
};

const awards = {

  awardCard:
    [
      {
        title: "Client Value Creation",
        issuer: "Accenture",
        date: "July 2022",
        description: "Awarded for delivering exceptional value to clients by implementing innovative solutions that addressed key business challenges. This recognition highlights a commitment to excellence in project execution and client satisfaction.",
        certificateImage: require("./assets/images/AccentureAward.jpg"),
      },
      {
        title: "Respect for the Individual",
        issuer: "Accenture",
        date: "May 2022",
        description: "Recognized for consistently producing high-quality work on projects while fostering a collaborative and inclusive team environment. This award reflects dedication to individual growth and team success.",
        certificateImage: require("./assets/images/AccAward2.png"),
      },
      {
        title: "On the Spot Award",
        issuer: "Tata Consultancy Services",
        date: "August 2021",
        description: "Honored for significant technical contributions that directly impacted project success. Known for a proactive problem-solving approach, innovative solutions, and dedication to meeting project deadlines.",
        certificateImage: require("./assets/images/TCSAward.jpg"),
      },
    ],
  display: true
}



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: "Contact me",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "248 679-6562",
  email_address: "khanolkararati@gmail.com"
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  awards,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
