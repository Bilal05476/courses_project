import { useState } from "react";
import { db } from "../Firebase";
import { useStateValue } from "../StateProvider";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import EmailIcon from "@material-ui/icons/Email";
import WorkIcon from "@material-ui/icons/Work";
import WcIcon from "@material-ui/icons/Wc";
import InfoIcon from "@material-ui/icons/Info";
import HighlightIcon from "@material-ui/icons/Highlight";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import "./css/Profile.css";
import Skills from "./Skills";
import SkillsForm from "./SkillsForm";

const Profile = ({
  userName,
  userEmail,
  userGender,
  userCurrentOcc,
  userFutureOcc,
  userSkills,
  userCourses,
}) => {
  const [updateCurrent, setUpdateCurrent] = useState("");
  const [updateFuture, setUpdateFuture] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [dataSMessage, setDataSMessage] = useState("");
  const [dataFMessage, setDataFMessage] = useState("");
  const [addSkills, setAddSkills] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleSkillBtn, setToggleSkillBtn] = useState(false);
  const [{ user }] = useStateValue();
  const getUserData = db.collection("users").doc(user.uid);

  const onSubmit = async (e) => {
    e.preventDefault();
    userSkills.push(addSkills);
    return getUserData
      .update({
        currentOcc: updateCurrent,
        futureOcc: updateFuture,
        name: updateName,
        skills: userSkills,
      })
      .then(() => {
        setDataSMessage("Profile successfully updated! 🙂");
        setUpdateCurrent("");
        setUpdateFuture("");
        setUpdateName("");
        setAddSkills("");
        setTimeout(() => {
          setDataFMessage("");
          setDataSMessage("");
        }, 3500);
        setTimeout(() => {
          setToggleModal(false);
        }, 4000);
      })
      .catch((error) => {
        // The document probably doesn't exist.
        setDataFMessage(`Error updating profile! ${error}`);
      });
  };

  // console.log(userCourses)

  return (
    <div className="profile">
      <div className="row">
        <div className="col-md-12 text-right">
          <Button
            variant="contained"
            className={`text-light editProButtons ${
              toggleModal ? "modalClose" : "courseBtn"
            }`}
            style={{
              outline: "none",
            }}
            onClick={() => setToggleModal(!toggleModal)}
          >
            {toggleModal ? <CloseIcon /> : <EditIcon />}
          </Button>
        </div>
        <div className="col-md-12">
          {toggleModal && (
            <div className="" role="document">
              <div className="modal-header"></div>
              <div className="modal-body px-0">
                <div className="formBx">
                  {dataSMessage === "" ? (
                    <div></div>
                  ) : (
                    <div
                      className="message bg-success text-light p-2 my-2"
                      style={{ borderRadius: "0.4rem" }}
                    >
                      {dataSMessage}
                    </div>
                  )}

                  {dataFMessage === "" ? (
                    <div></div>
                  ) : (
                    <div
                      className="message bg-danger text-light p-2 my-2"
                      style={{ borderRadius: "0.4rem" }}
                    >
                      {dataFMessage}
                    </div>
                  )}
                  <form className="editDetailsForm px-3 " onSubmit={onSubmit}>
                    <h2 className="text-dark" style={{ fontWeight: "800" }}>
                      Edit Profile
                    </h2>
                    <input
                      className="mt-3 p-2"
                      value={updateName}
                      onChange={(e) => setUpdateName(e.target.value)}
                      type="text"
                      placeholder="Name"
                      required
                    />

                    <input
                      className="mt-3 p-2"
                      value={updateCurrent}
                      onChange={(e) => setUpdateCurrent(e.target.value)}
                      type="text"
                      placeholder="I am currently a/an"
                      required
                    />
                    <input
                      className="mt-3 p-2"
                      value={updateFuture}
                      onChange={(e) => setUpdateFuture(e.target.value)}
                      type="text"
                      placeholder="I want to become a/an"
                      required
                    />
                    <input
                      className="mt-3 p-2"
                      value={addSkills}
                      onChange={(e) => setAddSkills(e.target.value)}
                      type="text"
                      placeholder="Add skill"
                      required
                    />

                    <div className="submitButton my-3">
                      <Button
                        type="submit"
                        variant="contained"
                        className="courseBtn text-light"
                        style={{
                          outline: "none",
                        }}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="left__profile col-md-3">
          {userGender === "female" && (
            <img
              className="profileImage"
              src={
                "https://www.auditionform.in/wp-content/uploads/2020/09/User-4.png"
              }
              alt="user"
            />
          )}
          {userGender === "male" && (
            <img
              className="profileImage"
              src={
                "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
              }
              alt="user"
            />
          )}
          <h6 className="coursesAssign d-flex align-items-center">
            <LaptopChromebookIcon className="mr-2" /> Courses Assign
          </h6>
          {userCourses.map((item, ind) => {
            alert(item)
            return <strong key={ind}>{item ? item : ""}</strong>;
          })}
          {/* <strong>Static Website Development</strong> <br />
          <strong>React Website Development</strong> <br />
          <strong>Python Programming</strong> <br /> */}
          <h6 className="skills d-flex align-items-center">
            <AssignmentTurnedInIcon className="mr-2" /> Skills
            <Button
              variant="contained"
              className={`ml-3 text-light editProButtons ${
                toggleSkillBtn ? "modalClose" : "courseBtn"
              }`}
              style={{
                outline: "none",
              }}
              onClick={() => setToggleSkillBtn(!toggleSkillBtn)}
            >
              {toggleSkillBtn ? (
                <CloseIcon
                  style={{
                    fontSize: "1rem",
                  }}
                />
              ) : (
                <EditIcon
                  style={{
                    fontSize: "1rem",
                  }}
                />
              )}
            </Button>
          </h6>
          {toggleSkillBtn ? <SkillsForm /> : " "}
          {userSkills.length > 0 ? <Skills skills={userSkills} /> : "No Skills"}
        </div>
        <div className="right__profile col-md-9">
          <div className="profileNameAndOccu">
            <h4>{userName}</h4>
            <strong>{userCurrentOcc}</strong>
          </div>
          <div className="profileAbout">
            <h6 className="aboutName d-flex align-items-center">
              <InfoIcon className="mr-2" /> About
            </h6>
            <div className="aboutDetails">
              <div className="aboutUser">
                <strong className="aboutLabelIcon">
                  <AssignmentIndIcon /> User Name
                </strong>
                <strong className="userDataGet">{userName}</strong>
              </div>
              <div className="aboutUser">
                <strong className="aboutLabelIcon">
                  <EmailIcon /> User Email
                </strong>
                <strong className="userDataGet">{userEmail}</strong>
              </div>
              <div className="aboutUser">
                <strong className="aboutLabelIcon">
                  <WorkIcon /> Current Occupation
                </strong>
                <strong className="userDataGet">{userCurrentOcc}</strong>
              </div>
              <div className="aboutUser">
                <strong className="aboutLabelIcon">
                  <HighlightIcon /> Future Plan
                </strong>
                <strong className="userDataGet">{userFutureOcc}</strong>
              </div>
              <div className="aboutUser">
                <strong className="aboutLabelIcon">
                  <WcIcon /> Gender
                </strong>
                <strong className="userDataGet">{userGender}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
