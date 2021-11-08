import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./css/DashContent.css";
import CoursePaper from "./CoursePaper";

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

export default function HomeTabs({ userCourses }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [staticC, setStaticC] = useState(false);
  const [react, setReact] = useState(false);
  const [python, setPython] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    for (const prop in userCourses) {
      if (userCourses[prop] === "Static Website Development") {
        setStaticC(true);
      } else if (userCourses[prop] === "React Website Development") {
        setReact(true);
      } else if (userCourses[prop] === "Python Development") {
        setPython(true);
      } else {
        setPython(false);
        setReact(false);
        setStaticC(false);
      }
    }
  }, [userCourses]);

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
        <CoursePaper
          level="Beginner level"
          courseName="Static Website Development"
          courseDetails="It looks like you missed some important deadlines. Reset your
                deadlines and get started today."
          courseLink="/staticwebcourse"
        />
        <CoursePaper
          level="Intermediate level"
          courseName="React Website Development"
          courseDetails="It looks like you missed some important deadlines. Reset your
                deadlines and get started today."
          courseLink="/reactwebcourse"
        />
        <CoursePaper
          level="Beginner level"
          courseName="Python Development"
          courseDetails="It looks like you missed some important deadlines. Reset your
                deadlines and get started today."
          courseLink="/pythoncourse"
        />
      </TabPanel>
      <TabPanel value={value} index={1} className="p-0">
        {userCourses.length === 0 && (
          <p className="text-center">
            Oops, You are not enrolled in any course yet 🙁{" "}
          </p>
        )}
        {python && (
          <CoursePaper
            level="Beginner level"
            courseName="Python Development"
            courseDetails="It looks like you missed some important deadlines. Reset your
                deadlines and get started today."
            courseLink="/pythoncourse"
          />
        )}
        {staticC && (
          <CoursePaper
            level="Beginner level"
            courseName="Static Website Development"
            courseDetails="It looks like you missed some important deadlines. Reset your
                deadlines and get started today."
            courseLink="/staticwebcourse"
          />
        )}
        {react && (
          <CoursePaper
            level="Intermediate level"
            courseName="React Website Development"
            courseDetails="It looks like you missed some important deadlines. Reset your
                deadlines and get started today."
            courseLink="/reactwebcourse"
          />
        )}
      </TabPanel>
    </div>
  );
}
