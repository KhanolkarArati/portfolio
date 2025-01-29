// import React, {useContext} from "react";
// import "./Skills.scss";
// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
// import {illustration, skillsSection} from "../../portfolio";
// import {Fade} from "react-reveal";
// import code1 from "../../assets/lottie/code1";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import StyleContext from "../../contexts/StyleContext";

// export default function Skills() {
//   const {isDark} = useContext(StyleContext);
//   if (!skillsSection.display) {
//     return null;
//   }
//   return (
//     <div className={isDark ? "dark-mode main" : "main"} id="skills">
//       <div className="skills-main-div">
//         <Fade left duration={1000}>
//           <div className="skills-image-div">
//             {illustration.animated ? (
//               <DisplayLottie animationData={code1}/>
//             ) : (
//               <img
//                 alt="Man Working"
//                 src={require("../../assets/images/developerActivity.svg")}
//               ></img>
//             )}
//           </div>
//         </Fade>
//         <Fade right duration={1000}>
//           <div className="skills-text-div">
//             <h1
//               className={isDark ? "dark-mode skills-heading" : "skills-heading"}
//             >
//               {skillsSection.title}{" "}
//             </h1>
//             <p
//               className={
//                 isDark
//                   ? "dark-mode subTitle skills-text-subtitle"
//                   : "subTitle skills-text-subtitle"
//               }
//             >
//               {skillsSection.subTitle}
//             </p>
//             {/* <SoftwareSkill /> */}
//             <div>
//               {skillsSection.skills.map((skills, i) => {
//                 return (
//                   <p
//                     key={i}
//                     className={
//                       isDark
//                         ? "dark-mode subTitle skills-text"
//                         : "subTitle skills-text"
//                     }
//                   >
//                     {skills}
//                   </p>
//                 );
//               })}
//             </div>
//           </div>
//         </Fade>
//       </div>
//     </div>
//   );
// }

// import React, { useContext } from "react";
// import "./Skills.scss";
// import { Fade } from "react-reveal";
// import { skillsSection } from "../../portfolio";
// import StyleContext from "../../contexts/StyleContext";

// export default function Skills() {
//   const { isDark } = useContext(StyleContext);

//   if (!skillsSection.display) return null;

//   return (
//     <div className={isDark ? "dark-mode skills-section" : "skills-section"} id="skills">
//       <h1 className="skills-heading">{skillsSection.title}</h1>
//       <div className="skills-card-container">
//         {skillsSection.skillGroups.map((group, index) => (
//           <Fade key={index} duration={1000}>
//             <div className="skills-card">
//               <div className="skills-card-header">
//                 <i className={group.icon}></i>
//                 <h3>{group.title}</h3>
//               </div>
//               <ul className="skill-list">
//                 {group.skills.map((skill, idx) => (
//                   <li key={idx}>{skill}</li>
//                 ))}
//               </ul>
//             </div>
//           </Fade>
//         ))}
//       </div>
//     </div>
//   );
// }

//option 3 
// import React, { useState } from "react";
// import "./Skills.scss";
// import Lottie from "react-lottie";  // Import Lottie
// import { skillsSection } from "../../portfolio"; // Assuming the skills data is coming from this file
// import { Fade } from "react-reveal";

// // Import Lottie animations (You can use your own or pick from LottieFiles)
// import codingAnimation from "../../assets/lottie/code1.json"; // Example animation
// import cloudAnimation from "../../assets/lottie/cloud.json"; // Example animation

// const Skills = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Filter skills based on selected category
//   const filteredSkills = selectedCategory === "All"
//     ? skillsSection.skillGroups
//     : skillsSection.skillGroups.filter(group => group.title === selectedCategory);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="skills-section" id="skills">
//       <h1 className="skills-heading">{skillsSection.title}</h1>

//       {/* Filter Buttons */}
//       <div className="filter-buttons">
//         {["All", ...skillsSection.skillGroups.map(group => group.title)].map((category, index) => (
//           <button
//             key={index}
//             className={`filter-button ${selectedCategory === category ? "active" : ""}`}
//             onClick={() => handleCategoryChange(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Skills Cards */}
//       <div className="skills-card-container">
//         {filteredSkills.map((group, index) => (
//           <Fade key={index} duration={1000}>
//             <div className="skills-card">
//               {/* Lottie Animation */}
//               <div className="lottie-container">
//                 <Lottie
//                   options={{
//                     animationData: group.title === "Frontend" ? codingAnimation : cloudAnimation,
//                     loop: true,
//                     autoplay: true,
//                     rendererSettings: {
//                       preserveAspectRatio: "xMidYMid slice",
//                     },
//                   }}
//                   height={100}
//                   width={100}
//                 />
//               </div>

//               <div className="skills-card-header">
//                 <h3>{group.title}</h3>
//               </div>

//               <ul className="skill-list">
//                 {group.skills.map((skill, idx) => (
//                   <li key={idx}>{skill}</li>
//                 ))}
//               </ul>
//             </div>
//           </Fade>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;


//option4
// import React, { useState } from "react";
// import "./Skills.scss";
// import Lottie from "react-lottie"; // Import Lottie
// import { skillsSection } from "../../portfolio"; // Assuming the skills data is coming from this file
// import { Fade } from "react-reveal";

// // Import Lottie animations (You can use your own or pick from LottieFiles)
// import codingAnimation from "../../assets/lottie/code1.json"; // Example animation
// import cloudAnimation from "../../assets/lottie/cloud.json"; // Example animation

// const Skills = () => {
//   const [selectedSkill, setSelectedSkill] = useState(null);

//   const handleSkillToggle = (skillName) => {
//     if (selectedSkill === skillName) {
//       setSelectedSkill(null); // Deselect if already selected
//     } else {
//       setSelectedSkill(skillName);
//     }
//   };

//   return (
//     <div className="skills-section" id="skills">
//       <h1 className="skills-heading">{skillsSection.title}</h1>

//       <div className="skills-card-container">
//         {skillsSection.skillGroups.map((group, index) => (
//           <div key={index} className="skills-card">
//             <div className="skills-card-header">
//               <i className={group.icon}></i>
//               <h3>{group.title}</h3>
//             </div>

//             <div className="skills-list">
//               {group.skills.map((skill, idx) => (
//                 <div
//                   key={idx}
//                   className={`skill-item ${selectedSkill === skill.name ? "expanded" : ""}`}
//                   onClick={() => handleSkillToggle(skill.name)}
//                 >
//                   <div className="skill-name">
//                     <span>{skill.name}</span>
//                   </div>
//                   {selectedSkill === skill.name && (
//                     <div className="progress-bar-container">
//                       <div className="progress-bar" style={{ width: `${skill.proficiency}%` }}>
//                         {skill.proficiency}%
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

//option5
// import React from "react";
// import "./Skills.scss";
// import Lottie from "react-lottie"; // Import Lottie
// import { skillsSection } from "../../portfolio"; // Assuming the skills data is coming from this file
// import { Fade } from "react-reveal";

// // Import Lottie animations (You can use your own or pick from LottieFiles)
// import codingAnimation from "../../assets/lottie/code1.json"; // Example animation
// import cloudAnimation from "../../assets/lottie/cloud.json"; // Example animation

// const Skills = () => {
//   return (
//     <div className="skills-section" id="skills">
//       <h1 className="skills-heading">{skillsSection.title}</h1>

//       <div className="skills-card-container">
//         {skillsSection.skillGroups.map((group, index) => (
//           <div key={index} className="skills-card">
//             <div className="skill-animation">
//               <Lottie
//                 options={{
//                   loop: true,
//                   autoplay: true,
//                   animationData: group.title === "Cloud" ? cloudAnimation : codingAnimation, // Example conditional animation based on group
//                   rendererSettings: {
//                     preserveAspectRatio: "xMidYMid slice",
//                   },
//                 }}
//                 height={120} // Adjust size for better fit
//                 width={120} // Adjust size for better fit
//               />
//             </div>

//             <div className="skills-card-header">
//               <i className={group.icon}></i>
//               <h3>{group.title}</h3>
//             </div>

//             <div className="skills-list">
//               {group.skills.map((skill, idx) => (
//                 <div key={idx} className="skill-item">
//                   <div className="skill-name">
//                     <span>{skill.name}</span>
//                   </div>
//                   <div className="progress-bar-container">
//                     <div className="progress-bar" style={{ width: `${skill.proficiency}%` }}>
//                       {skill.proficiency}%
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;
import React from "react";
import "./Skills.scss";
import Lottie from "react-lottie"; // Import Lottie
import { skillsSection } from "../../portfolio"; // Assuming the skills data is coming from this file

// Import Lottie animations (You can use your own or pick from LottieFiles)
import codingAnimation from "../../assets/lottie/code1.json"; // Example animation
import cloudAnimation from "../../assets/lottie/cloud.json"; // Example animation

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h1 className="skills-heading">{skillsSection.title}</h1>

      <div className="skills-card-container">
        {skillsSection.skillGroups.map((group, index) => (
          <div
            key={index}
            className={`skills-card ${
              group.title === "System Design" ? "system-design-card" : ""
            }`}
          >
            {/* <div className="skill-animation">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData:
                    group.title === "Cloud" ? cloudAnimation : codingAnimation, // Example conditional animation based on group
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={120} // Adjust size for better fit
                width={120} // Adjust size for better fit
              />
            </div> */}

            <div className="skills-card-header">
              <i className={group.icon}></i>
              <h3>{group.title}</h3>
            </div>

            <div className="skills-list">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-name">
                    <span>{skill.name}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.proficiency}%` }}
                    >
                      {skill.proficiency}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
