import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import AppNavbar from "./AppNavbar";
// import Login from "./Login";
import "./css/dashpro.css";
import BottomNav from "./BottomNavigations";
import { Switch, Route } from "react-router-dom";
import StaticWebCourse from "./Courses/StaticWebCourse";
import ReactWebCourse from "./Courses/ReactWebCourse";
import PythonCourse from "./Courses/PythonCourse";

const DashBoardProject = () => {
  return (
    <>
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
        </Switch>
      </div>
      <div className="bottomNavComp">
        <BottomNav />
      </div>
    </>
  );
};

export default DashBoardProject;
