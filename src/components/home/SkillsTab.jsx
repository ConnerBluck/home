import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li className="lead mb-1 mt-2">
          {skill.name}
        </li>
        // <SkillsBar
        //   key={`${skill}-${index}`}
        //   skill={skill.name}
        //   value={skill.value}
        //   isScrolled={isScrolled}
        // />
      ))}
    </ul>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(0, Math.floor(skills.length / 2))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
