import React from "react";
import { Link } from "react-router-dom";
import "../../components/LandPage/LandPage.css";

export default function Landing() {
  return (
    <div className="Landing_background">
      <div className="conteined">
        <div></div>
        <div>
          <h1 className="title">WELCOME TO FOOD MANIA</h1>
          <Link to={"/home"}>
            <button className="buttonlanding">Load Recipes</button>
          </Link>
        </div>
        <div className="Presentatión">
          <p>
            {" "}
            <br />
            Aquí encontrarás la mejor
            <br /> recetas, con los mejores
            <br /> ingredientes, para tu comida
            <br /> favorita.
            <br /> Aventurarte en un mundo lleno de <br />
            sabores
          </p>
        </div>
      </div>
    </div>
  );
}