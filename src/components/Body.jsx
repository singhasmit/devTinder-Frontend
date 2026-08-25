import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet/>  {/*this outlet means all the children comp of bosy will be rendered here*/}
      <Footer/>
    </div>
  );
};

export default Body;
