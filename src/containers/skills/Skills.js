import React from "react";
import "./Skills.scss";
import { skillsSection } from "../../portfolio";

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
