import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import AppNavbar from "./AppNavbar";
import Auth from "./Auth";
import "./css/dashpro.css";
import { Switch, Route } from "react-router-dom";
import StaticWebCourse from "./Courses/StaticWebCourse";
import ReactWebCourse from "./Courses/ReactWebCourse";
import PythonCourse from "./Courses/PythonCourse";
import Profile from "./Profile";
import { useStateValue } from "../StateProvider";

const DashBoardProject = ({
  userName,
  userEmail,
  userGender,
  userCurrentOcc,
  userFutureOcc,
  userSkills,
  userCourses
}) => {
  const [{ user }] = useStateValue();
  return (
    <>
      {!user ? (
        <>
          <Auth />
        </>
      ) : (
        <>
          {/* <Sidebar /> */}
          <div>
            <AppNavbar userName={userName} userGender={userGender} />
            <div className="dash">
              <div className="sidebarComp">
                <Sidebar />
              </div>
              <Switch>
                <Route path="/" exact>
                  <div className="dashComp">
                    <Dashboard
                      userCurrentOcc={userCurrentOcc}
                      userFutureOcc={userFutureOcc}
                      userCourses={userCourses}
                      userName={userName}
                    />
                  </div>
                </Route>
                <Route path="/staticwebcourse" exact>
                  <div className="dashComp">
                    <StaticWebCourse />
                  </div>
                </Route>
                <Route path="/reactwebcourse" exact>
                  <div className="dashComp">
                    <ReactWebCourse />
                  </div>
                </Route>
                <Route path="/pythoncourse" exact>
                  <div className="dashComp">
                    <PythonCourse />
                  </div>
                </Route>
                <Route path="/:path" exact>
                  <div className="dashComp">
                    <Profile
                      userName={userName}
                      userEmail={userEmail}
                      userGender={userGender}
                      userCurrentOcc={userCurrentOcc}
                      userFutureOcc={userFutureOcc}
                      userSkills={userSkills}
                      userCourses={userCourses}
                    />
                  </div>
                </Route>
              </Switch>
            </div>
          </div>
          <Switch>
            <Route exact path="/auth" component={Auth} />
          </Switch>
        </>
      )}
    </>
  );
};

export default DashBoardProject;
