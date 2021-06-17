import React from "react";

const Skills = ({ skills }) => {
  return (
    <div>
      {skills.map((skill, ind) => {
        return (
          <>
            <strong key={ind}>{skill}</strong>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default Skills;
