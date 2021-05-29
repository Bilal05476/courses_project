import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "./css/DashContent.css";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import PublicIcon from "@material-ui/icons/Public";

const CoursePaper = (props) => {
  return (
    <Paper className="my-3">
      <Typography className="p-2 px-4">Course</Typography>
      <Typography className="p-2 px-4" style={{ background: "lightGray" }}>
        {props.level}
      </Typography>

      <div className="row">
        <div
          className="col-md-8"
          style={{ padding: "4rem 3rem", paddingBottom: "2rem" }}
        >
          <Typography className="courseName" variant="h4">
            {props.courseName}
          </Typography>
          <p className="courseDetails m-0">{props.courseDetails}</p>
        </div>
        <div
          className="col-md-4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <NavLink to={props.courseLink} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              className="courseBtn text-light"
              style={{
                outline: "none",
              }}
            >
              Launch Course
            </Button>
          </NavLink>
        </div>
        <div
          className="col-md-12"
          style={{ padding: "2rem 4rem", paddingTop: ".3rem" }}
        >
          <hr />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography className="LMSCred">
              BATECHNOS, LEARNING MANAGEMENT SYSTEM
            </Typography>
            <a
              className="text-dark"
              data-toggle="tooltip"
              data-placement="left"
              title="Website"
              href="https://batechnos.com"
              target="blank"
            >
              <PublicIcon />
            </a>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CoursePaper;
