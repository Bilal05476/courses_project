import DashBoardProject from "./Components/DashBoardProject";
import { useEffect, useState } from "react";
import { db } from "./Firebase";
import { useStateValue } from "./StateProvider";

const App = () => {
  const [{ user }] = useStateValue();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userCurrentOcc, setUserCurrentOcc] = useState("");
  const [userFutureOcc, setUserFutureOcc] = useState("");
  const [userSkills, setUserSkills] = useState([]);
  const [userCourses, setUserCourses] = useState([]);

  const getUserData = db.collection("users").doc(user.uid);
  getUserData.get().then((doc) => {
    setUserName(doc.data().name);
    setUserEmail(doc.data().email);
    setUserGender(doc.data().gender);
    setUserCurrentOcc(doc.data().currentOcc);
    setUserFutureOcc(doc.data().futureOcc);
    setUserSkills(doc.data().skills);
    setUserCourses(doc.data().courseEnrollments);
  });

  return (
    <DashBoardProject
      userName={userName}
      userEmail={userEmail}
      userGender={userGender}
      userCurrentOcc={userCurrentOcc}
      userFutureOcc={userFutureOcc}
      userSkills={userSkills}
      userCourses={userCourses}
    />
  );
};

export default App;
