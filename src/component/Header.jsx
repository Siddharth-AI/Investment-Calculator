import React from "react";
import logo from "../assets/logo.png";
export const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="" />
      <h1>Investment Calculator</h1>
    </header>
  );
};
