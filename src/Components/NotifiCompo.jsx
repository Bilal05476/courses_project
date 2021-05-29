import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import { db, auth } from "../Firebase";
import "./css/dashpro.css";
import { useStateValue } from "../StateProvider";
import { NavLink } from "react-router-dom";

const NotifiCompo = () => {
  const [userName, setUserName] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const getUserName = db.collection("users").doc(user.uid);
  useEffect(() => {
    return getUserName.get().then((doc) => {
      setUserName(doc.data().name);
    });
  }, [user, getUserName]);

  const signOut = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result,
        });
        localStorage.setItem("user", null);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="notify__icons">
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
        alt="userphoto"
      />
      <div className="userName">{userName}</div>
      <Button
        style={{ outline: "none" }}
        aria-describedby={id}
        onClick={handleClick}
      >
        <ArrowDropDownIcon className="dropdownBtn text-warning" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="accounts__details">
          <h5 className="my-4">Account Details</h5>
          <NavLink className="profile text-center" to="/">
            Profile
          </NavLink>
          <hr />
          <Button onClick={signOut} className="logoutBtn p-2">
            Logout
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default NotifiCompo;
