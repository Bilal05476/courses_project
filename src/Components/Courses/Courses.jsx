import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "../css/dashpro.css";
import "../css/DashContent.css";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// Accordion
// import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CertificateBtn from "./CertificateBtn";
// import logo from "../../img/logo.png";

const Courses = (props) => {
  const [video, setVideo] = useState("");
  return (
    <div className="dashboard__content">
      <div className="row">
        <div className="col-md-12">
          <Paper className="heading mainHeader">
            {/* <img src={logo} alt="logo" className="weblogo" /> */}
            <Typography className="" variant="h6" noWrap>
              {props.courseName}
            </Typography>
            <div className="navShow">
              <Breadcrumbs aria-label="breadcrumb">
                <NavLink color="inherit" to="/" className="navShowFont">
                  Dashboard
                </NavLink>
                <Typography color="textPrimary" className="navShowFont">
                  Course
                </Typography>
              </Breadcrumbs>
            </div>
          </Paper>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 my-4">
          {/* <Typography className="courseName" variant="h3">
            {props.courseName}
          </Typography> */}
        </div>
        <div className="col-md-8">
          <iframe
            title="canvas"
            width="100%"
            src={video}
            frameBorder="0"
            allowFullScreen
            className="videoFrame"
          ></iframe>
          {/* allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture" */}
        </div>

        <div className="col-md-4">
          {/* First Accordion */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-light" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="accordionHeader"
            >
              <Typography className="">Introduction</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ol className="mx-4 m-2">
                <li className="my-2">
                  <button
                    className="videoBtn"
                    onClick={() => setVideo(props.videoOne)}
                  >
                    Introduction
                  </button>
                </li>
                <li className="my-2">
                  <button
                    className="videoBtn"
                    onClick={() => setVideo(props.videoTwo)}
                  >
                    Git
                  </button>
                </li>
                <li className="my-2">
                  <button
                    className="videoBtn"
                    onClick={() => setVideo(props.videoThree)}
                  >
                    Github Desktop
                  </button>
                </li>
              </ol>
            </AccordionDetails>
          </Accordion>

          {/* Second Accordion */}
          <Accordion className="my-2">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-light" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="accordionHeader"
            >
              <Typography className="">{props.secondAccordion}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ol className="my-2"></ol>
            </AccordionDetails>
          </Accordion>

          {/* Third Accordion */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-light" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="accordionHeader"
            >
              <Typography className="">{props.thirdAccordion}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ol className="my-2"></ol>
            </AccordionDetails>
          </Accordion>

          {/* Fourth Accordion */}
          <Accordion className="my-2">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-light" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="accordionHeader"
            >
              <Typography className="">{props.fourthAccordion}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ol className="my-2"></ol>
            </AccordionDetails>
          </Accordion>

          {/* Fifth Accordion */}
          <Accordion className="">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-light" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="accordionHeader"
            >
              <Typography className="">Bonus Material</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ol className="my-2"></ol>
            </AccordionDetails>
          </Accordion>

          {/* Certification Btn */}
          <CertificateBtn />
        </div>
      </div>
    </div>
  );
};

export default Courses;
