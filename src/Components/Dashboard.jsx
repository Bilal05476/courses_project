import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "./css/dashpro.css";
import "./css/DashContent.css";
import { useState, useEffect } from "react";
import HomeTabs from "./HomeTabs";
// import logo from "../img/logo.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Dashboard() {
  const [current, setCurrent] = useState("");
  const [future, setFuture] = useState("");
  const [designation, setDesignation] = useState([]);

  const loadLinks = async () => {
    const res = await fetch("/.netlify/functions/getLinks");
    const links = await res.json();
    setDesignation(links);
  };
  useEffect(() => {
    loadLinks();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    // updating code mising // working // not complete
    try {
      await fetch("/.netlify/functions/updateLink", {
        method: "PUT",
        body: JSON.stringify(designation),
      });
      // refreshLinks();
    } catch (err) {
      console.error(err);
    }
  };
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
              {designation.map((des) => (
                <>
                  <h6 className="" key={des._id}>
                    I am currently a/an <strong>{des.current}</strong>
                  </h6>
                </>
              ))}
              <br />
              {designation.map((des) => (
                <>
                  <h6 className="" key={des._id}>
                    I want to become a/an <strong>{des.future}</strong>
                  </h6>
                </>
              ))}
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
                          value={current}
                          onChange={(e) => setCurrent(e.target.value)}
                          className="my-2 py-2"
                          id="standard-basic"
                          label="I am currently a/an"
                        />
                        <TextField
                          value={future}
                          onChange={(e) => setFuture(e.target.value)}
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
