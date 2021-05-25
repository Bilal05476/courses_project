import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "./css/dashpro.css";
import "./css/DashContent.css";
import { useState, useEffect } from "react";
import { auth, db } from "../Firebase";
import { useStateValue } from "../StateProvider";
import HomeTabs from "./HomeTabs";
// import logo from "../img/logo.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Dashboard() {
  const [{ user }] = useStateValue();
  const [updateCurrent, setUpdateCurrent] = useState("");
  const [updateFuture, setUpdateFuture] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const currentOccu = document.querySelector(".current");
  const futureOccu = document.querySelector(".future");

  useEffect(
    () =>
      db
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          currentOccu.innerHTML = `${doc.data().currentOcc}`;
          futureOccu.innerHTML = `${doc.data().futureOcc}`;
        }),
    [user]
  );
  return (
    <>
      <div className="dashboard__content">
        <div className="row">
          <div className="col-md-12">
            <Paper className="heading mainHeader">
              {/* <img src={logo} alt="logo" className="weblogo" /> */}
              <Typography className="menuShow" variant="h6" noWrap>
                Dashboard
              </Typography>
            </Paper>
          </div>
        </div>
        <Paper className="row mx-1 my-4 px-2 learningPaper">
          <div
            className="col-md-6 my-3"
            style={{
              display: "flex",
              alignItems: "flex-end",
              color: "#1b193f",
            }}
          >
            <Typography className="typo" variant="h3">
              Welcome back!
            </Typography>
          </div>
          <div className="col-md-6 my-3">
            <Paper className="learning learningHeader p-3">
              <h6 className="typo">My Learning Profile</h6>
              <br />
              <h6 className="">
                I am currently a/an <strong className="current"></strong>
              </h6>

              <br />
              <h6 className="">
                I want to become a/an <strong className="future"></strong>
              </h6>
              <br />
              <Button
                data-toggle="modal"
                data-target="#profileModal"
                variant="contained"
                className="courseBtn text-light"
                style={{
                  outline: "none",
                }}
              >
                Edit your profile
              </Button>
              <div
                className="modal fade"
                style={{ marginTop: "8rem" }}
                id="profileModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Profile Details
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        style={{ outline: "none" }}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form
                        onSubmit={onSubmit}
                        noValidate
                        autoComplete="off"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <TextField
                          value={updateCurrent}
                          onChange={(e) => setUpdateCurrent(e.target.value)}
                          className="my-2 py-2"
                          id="standard-basic"
                          label="I am currently a/an"
                        />
                        <TextField
                          value={updateFuture}
                          onChange={(e) => setUpdateFuture(e.target.value)}
                          className="my-2 py-2"
                          id="standard-basic"
                          label="I want to become a/an"
                        />
                        <div className="modal-footer">
                          <Button
                            data-dismiss="modal"
                            variant="contained"
                            className="courseBtn text-light"
                            style={{
                              outline: "none",
                            }}
                          >
                            Save Changes
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
        </Paper>
        <div className="row">
          <div className="col-md-12">
            <HomeTabs />
          </div>
        </div>
      </div>
    </>
  );
}
