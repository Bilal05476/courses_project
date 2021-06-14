import React from "react";

const Skills = ({ skills }) => {
  return (
    <div>
      {skills.map((skill) => {
        return (
          <>
            <strong key={skill}>{skill}</strong>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default Skills;
