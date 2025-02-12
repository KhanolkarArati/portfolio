// import React from "react";
// import "./WorkExperience.scss";
// import {workExperiences} from "../../portfolio";

// export default function WorkExperience() {
//   if (!workExperiences.display) return null;

//   return (
//     <section className="work-experience-section" id="experience">
//       <h1 className="work-experience-heading">Experience</h1>
//       <div className="work-experience-container">
//         {workExperiences.experience.map((experience, index) => (
//           <div className="work-experience-item" key={index}>
//             <div className="work-experience-date">{experience.date}</div>
//             <div className="work-experience-content">
//               <div className="company-info">
//                 <img
//                   src={experience.companylogo}
//                   alt={`${experience.company} Logo`}
//                   className="company-logo"
//                 />
//                 <div className="company-details">
//                   <h4>{experience.company}</h4>
//                   <h5>{experience.role}</h5>
//                 </div>
//               </div>
//               <p>{experience.desc}</p>
//               {experience.descBullets && (
//                 <ul>
//                   {experience.descBullets.map((bullet, i) => (
//                     <li key={i}>{bullet}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import "./WorkExperience.scss";
// import { workExperiences } from "../../portfolio";

// // Helper function to calculate time difference
// const calculateDuration = (startDate, endDate) => {
//   const start = new Date(startDate);
//   const end = endDate === "Present" ? new Date() : new Date(endDate);

//   let years = end.getFullYear() - start.getFullYear();
//   let months = end.getMonth() - start.getMonth();

//   if (months < 0) {
//     years--;
//     months += 12;
//   }

//   return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
// };

// export default function WorkExperience() {
//   if (!workExperiences.display) return null;

//   return (
//     <section className="work-experience-section" id="experience">
//       <h1 className="work-experience-heading">Experience</h1>
//       <div className="work-experience-container">
//         {workExperiences.experience.map((experience, index) => (
//           <div className="work-experience-item" key={index}>
//             <div className="work-experience-date">
//               {experience.date}
//               <div className="work-experience-duration">
//                 {calculateDuration(experience.date.split(" – ")[0], experience.date.split(" – ")[1])}
//               </div>
//             </div>
//             <div className="work-experience-content">
//               <div className="company-info">
//                 <img
//                   src={experience.companylogo}
//                   alt={`${experience.company} Logo`}
//                   className="company-logo"
//                 />
//                 <div className="company-details">
//                   <h4>{experience.company}</h4>
//                   <h5>{experience.role}</h5>
//                 </div>
//               </div>
//               <p>{experience.desc}</p>
//               {experience.descBullets && (
//                 <ul>
//                   {experience.descBullets.map((bullet, i) => (
//                     <li key={i}>{bullet}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import "./WorkExperience.scss";
import { workExperiences } from "../../portfolio";

// Helper function to calculate the time difference dynamically
const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Dynamic display based on the difference
  const yearsStr = years > 0 ? `${years} year${years !== 1 ? "s" : ""}` : '';
  const monthsStr = months > 0 ? `${months} month${months !== 1 ? "s" : ""}` : '';

  return yearsStr && monthsStr ? `${yearsStr} ${monthsStr}` : (yearsStr || monthsStr) || "No time passed";
};

export default function WorkExperience() {
  if (!workExperiences.display) return null;

  return (
    <section className="work-experience-section" id="experience">
      <h1 className="work-experience-heading">Professional Experience</h1>
      <div className="work-experience-container">
        {workExperiences.experience.map((experience, index) => (
          <div className="work-experience-item" key={index}>
            <div className="work-experience-date">
              {experience.date}
              <div className="work-experience-duration">
                {calculateDuration(
                  experience.date.split(" – ")[0],
                  experience.date.split(" – ")[1]
                )}
              </div>
            </div>
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
