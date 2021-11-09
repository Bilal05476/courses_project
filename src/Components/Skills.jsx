import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useStateValue } from "../StateProvider";
import { db } from "../Firebase";

const Skills = ({ skills }) => {
  const [{ user }] = useStateValue();
  const [deleteSkills, setDeleteSkills] = useState([]);
  const getUserData = db.collection("users").doc(user.uid);

  useEffect(() => {
    return getUserData.onSnapshot((doc) => {
      setDeleteSkills(doc.data().skills);
    });
  }, [user, getUserData]);

  const onSkillsDelete = (id) => {
    deleteSkills.splice(id, 1);
    return getUserData
      .update({
        skills: deleteSkills,
      })
      .then(() => {
        setDeleteSkills("");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        alert(`Error! ${error}`);
      });
  };
  return (
    <div>
      {skills.map((skill, ind) => {
        return (
          <div key={ind}>
            <strong>{skill}</strong>
            <CloseIcon
              className="skillsDeleteBtn"
              style={{
                fontSize: "1rem",
                color: "crimson",
              }}
              onClick={() => onSkillsDelete(ind)}
            />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
