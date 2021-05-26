import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import { auth, db } from "../Firebase";
import { useStateValue } from "../StateProvider";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import "./css/sidebar.css";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  const [userName, setUserName] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const getUserName = db.collection("users").doc(user.uid);
  useEffect(() => {
    return getUserName.get().then((doc) => {
      setUserName(doc.data().name);
    });
  }, [user, getUserName]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const signOut = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result,
        });
        localStorage.setItem("user", null);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="sidebar">
      <div className="account__details">
        {/* <img className="avatar" src={user?.photoURL} alt="userphoto" />
        <h6>{user?.displayName}</h6> */}
        <img
          className="avatar"
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt="userphoto"
        />
        <div className="studentName">{userName}</div>
        <Button
          style={{ outline: "none" }}
          aria-describedby={id}
          onClick={handleClick}
        >
          <ArrowDropDownIcon className="drop text-light" />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Button onClick={signOut} className="logoutBtn p-2">
            Logout
          </Button>
        </Popover>
      </div>

      <div className="main">
        <h6>Learning Never Ends</h6>
      </div>

      <div className="dash__sidebar">
        <div className="firstChild">
          <NavLink
            to="/"
            className="first text-light"
            style={{
              textDecoration: "none",
            }}
          >
            <DashboardIcon />

            <h5 className="m-0 mx-3 p-0">Dashboard</h5>
          </NavLink>
        </div>
        <div className="secondChild">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-light" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="coursesHeader accordionHeader"
            >
              <Typography className="text-light">Courses</Typography>
            </AccordionSummary>
            <AccordionDetails className="coursesSelector">
              <NavLink
                className="links text-dark"
                style={{ textDecoration: "none " }}
                to="/staticwebcourse"
              >
                Static Website Development
              </NavLink>
              <NavLink
                className="links text-dark"
                style={{ textDecoration: "none " }}
                to="/reactwebcourse"
              >
                React Website Development
              </NavLink>
              <NavLink
                className="links text-dark"
                style={{ textDecoration: "none " }}
                to="/pythoncourse"
              >
                Python Development
              </NavLink>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="components">
        <h6>CONNECT US</h6>
        <div className="firstChild">
          <div className="first">
            <a
              href="https://facebook.com/batechnos25"
              target="blank"
              className="d-flex justify-content-center align-items-center text-light"
              style={{ textDecoration: "none " }}
            >
              <FacebookIcon />
              <h6 className="mx-3">Facebook</h6>
            </a>
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <a
              href="https://instagram.com/batechn05"
              target="blank"
              className="d-flex justify-content-center align-items-center text-light"
              style={{ textDecoration: "none " }}
            >
              <InstagramIcon />
              <h6 className="mx-3">Instagram</h6>
            </a>
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <a
              href="https://www.linkedin.com/company/ba-technos"
              target="blank"
              className="d-flex justify-content-center align-items-center text-light"
              style={{ textDecoration: "none " }}
            >
              <LinkedInIcon />
              <h6 className="mx-3">LinkedIn</h6>
            </a>
          </div>
        </div>

        <div className="firstChild">
          <div className="first" disabled>
            <a
              href="https://telegram.com"
              className="d-flex justify-content-center align-items-center text-secondary"
              style={{ textDecoration: "none " }}
            >
              <TelegramIcon />
              <h6 className="mx-3">Telegram</h6>
            </a>
          </div>
        </div>

        <hr className="hori"></hr>
        <br />
      </div>
    </div>
  );
};

export default Sidebar;
