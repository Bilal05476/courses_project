import DashBoardProject from "./Components/DashBoardProject";
import { useState } from "react";
import { db } from "./Firebase";
import { useStateValue } from "./StateProvider";

const App = () => {
  const [{ user }] = useStateValue();

  if (user) {
    const getUserData = db.collection("users").doc(user.uid);
    getUserData.get().then((doc) => {});
  }
  return <DashBoardProject />;
};

export default App;
