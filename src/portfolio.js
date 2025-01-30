/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arati Khanolkar",
  title: "Arati Khanolkar",
  subTitle: "Software Engineer with 4+ years of experience leading impactful projects for global clients, driving innovation and delivering scalable solutions to optimize business operations",
  resumeLink:
    "https://drive.google.com/file/d/1kMfb94g26REhC0VnTBWmS0_jY6w8td9H/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
  interests: [
    "Full-Stack Software Development",
    "API Design & Integration",
    "Data Engineering & Analytics",
    "System Architecture & Design",
    "Continous Integration & Continous Deployment",
    "Software Project Management"
  ]
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arati501/",
  linkedin: "https://www.linkedin.com/in/arati-khanolkar/",
  gmail: "aratik@umich.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
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
      website:"https://coek.dypgroup.edu.in/",
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
        { name: "Microservices", proficiency: 80 },
        { name: "PHP", proficiency: 70 },
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
        { name: "NodeJs", proficiency: 70 },
        { name: "HTML", proficiency: 95 },
        { name: "CSS", proficiency: 90 },
        { name: "BootStrap", proficiency: 90 },
      ],
    },
    {
      title: "Datastores",
      icon: "fas fa-database",
      skills: [
        { name: "MySQL", proficiency: 85 },
        { name: "MongoDB", proficiency: 80 },
        { name: "AWS S3", proficiency: 90 },
        { name: "PostgreSQL", proficiency: 80 },
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
      role: "Graduate Teaching Assistant",
      company: "University of Michigan - Dearborn",
      companylogo: require("./assets/images/UMDLogo.png"),
      date: "January 2024 – Present",
      desc: "Responsibilities and Courses Instructed:",
      descBullets: [
          "Grading exams, assignments, and projects"    , 
          "Teaching labs for Software Engineering Tools class" ,
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
        "Automated data pre-processing using Java web services (SOAP, REST) and React, resulting in 40% faster test data creation.",
        "Developed an end-to-end payment trigger automation system, reducing payment processing time by 30%."
      ]
    },
    {
      role: "System Engineer",
      company: "Tata Consultancy Services, Mumbai, India",
      companylogo: require("./assets/images/TCSLogo.png"),
      date: "November 2019 – January 2022",
      desc: "Designed and implemented scalable applications and improved system performance.",
      descBullets: [
        "Managed a team to create a Video Conferencing Web Application (N:N) with features like Notes, Recording, and Screenshare.",
        "Developed RESTful APIs enabling real-time data transfer using Java, JavaScript, and TypeScript."
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
        { name: "GitHub", url: "https://github.com/arati501/" },
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
        { name: "GitHub", url: "https://github.com/arati501/" }
      ]
    },
    {
      image: require("./assets/images/review.png"),
      projectName: "E-commerce Review Sentiment Analysis",
      projectDesc: "Created a sentiment analysis tool using Python and Scikit-learn to analyze customer reviews, providing actionable insights for product improvement.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/arati501/" },
        { name: "Presentation (PPTX)", url: "https://drive.google.com/uc?id=1zljPjJHNNnGafuQYALQf-4sULXEoyXcZ&export=download" }
      ]
    },
    {
      image: require("./assets/images/PantryPal.png"),
      projectName: "College Pantry Management System",
      projectDesc: "Developed a grocery ordering system with Java, Angular, and AWS S3, achieving 99.9% uptime and reducing server costs by 25%.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/arati501/" },
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact me",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "248 679-6562",
  email_address: "aratik@umich.edu"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
