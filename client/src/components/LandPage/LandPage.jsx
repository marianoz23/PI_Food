import React from "react";
import { Link } from "react-router-dom";
import "../../components/LandPage/LandPage.css";

export default function Landing() {
  return (
    <div className="landing_background">
      <div className="conteined">
        <div></div>
        <div>
          <h1 className="title">FOOD MANIA</h1>
          <Link to={"/home"}>
            <button className="buttonlanding">Load Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
}