import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "./css/dashpro.css";
import "./css/DashContent.css";
import { useState, useEffect } from "react";
import { db } from "../Firebase";
import { useStateValue } from "../StateProvider";
import HomeTabs from "./HomeTabs";
// import logo from "../img/logo.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Dashboard() {
  const [{ user }] = useStateValue();
  const [currently, setCurrently] = useState("");
  const [futuree, setFuturee] = useState("");
  const [updateCurrent, setUpdateCurrent] = useState("");
  const [updateFuture, setUpdateFuture] = useState("");
  const [dataSMessage, setDataSMessage] = useState("");
  const [dataFMessage, setDataFMessage] = useState("");

  const getOccupation = db.collection("users").doc(user.uid);
  const onSubmit = async (e) => {
    e.preventDefault();
    return getOccupation
      .update({
        currentOcc: updateCurrent,
        futureOcc: updateFuture,
      })
      .then(() => {
        setDataSMessage("Profile successfully updated! 🙂");
        setUpdateCurrent("");
        setUpdateFuture("");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        setDataFMessage(`Error updating profile! ${error}`);
      });
  };

  useEffect(() => {
    return getOccupation.get().then((doc) => {
      setCurrently(doc.data().currentOcc);
      setFuturee(doc.data().futureOcc);
      setDataFMessage("");
      setDataSMessage("");
    });
  }, [user, getOccupation]);

  return (
    <>
      <div className="dashboard__content">
        <Paper className="row mx-1 my-4 px-2 learningPaper">
          <div
            className="col-md-6 my-3"
            style={{
              display: "flex",
              alignItems: "flex-end",
              color: "#1b193f",
            }}
          >
            <Typography className="typo welcome" variant="h3">
              Welcome back!
            </Typography>
          </div>
          <div className="col-md-6 my-3">
            <Paper className="learning learningHeader p-3">
              <h6 className="typo">My Learning Profile</h6>
              <br />
              <h6 className="currentInfo">
                I am currently a/an{" "}
                <strong className="current">{currently}</strong>
              </h6>

              <br />
              <h6 className="futureInfo">
                I want to become a/an{" "}
                <strong className="future">{futuree}</strong>
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
                tabIndex="-1"
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
                      <div className="message bg-success text-light px-2">
                        {dataSMessage}
                      </div>
                      <div className="message bg-danger text-light px-2">
                        {dataFMessage}
                      </div>
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
                          required
                        />
                        <TextField
                          value={updateFuture}
                          onChange={(e) => setUpdateFuture(e.target.value)}
                          className="my-2 py-2"
                          id="standard-basic"
                          label="I want to become a/an"
                          required
                        />
                        <div className="modal-footer">
                          <Button
                            variant="contained"
                            className="courseBtn text-light"
                            style={{
                              outline: "none",
                            }}
                            type="submit"
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
