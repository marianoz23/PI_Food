import React from "react";
import { useState } from "react";

import "./CreateRecipe.css";
import { connect } from "react-redux";
import { addRecipe } from "./../../redux/actions/index";
import { dietList } from "./../../utils/Diet_List.js";

import {useHistory} from 'react-router-dom';

function CreateRecipe({ add }) {
  const initialState = {
    image: "",
    title: "",
    summary: "",
    healthScore: "",
    diets: [] 
  };

  let [input, setInput] = React.useState(initialState);

  let history = useHistory()

  let handleOnChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 
  };

  const [checkedState, setCheckedState] = useState(new Array(dietList.length).fill(false) );

  const handleOnChange2 = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
      );
    
  setCheckedState(updatedCheckedState);
  };

  let handleOnSubmit = (e) => {
    e.preventDefault();
    //console.log("lista check",checkedState);
    cargaDiets();
    add(input);
    setInput(initialState);
    history.push('/home')
  };

  function cargaDiets(){
    let check='';
    for (let i=0; i<checkedState.length; i++ ){
      if (checkedState[i]){
        check = dietList[i];
        //console.log(check.name);
        input.diets.push(check.name);
      }
    }
    //console.log(input.diets)    
  }

  return (
    <div>
      <h2> ADD NEW RECIPE</h2>
      <hr />
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            type="text"
            name="image"
            value={input.image}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        
        <div>
          <label>Summary: </label>
          <input
            type="text"
            name="summary"
            value={input.summary}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <label>Health Score: </label>
          <input
            type="text"
            name="healthScore"
            value={input.healthScore}
            onChange={(e) => handleOnChange(e)}
          />
        </div>

        <div>
          <label>Instructions: </label>
          <input
            type="text"
            name="instructions"
            value={input.instructions}
            onChange={(e) => handleOnChange(e)}
          />
        </div>

        <div>
          <h3>Select Diets</h3>
          <ul className="diets-list">
          {dietList.map(({name},index) => {
            return(
              <li key={index}>
                <div className="diets-list-item">
                  <div className="left-section">
                    <input 
                      type="checkbox"
                      id={`custom-checkbox-${index}`} 
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange2(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>  
                </div>
              </li>
            );
          })}
          </ul>
        </div>

        <input
          type="submit"
          value="ADD RECIPE"
          disabled={!input.title ? true : false}
        />
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    add: (input) => dispatch(addRecipe(input)),
  };
}
export default connect(null, mapDispatchToProps)(CreateRecipe);
