import loginImage from "../img/img1.jpg";
import signupImage from "../img/img2.jpg";
import "./css/Login.css";
import { useState, useEffect } from "react";

const Auth = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPass, setSignPass] = useState("");
  const [signName, setSignName] = useState("");
  const [current, setCurrent] = useState("");
  const [future, setFuture] = useState("");

  const toggleForm = () => {
    const section = document.querySelector("section");
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    section.classList.toggle("active");
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    //send data to database
  };
  const handleLogin = (e) => {
    e.preventDefault();
    //validate data from database
  };
  return (
    <section>
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx">
            <img src={loginImage} alt="Login" />
          </div>
          <div className="formBx">
            <form onSubmit={handleLogin}>
              <h2>Sign In</h2>
              <input
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                type="text"
                placeholder="Username"
              />
              <input
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <input type="submit" value="Login" />
              <p className="signup">
                Don't have an account?{" "}
                <a href="#" onClick={toggleForm}>
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>

        <div className="user signupBx">
          <div className="formBx">
            <form onSubmit={handleSignUp}>
              <h2>Create an account</h2>
              <input
                value={signName}
                onChange={(e) => setSignName(e.target.value)}
                type="text"
                placeholder="Full Name"
              />
              <input
                value={signEmail}
                onChange={(e) => setSignEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
              />
              <input
                value={signPass}
                onChange={(e) => setSignPass(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <input
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                type="password"
                placeholder="I am currently a/an"
              />
              <input
                value={future}
                onChange={(e) => setFuture(e.target.value)}
                type="password"
                placeholder="I want to become a/an"
              />
              <input type="submit" value="Sign Up" />
              <p className="signin">
                Already have an account?{" "}
                <a href="#" onClick={toggleForm}>
                  Sign In
                </a>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img src={signupImage} alt="Sign Up" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Auth;
