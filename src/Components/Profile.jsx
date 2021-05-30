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

import "./css/Profile.css";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCurrent, setUserCurrent] = useState("");
  const [userFuture, setUserFuture] = useState("");
  const [userGender, setUserGender] = useState("");
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

  return (
    <div className="profile">
      <div className="row">
        <div className="left__profile col-md-3">
          {userGender === "female" ? (
            ""
          ) : (
            <img
              className="profileImage"
              src={
                userGender === "male"
                  ? "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                  : ""
              }
              alt=""
            />
          )}
          {userGender === "male" ? (
            ""
          ) : (
            <img
              className="profileImage"
              src={
                userGender === "female"
                  ? "https://www.auditionform.in/wp-content/uploads/2020/09/User-4.png"
                  : ""
              }
              alt=""
            />
          )}
          <h6 className="coursesAssign">
            <LaptopChromebookIcon /> Courses Assign
          </h6>
          <strong>Static Website Development</strong> <br />
          <strong>React Wesbsite Development</strong> <br />
          <strong>Python Programming</strong> <br />
          <h6 className="skills">
            <AssignmentTurnedInIcon /> Skills
          </h6>
          <strong>JavaScript</strong> <br />
          <strong>React Js</strong> <br />
          <strong>Python</strong> <br />
          <strong>JavaScript</strong> <br />
          <strong>React Js</strong> <br />
          <strong>Python</strong> <br />
        </div>
        <div className="right__profile col-md-9">
          <div className="profileNameAndOccu">
            <h4>{userName}</h4>
            <strong>{userCurrent}</strong>
          </div>
          <div className="profileAbout">
            <h6 className="aboutName">
              <InfoIcon /> About
            </h6>
            <div className="aboutDetails">
              <div className="aboutUser">
                <strong className="">
                  <AssignmentIndIcon /> User Name
                </strong>
                <strong className="userDataGet">{userName}</strong>
              </div>
              <div className="aboutUser">
                <strong className="">
                  <EmailIcon /> User Email
                </strong>
                <strong className="userDataGet">{userEmail}</strong>
              </div>
              <div className="aboutUser">
                <strong className="">
                  <WorkIcon /> Current Occupation
                </strong>
                <strong className="userDataGet">{userCurrent}</strong>
              </div>
              <div className="aboutUser">
                <strong className="">
                  <HighlightIcon /> Future Plan
                </strong>
                <strong className="userDataGet">{userFuture}</strong>
              </div>
              <div className="aboutUser">
                <strong className="">
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
