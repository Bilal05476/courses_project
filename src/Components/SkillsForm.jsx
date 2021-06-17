import { useState, useEffect } from "react";
import { db } from "../Firebase";
import "./css/Profile.css";
import { useStateValue } from "../StateProvider";
import Button from "@material-ui/core/Button";

const SkillsForm = () => {
  const [{ user }] = useStateValue();
  const [addSkills, setAddSkills] = useState("");
  const getUserData = db.collection("users").doc(user.uid);
  const [userSkills, setUserSkills] = useState([]);
  useEffect(() => {
    return getUserData.get().then((doc) => {
      setUserSkills(doc.data().skills);
    });
  }, [user, getUserData]);

  const onSubmit = (e) => {
    e.preventDefault();
    userSkills.push(addSkills);
    return getUserData
      .update({
        skills: userSkills,
      })
      .then(() => {
        setAddSkills("");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        alert(`Error! ${error}`);
      });
  };
  return (
    <div>
      <form className="editDetailsForm" onSubmit={onSubmit}>
        <input
          className="mt-1 p-2"
          value={addSkills}
          onChange={(e) => setAddSkills(e.target.value)}
          type="text"
          placeholder="Add skill"
          required
          style={{ width: "95%" }}
        />

        <div className="submitButton my-2">
          <Button
            type="submit"
            variant="contained"
            className="courseBtn text-light"
            style={{
              outline: "none",
            }}
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SkillsForm;
