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
        <div className="presentation">
          <p>
            Get inspired by seeing what your trusted friends are recommending, trying, and making for their own families.
            Connect your favorite Pinterest boards to Favoreats and pin away, they'll handle the rest—all your favorite recipes will be imported and organized automatically.
            Add recipes to your meal plan and send the ingredients to your shopping list with a single click.
          </p>
        </div>
      </div>
    </div>
  );
}