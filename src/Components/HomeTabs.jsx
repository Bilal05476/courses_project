import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import "./css/DashContent.css";
import Button from "@material-ui/core/Button";

import {NavLink} from "react-router-dom";
import PublicIcon from "@material-ui/icons/Public";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
  },
}));

export default function HomeTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className="appBar" position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} style={{ outline: "none" }} />
          <Tab
            label="In Progress"
            {...a11yProps(1)}
            style={{ outline: "none" }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="p-0">
        <Paper className="my-3">
          <Typography className="p-2 px-4">Course</Typography>
          <Typography className="p-2 px-4" style={{ background: "lightGray" }}>
            Beginner level
          </Typography>

          <div className="row">
            <div
              className="col-md-8"
              style={{ padding: "4rem 3rem", paddingBottom: "2rem" }}
            >
              <Typography variant="h4">Static Website Development</Typography>
              <p className="m-0">
                It looks like you missed some important deadlines. Reset your
                deadlines and get started today.
              </p>
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
              <NavLink to="/staticwebcourse" style={{ textDecoration: "none" }}>
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
                <Typography>BATECHNOS, LEARNING MANAGEMENT SYSTEM</Typography>
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
      </TabPanel>
      <TabPanel value={value} index={1} className="p-0">
        <Paper className="my-3">
          <Typography className="p-2 px-4">Course</Typography>
          <Typography className="p-2 px-4" style={{ background: "lightGray" }}>
            Beginner level
          </Typography>

          <div className="row">
            <div
              className="col-md-8"
              style={{ padding: "4rem 3rem", paddingBottom: "2rem" }}
            >
              <Typography variant="h4">Static Website Development</Typography>
              <p  className="m-0">
                It looks like you missed some important deadlines. Reset your
                deadlines and get started today.
              </p>
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
              <NavLink to="/staticwebcourse" style={{ textDecoration: "none" }}>
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
                <Typography>BATECHNOS, LEARNING MANAGEMENT SYSTEM</Typography>
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
        <Paper className="my-3">
          <Typography className="p-2 px-4">Course</Typography>
          <Typography className="p-2 px-4" style={{ background: "lightGray" }}>
            Intermediate level
          </Typography>

          <div className="row">
            <div
              className="col-md-8"
              style={{ padding: "4rem 3rem", paddingBottom: "2rem" }}
            >
              <Typography variant="h4">React Website Development</Typography>
              <p  className="m-0">
                It looks like you missed some important deadlines. Reset your
                deadlines and get started today.
              </p>
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
              <NavLink to="/reactwebcourse" style={{ textDecoration: "none" }}>
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
                <Typography>BATECHNOS, LEARNING MANAGEMENT SYSTEM</Typography>
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
        <Paper className="my-3">
          <Typography className="p-2 px-4">Course</Typography>
          <Typography className="p-2 px-4" style={{ background: "lightGray" }}>
            Beginner level
          </Typography>

          <div className="row">
            <div
              className="col-md-8"
              style={{ padding: "4rem 3rem", paddingBottom: "2rem" }}
            >
              <Typography variant="h4">Python Development</Typography>
              <p  className="m-0">
                It looks like you missed some important deadlines. Reset your
                deadlines and get started today.
              </p>
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
              <NavLink to="/pythoncourse" style={{ textDecoration: "none" }}>
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
                <Typography>BATECHNOS, LEARNING MANAGEMENT SYSTEM</Typography>
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
      </TabPanel>
    </div>
  );
}
