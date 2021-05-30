import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import NotifiCompo from "./NotifiCompo";
import "./css/dashpro.css";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { rotate: 0, transition: { duration: 1 } },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function AppNavbar() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <AppBar position="fixed">
      <div className="dashboard">
        <Toolbar variant="dense" className="heading__logo">
          <div>
            {["left"].map((anchor) => (
              <div key={anchor}>
                <button
                  className="drawer__icon"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon />
                </button>
                <Drawer
                  className="drawerSlide d-flex"
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <Sidebar />
                </Drawer>
              </div>
            ))}
          </div>
          <div className="appbarLogo">
            <div className="logo d-flex align-items-center">
              <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-laptop"
                viewBox="0 0 16 16"
              >
                <motion.path
                  variants={pathVariants}
                  d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"
                />
              </motion.svg>
              <motion.Typography
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                className="mx-3"
                variant="h6"
                noWrap
              >
                BATECHNOS
              </motion.Typography>
            </div>
          </div>
        </Toolbar>
        <div className="notifi__lg">
          <NotifiCompo />
        </div>
      </div>
    </AppBar>
  );
}

export default AppNavbar;
