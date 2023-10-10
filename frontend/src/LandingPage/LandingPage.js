import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

export default function LandingPage() {
  const theme = useContext(ThemeContext);

  async function apiCall() {
    await fetch(`${process.env.REACT_APP_API_SERVER}`);
  }


  useEffect(()=> {
    //calling api on landing page 
    apiCall()
  },[]);

  return (
    <div
      className={
        theme === "light" ? "land-wrapper" : "land-wrapper land-wrapper-dark"
      }
    >
      <img
        src="https://i.pinimg.com/736x/3e/06/71/3e06710fb1062186a729fd4cdb87cb5a.jpg"
        alt="LandingPage"
        className="land-image"
      />
      <button
        className={theme === "light" ? "land-btn" : "land-btn land-btn-dark"}
      >
        <Link
          to={"/postview"}
          className={theme === "light" ? "link" : "link link-dark"}
        >
          Enter
        </Link>
      </button>
    </div>
  );
}
