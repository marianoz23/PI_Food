import React from "react";
import { useState } from "react";
import "./CreateRecipe.css";
import { connect } from "react-redux";
import { addRecipe } from "./../../redux/actions/index";
import { dietList, dishList } from "./../../utils/Diet_List.js";
import {useHistory} from 'react-router-dom';
import NavBar from "./../Nav/NavBar";


function manageError(campo) {
  let err = {};
  if (!campo.title || campo.title.length<5 || (campo.title.substring(0,1)>0 && campo.title.substring(0,1)<9) ) err.title = "ERROR! Enter Title without start with number";
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
    instructions:"",
    diets: [],
    dishTypes: [] 
  };

  const [input, setInput] = React.useState(initialState);
  const [err, setErr] = React.useState({});

  let history = useHistory()

  let handleOnChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErr(manageError({...input, [e.target.name]: e.target.value }));
  };

  const [checkedStateDiet, setCheckedStateDiet] = useState(new Array(dietList.length).fill(false) );
  const [checkedStateDish, setCheckedStateDish] = useState(new Array(dishList.length).fill(false) );

  const handleOnChangeDiet = (position) => {
      const updatedCheckedState = checkedStateDiet.map((item, index) =>
                                  index === position ? !item : item
      );
  setCheckedStateDiet(updatedCheckedState);
  };
  const handleOnChangeDish = (position) => {
    const updatedCheckedState = checkedStateDish.map((item, index) =>
                                index === position ? !item : item
    );  
  setCheckedStateDish(updatedCheckedState);
  };

  const handleOnSubmit = (e) => {
    cargaDiets();
    if (!input.diets.length)
    {
      e.preventDefault();
      return alert("please select diet..")
    }
    cargaDishs();
    if (!input.dishTypes.length)
    {
      e.preventDefault();
      return alert("please select dish..")
    }
 
    add(input);
    alert("Recipe created..!")
    setInput(initialState);
    history.push('/home')
  };

  function cargaDiets(){
    let check='';
    for (let i=0; i<checkedStateDiet.length; i++ ){
      if (checkedStateDiet[i]){
        check = dietList[i];
        input.diets.push(check.id);
      }
    }
  }
 
  function cargaDishs(){
    let check='';
    for (let i=0; i<checkedStateDish.length; i++ ){
      if (checkedStateDish[i]){
        check = dishList[i];
        input.dishTypes.push(check.name);
      }
    }
  }
 
  return (
    <div>
      <NavBar/>
      <h1 className="recipes">ADD NEW RECIPE</h1>
      <form onSubmit={(e) => handleOnSubmit(e)}>
            <div>
              <label class="etiqueta">Title: </label>
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
                type="number" min="0" max="100"  
                name="healthScore"
                value={input.healthScore}
                onChange={(e) => handleOnChange(e)}
              />
              {err.healthScore && (<p className="error"> {err.healthScore} </p>)}
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
                          id={index} 
                          name={name}
                          value={name}
                          checked={checkedStateDiet[index]}
                          onChange={() => handleOnChangeDiet(index)}
                        />
                        <label>{name}</label>
                      </div>  
                    </div>
                  </li>
                );
              })}
              </ul>
            </div>

            <div>
              <h3>Select Dish Type</h3>
              <ul className="diets-list">
                {dishList.map(({name},index) => {
                return(
                  <li key={index}>
                    <div className="diets-list-item">
                      <div >
                        <input 
                          type="checkbox"
                          id={index} 
                          name={name}
                          value={name}
                          checked={checkedStateDish[index]}
                          onChange={() => handleOnChangeDish(index)}
                        />
                        <label>{name}</label>
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
          disabled={!input.title || input.title.length<5 || input.title.substring(0,1)>0 ? true : false}
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
