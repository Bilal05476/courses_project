import loginImage from "../img/img1.jpg";
import signupImage from "../img/img2.jpg";
import "./css/Login.css";
import { useState } from "react";
import { auth, db } from "../Firebase";
import { useStateValue } from "../StateProvider";

const Auth = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPass, setSignPass] = useState("");
  const [signName, setSignName] = useState("");
  const [current, setCurrent] = useState("");
  const [future, setFuture] = useState("");
  const [gender, setGender] = useState("");
  const [signError, setSignError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const toggleForm = () => {
    const section = document.querySelector("section");
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    section.classList.toggle("active");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    //auth
    auth
      .createUserWithEmailAndPassword(signEmail, signPass)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        localStorage.setItem("user", JSON.stringify(result.user));
        //send data to database
        return db.collection("users").doc(result.user.uid).set({
          name: signName,
          email: signEmail,
          currentOcc: current,
          futureOcc: future,
          gender,
        });
      })
      .catch((error) => {
        setSignError(error.message);
        setSignEmail(signEmail);
        setSignPass("");
        setSignName(signName);
        setCurrent(current);
        setFuture(future);
        setGender(gender);
      });
    setSignEmail("");
    setSignPass("");
    setSignName("");
    setCurrent("");
    setFuture("");
    setGender("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    //validate data from database
    auth
      .signInWithEmailAndPassword(loginEmail, loginPass)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        localStorage.setItem("user", JSON.stringify(result.user));
      })
      .catch((error) => {
        setLoginError(error.message);
      });
    setLoginEmail("");
    setLoginPass("");
  };
  console.log(user);
  const options = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];
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
                placeholder="Email Address"
                required
              />
              <input
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
              <input type="submit" value="Login" />
              <p className="signup">
                Don't have an account?{" "}
                <strong onClick={toggleForm}>Sign Up</strong>
              </p>
              <div className="loginerror">{loginError}</div>
            </form>
          </div>
        </div>

        <div className="user signupBx">
          <div className="formBx">
            <form onSubmit={handleSignUp} id="signup-form">
              <h2>Create an account</h2>
              <input
                value={signName}
                onChange={(e) => setSignName(e.target.value)}
                type="text"
                placeholder="Full Name"
                id="signup-name"
                required
              />
              <input
                value={signEmail}
                onChange={(e) => setSignEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                id="signup-email"
                required
              />
              {/* <input
                value={gender}
                onChange={(e) => setGender(e.target.value.toLowerCase())}
                type="text"
                placeholder="Gender"
                id="gender"
                required
              /> */}
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                value={signPass}
                onChange={(e) => setSignPass(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
              {/* <input
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                type="text"
                placeholder="I am currently a/an"
                id="current"
                required
              />
              <input
                value={future}
                onChange={(e) => setFuture(e.target.value)}
                type="text"
                placeholder="I want to become a/an"
                id="future"
                required
              /> */}
              <input type="submit" value="Sign Up" />
              <p className="signin">
                Already have an account?{" "}
                <strong onClick={toggleForm}>Sign In</strong>
              </p>
              <div className="signerror">{signError}</div>
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
