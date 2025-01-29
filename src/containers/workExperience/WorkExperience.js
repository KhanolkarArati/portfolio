// import React, {useContext} from "react";
// import "./WorkExperience.scss";
// import ExperienceCard from "../../components/experienceCard/ExperienceCard";
// import {workExperiences} from "../../portfolio";
// import {Fade} from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";

// export default function WorkExperience() {
//   const {isDark} = useContext(StyleContext);
//   if (workExperiences.display) {
//     return (
//       <div id="experience">
//         <Fade bottom duration={1000} distance="20px">
//           <div className="experience-container" id="workExperience">
//             <div>
//               <h1 className="experience-heading">Experience</h1>
//               <div className="experience-cards-div">
//                 {workExperiences.experience.map((card, i) => {
//                   return (
//                     <ExperienceCard
//                       key={i}
//                       isDark={isDark}
//                       cardInfo={{
//                         company: card.company,
//                         desc: card.desc,
//                         date: card.date,
//                         companylogo: card.companylogo,
//                         role: card.role,
//                         descBullets: card.descBullets
//                       }}
//                     />
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </Fade>
//       </div>
//     );
//   }
//   return null;
// }


import React from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";

export default function WorkExperience() {
  if (!workExperiences.display) return null;

  return (
    <section className="work-experience-section" id="experience">
      <h1 className="work-experience-heading">Experience</h1>
      <div className="work-experience-container">
        {workExperiences.experience.map((experience, index) => (
          <div className="work-experience-item" key={index}>
            <div className="work-experience-date">{experience.date}</div>
            <div className="work-experience-content">
              <div className="company-info">
                <img
                  src={experience.companylogo}
                  alt={`${experience.company} Logo`}
                  className="company-logo"
                />
                <div className="company-details">
                  <h4>{experience.company}</h4>
                  <h5>{experience.role}</h5>
                </div>
              </div>
              <p>{experience.desc}</p>
              {experience.descBullets && (
                <ul>
                  {experience.descBullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
