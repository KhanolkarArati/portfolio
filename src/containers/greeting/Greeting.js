import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Greeting.scss";
import AratiImage from "../../assets/images/Arati.jpg";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-container">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <img
                src={AratiImage}
                alt="Arati Khanolkar"
                className="profile-image"
              />
            </div>
          </div>

          {/* Greeting Text Section */}
          <div className="content">
            <Fade left duration={1500}>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {greeting.title}
              </h1>
            </Fade>
            <Fade bottom duration={2000}>
              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
                {greeting.subTitle}
              </p>
            </Fade>

            {/* Social Media Icons */}
            <div className="social-icons">
              <SocialMedia 
                githubLink="https://github.com/khanolkararati" 
                linkedinLink="https://www.linkedin.com/in/aratikhanolkar" 
                gmailLink="mailto:aratik@umich.edu"
              />
            </div>

            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <a href={greeting.resumeLink} download="Resume.pdf" className="download-link-button">
                  <Button text="Download my resume" />
                </a>
              )}
            </div>
          </div>

          {/* Interests Section */}
          <div className="interests">
            <h2>Interests</h2>
            <ul>
              {greeting.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  );
}
