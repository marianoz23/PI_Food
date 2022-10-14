import React from "react";
import "./paginado.css";

export default function Page({ recipesxPage, allRecipes, paginado }) {
  
  const pageNum = [];
  for (let i = 0; i < Math.ceil(allRecipes / recipesxPage); i++) {
    pageNum.push(i + 1);
  }
 
  return (
    <nav className="Back_Page">
      <ul className="ul_pagiation">
        {pageNum?.map((num) => (
          <li className="li" key={num}>
            <button className="a" onClick={() => paginado(num)}>
              {num}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}