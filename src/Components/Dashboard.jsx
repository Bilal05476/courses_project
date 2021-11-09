import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "./css/dashpro.css";
import "./css/DashContent.css";
import { useState } from "react";
import { db } from "../Firebase";
import { useStateValue } from "../StateProvider";
import HomeTabs from "./HomeTabs";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

export default function Dashboard({
  userCurrentOcc,
  userFutureOcc,
  userCourses,
  userName,
}) {
  const [{ user }] = useStateValue();
  const [updateCurrent, setUpdateCurrent] = useState("");
  const [updateFuture, setUpdateFuture] = useState("");
  const [dataSMessage, setDataSMessage] = useState("");

  const getOccupation = db.collection("users").doc(user.uid);
  const onSubmit = (e) => {
    e.preventDefault();
    return getOccupation
      .update({
        currentOcc: updateCurrent,
        futureOcc: updateFuture,
      })
      .then(() => {
        setDataSMessage(`Successfully Updated! ${userName} 🙂`);
        setUpdateCurrent("");
        setUpdateFuture("");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        alert(`Error! ${error}`);
      });
  };

  setTimeout(() => {
    setDataSMessage("");
  }, 10000);

  return (
    <>
      <div className="dashboard__content">
        <Paper className="row mx-1 my-4 px-2 learningPaper">
          <div
            className="col-md-4 my-3"
            style={{
              display: "flex",
              alignItems: "flex-end",
              color: "#1b193f",
            }}
          >
            <Typography className="typo welcome" variant="h4">
              Welcome back!
            </Typography>
          </div>
          <div className="col-md-8 my-3">
            <Paper className="learning learningHeader p-3">
              <div>
                <h6 className="typo">My Learning Profile</h6>
                <br />
                <h6 className="currentInfo">
                  I am currently a/an{" "}
                  <strong className="current">{userCurrentOcc}</strong>
                </h6>

                <br />
                <h6 className="futureInfo">
                  I want to become a/an{" "}
                  <strong className="future">{userFutureOcc}</strong>
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
              </div>
              <div>
                <small>B-A TECHNOS</small>
              </div>
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
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        style={{ outline: "none" }}
                      >
                        <CloseIcon className="text-light" />
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="formBx">
                        {dataSMessage && (
                          <div className="message bg-success text-light p-2 my-2">
                            {dataSMessage}
                          </div>
                        )}
                        <form
                          className="editDetailsForm px-3"
                          onSubmit={onSubmit}
                        >
                          <h2>Edit Profile</h2>
                          <input
                            className="p-2"
                            value={updateCurrent}
                            onChange={(e) => setUpdateCurrent(e.target.value)}
                            type="text"
                            placeholder="I am currently a/an"
                            required
                          />
                          <input
                            className="mt-3 p-2"
                            value={updateFuture}
                            onChange={(e) => setUpdateFuture(e.target.value)}
                            type="text"
                            placeholder="I want to become a/an"
                            required
                          />
                          <div className="submitButton my-3">
                            <Button
                              type="submit"
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
              </div>
            </Paper>
          </div>
        </Paper>
        <div className="row">
          <div className="col-md-12">
            <HomeTabs userCourses={userCourses} />
          </div>
        </div>
      </div>
    </>
  );
}
