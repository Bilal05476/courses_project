import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import NotifiCompo from "./NotifiCompo";
import "./css/dashpro.css";
import { useStateValue } from "../StateProvider";
import { db } from "../Firebase";

function AppNavbar() {
  const [{ user }] = useStateValue();
  const [state, setState] = useState({
    left: false,
  });

  const accountsDetails = document.querySelector(".accountName");
  useEffect(
    () =>
      db
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          accountsDetails.innerHTML = `<div>${doc.data().name}</div>`;
        }),
    [user]
  );

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
                  className="drawerSlide"
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <Sidebar />
                </Drawer>
              </div>
            ))}
          </div>

          <Typography className="logo" variant="h6" noWrap>
            logo
          </Typography>
        </Toolbar>
        <div className="accountName"></div>
        <div className="notifi__lg">
          <NotifiCompo />
        </div>
      </div>
    </AppBar>
  );
}

export default AppNavbar;
