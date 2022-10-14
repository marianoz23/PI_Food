import React from "react";
import { useState } from "react";
import "./CreateRecipe.css";
import { connect } from "react-redux";
import { addRecipe } from "./../../redux/actions/index";
import { dietList } from "./../../utils/Diet_List.js";
import {useHistory} from 'react-router-dom';
import NavBar from "./../Nav/NavBar";


function manageError(campo) {
  let err = {};
  if (!campo.title || campo.title.length<5 || (campo.title.substring(0,1)>0 && campo.title.substring(0,1)<9) ) err.title = "Enter Title";
  else if (!campo.summary || campo.summary.length<5 || (campo.summary.substring(0,1)>0 && campo.summary.substring(0,1)<9) ) err.summary = "Enter Summary";
  else if (!campo.instructions) err.instructions = "Enter Instructions";
  return err
}

function CreateRecipe({ add }) {
  const initialState = {
    title: "",
    image: "",    
    summary: "",
    healthScore: "",
    diets: [] 
  };

  const [input, setInput] = React.useState(initialState);
  const [err, setErr] = React.useState({});

  let history = useHistory()

  let handleOnChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErr(manageError({...input, [e.target.name]: e.target.value }));
  };

  const [checkedState, setCheckedState] = useState(new Array(dietList.length).fill(false) );

  const handleOnChange2 = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
      );
    
  setCheckedState(updatedCheckedState);
  };

  const handleOnSubmit = (e) => {
    cargaDiets();
    if (!input.diets.length)
    {
      e.preventDefault();
      return alert("please select diet..")
    }
    add(input);
    alert("Recipe created..!")
    setInput(initialState);
    history.push('/home')
  };

  function cargaDiets(){
    let check='';
    for (let i=0; i<checkedState.length; i++ ){
      if (checkedState[i]){
        check = dietList[i];
        input.diets.push(check.name);
      }
    }
  }
 
  return (
    <div>
      <NavBar/>
      <h1 className="recipes">ADD NEW RECIPE</h1>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={(e) => handleOnChange(e)}
          />
          {err.title && (<p className="error"> {err.title} </p>)}
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
          {err.summary && (<p className="error"> {err.summary} </p>)}

        </div>
        <div>
          <label>Health Score: </label>
          <input
            type="range" min="0" max="100" 
            name="healthScore"
            value={input.healthScore}
            onChange={(e) => handleOnChange(e)}
          />
          {<p>{input.healthScore}</p>}
        </div>

        <div>
          <label>Instructions: </label>
          <input
            type="text"
            name="instructions"
            value={input.instructions}
            onChange={(e) => handleOnChange(e)}
          />
          {err.instructions && (<p className="error"> {err.instructions} </p>)}
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
