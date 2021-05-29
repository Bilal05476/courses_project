import DashboardIcon from "@material-ui/icons/Dashboard";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import "./css/sidebar.css";
import { motion } from "framer-motion";

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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logoComponet">
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
              <Typography className="text-light">
                <LaptopChromebookIcon className="mx-3" /> Courses
              </Typography>
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
