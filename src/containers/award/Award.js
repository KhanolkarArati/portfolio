// import React from "react";
// import { awards } from "../../portfolio"; // Assuming your awards data is imported from here
// import "./Awards.scss";

// export default function Awards() {
//   // Function to open a new window with the clicked image
//   const openPopup = (image) => {
//     const popupWindow = window.open(
//       "",
//       "_blank",
//       "width=800,height=600,scrollbars=yes,resizable=yes"
//     );
//     popupWindow.document.write(`
//       <html>
//         <head><title>Award Certificate</title></head>
//         <body style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #000;">
//           <img src="${image}" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
//         </body>
//       </html>
//     `);
//     popupWindow.document.close();
//   };

//   // Check if the awards section should be displayed
//   if (!awards.display) {
//     return null; // If awards display is false, render nothing
//   }

//   return (
//     <section className="awardCertificate-section" id="awards">
//       <h1 className="section-title">Awards and Achievements</h1>
//       <div className="awardCertificate-container">
//         {awards.awardCard.map((award, index) => (
//           <div key={index} className="awardCertificate-card">
//             {/* Row 1: Image + Details */}
//             <div className="card-row row-1">
//               <div className="card-image">
//                 <img
//                   src={award.certificateImage}
//                   alt={award.title}
//                   onClick={() => openPopup(award.certificateImage)}
//                   className="certificate-image"
//                 />
//               </div>
//               <div className="card-details">
//                 <h2 className="awardCertificate-title">{award.title}</h2>
//                 <p className="awardCertificate-issuer">{award.issuer}</p>
//                 <p className="awardCertificate-date">{award.date}</p>
//               </div>
//             </div>

//             {/* Row 2: Description */}
//             <div className="card-row row-2">
//               <p className="awardCertificate-description">{award.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import { awards } from "../../portfolio"; // Assuming your awards data is imported from here
import "./Awards.scss";

export default function Awards() {
  const openPopup = (image) => {
    const popupWindow = window.open(
      "",
      "_blank",
      "width=800,height=600,scrollbars=yes,resizable=yes"
    );
    popupWindow.document.write(`
      <html>
        <head><title>Award Certificate</title></head>
        <body style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #000;">
          <img src="${image}" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
        </body>
      </html>
    `);
    popupWindow.document.close();
  };

  if (!awards.display) {
    return null; // If awards display is false, render nothing
  }

  return (
    <section className="awardCertificate-section" id="awards">
      <div className="container">
        <div className="awardCertificate-grid">
          {/* Column 1: Title */}
          <div className="awardCertificate-title-container">
            <h1 className="section-title">Awards</h1>
          </div>

          {/* Column 2: Award Cards */}
          <div className="awardCertificate-container">
            {awards.awardCard.map((award, index) => (
              <div key={index} className="awardCertificate-card">
                <div className="card-row row-1">
                  <div className="card-image">
                    <img
                      src={award.certificateImage}
                      alt={award.title}
                      onClick={() => openPopup(award.certificateImage)}
                      className="certificate-image"
                    />
                  </div>
                  <div className="card-details">
                    <h2 className="awardCertificate-title">{award.title}</h2>
                    <p className="awardCertificate-issuer">{award.issuer}</p>
                    <p className="awardCertificate-date">{award.date}</p>
                  </div>
                </div>
                <div className="card-row row-2">
                  <p className="awardCertificate-description">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
