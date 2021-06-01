import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import AppNavbar from "./AppNavbar";
import Auth from "./Auth";
import "./css/dashpro.css";
import { Switch, Route } from "react-router-dom";
import StaticWebCourse from "./Courses/StaticWebCourse";
import ReactWebCourse from "./Courses/ReactWebCourse";
import PythonCourse from "./Courses/PythonCourse";
// import Certificate from "./Courses/Certifacate";
import Profile from "./Profile";
import { useStateValue } from "../StateProvider";

const DashBoardProject = () => {
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
            <AppNavbar />
            <div className="dash">
              <div className="sidebarComp">
                <Sidebar />
              </div>
              <Switch>
                <Route path="/" exact>
                  <div className="dashComp">
                    <Dashboard />
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
                <Route path="/profile" exact>
                  <div className="dashComp">
                    <Profile />
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
