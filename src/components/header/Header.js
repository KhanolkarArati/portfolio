import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  educationInfo,
  skillsSection,
  bigProjects,
  achievementSection,
  awards,
  resumeSection
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewducation = educationInfo.display;
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display;
  const viewAwards = awards.display;
  const viewProjects = bigProjects.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <div className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experience</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewAwards && (
            <li>
              <a href="#awards">Awards</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {/* {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}  */}
          {<li>
            <a href="#contact">Contact Me</a>
          </li>}
          {/* <li> */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          {/* <a> */}
          {/* <ToggleSwitch /> */}
          {/* </a> */}
          {/* </li> */}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
