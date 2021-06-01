import { useState, useEffect } from "react";
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
import CloseIcon from "@material-ui/icons/Close";
import "./css/Profile.css";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCurrent, setUserCurrent] = useState("");
  const [userFuture, setUserFuture] = useState("");
  const [userGender, setUserGender] = useState("");
  const [updateCurrent, setUpdateCurrent] = useState("");
  const [updateFuture, setUpdateFuture] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [dataSMessage, setDataSMessage] = useState("");
  const [dataFMessage, setDataFMessage] = useState("");
  const [{ user }] = useStateValue();
  const getUserData = db.collection("users").doc(user.uid);

  useEffect(() => {
    return getUserData.get().then((doc) => {
      setUserName(doc.data().name);
      setUserEmail(doc.data().email);
      setUserCurrent(doc.data().currentOcc);
      setUserFuture(doc.data().futureOcc);
      setUserGender(doc.data().gender);
    });
  }, [user, getUserData]);

  const onSubmit = async (e) => {
    e.preventDefault();
    return getUserData
      .update({
        currentOcc: updateCurrent,
        futureOcc: updateFuture,
        name: updateName,
        email: updateEmail,
      })
      .then(() => {
        setDataSMessage("Profile successfully updated! 🙂");
        setUpdateCurrent("");
        setUpdateFuture("");
        setUpdateEmail("");
        setUpdateName("");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        setDataFMessage(`Error updating profile! ${error}`);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setDataFMessage("");
      setDataSMessage("");
    }, 25000);
  }, [getUserData]);

  return (
    <div className="profile">
      <div className="row">
        <div className="col-md-12 text-right">
          <Button
            data-toggle="modal"
            data-target="#profileEditModal"
            variant="contained"
            className="courseBtn text-light"
            style={{
              outline: "none",
            }}
          >
            Edit your profile
          </Button>
        </div>
        <div>
          <div
            className="modal fade"
            style={{ marginTop: "8rem" }}
            id="profileEditModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    style={{ outline: "none" }}
                  >
                    <CloseIcon className="text-light" />
                  </button>
                </div>
                <div className="modal-body">
                  <div className="formBx">
                    {dataSMessage === "" ? (
                      <div></div>
                    ) : (
                      <div className="message bg-success text-light p-2 my-2">
                        {dataSMessage}
                      </div>
                    )}

                    {dataFMessage === "" ? (
                      <div></div>
                    ) : (
                      <div className="message bg-success text-light p-2 my-2">
                        {dataFMessage}
                      </div>
                    )}
                    <form className="editDetailsForm px-3" onSubmit={onSubmit}>
                      <h2>Edit Profile</h2>
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
                        value={updateEmail}
                        onChange={(e) => setUpdateEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
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
            </div>
          </div>
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
          <strong>Static Website Development</strong> <br />
          <strong>React Website Development</strong> <br />
          <strong>Python Programming</strong> <br />
          <h6 className="skills d-flex align-items-center">
            <AssignmentTurnedInIcon className="mr-2" /> Skills
          </h6>
          <strong>JavaScript</strong> <br />
          <strong>React Js</strong> <br />
          <strong>Python</strong> <br />
          <strong>Github</strong> <br />
          <strong>Firebase</strong> <br />
          <strong>Netlify</strong> <br />
        </div>
        <div className="right__profile col-md-9">
          <div className="profileNameAndOccu">
            <h4>{userName}</h4>
            <strong>{userCurrent}</strong>
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
                <strong className="userDataGet">{userCurrent}</strong>
              </div>
              <div className="aboutUser">
                <strong className="aboutLabelIcon">
                  <HighlightIcon /> Future Plan
                </strong>
                <strong className="userDataGet">{userFuture}</strong>
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
