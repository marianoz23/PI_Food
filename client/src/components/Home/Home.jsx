import "./home.css";
import NavBar from "./../Nav/NavBar";
import React, { Component } from "react";
import { connect } from "react-redux";
import { loadDiets, getFoods, getSearch, orderByTitle, orderByHealthScore, filterByDiet } from "./../../redux/actions/index";
import FoodCard from "./../FoodCard/FoodCard.jsx";
import ShowError from "./../FoodCard/ShowError.jsx";
import Page from "./paginado.jsx";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "" , 
      tipoT: 'ASC',
      tipoH: 'ASC',
      tipoD: '',
      currentPage: 1, 
      recipesxPage : 9,
      errorMessaje : "no hay registros"
    };
  }

  componentDidMount (){
    this.props.loadDiets()
    this.props.getFoods()
    }
 
  handleChange(event){
    this.setState({ title: event.target.value }); 
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.getSearch(this.state.title)
  }

  handleChange_orderByT(event){
    this.setState({ tipoT: event.target.value });
    event.preventDefault();
    this.props.orderByTitle(event.target.value)
  }

  handleChange_orderByH(event){
    this.setState({ tipoH: event.target.value });
    event.preventDefault();
    this.props.orderByHealthScore(event.target.value)
  }

  handleChange_filterByD(event){
    this.setState({ tipoD: event.target.value });
    event.preventDefault();
    this.props.filterByDiet(event.target.value)
  }

  render() {
    const { title } = this.state;
    const { errorMessaje } = this.state;
    const { recipesxPage } = this.state;
    const { currentPage } = this.state;
    //paginado
    const indexOfLastRecipe = currentPage * recipesxPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesxPage;
    const currentRecipes = this.props.foods?.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const paginado = (pageNumber) => {
        this.setState( {currentPage: pageNumber} );
    };

    return (
    <header>
      <div>
      <NavBar/>
      </div> 
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input 
              type="text" 
              placeholder="type favorite recipe"
              value={title} 
              onChange={(e) => this.handleChange(e)} 
              className="form-input"
            />
          </div>
          <button 
            type="submit" 
            className="btn"           
            disabled={!title ? true : false}
          >Search</button>
      
        </form>
        <div className="contenedor-principal">
        <div>
          <h3>Order by Title</h3>
          <select onChange={e => this.handleChange_orderByT(e)} >
            <option value="" >Select Orden</option>
            <option value="Asc">A to Z</option>
            <option value="Desc">Z to A</option>
          </select>
        </div>
        <div>
          <h3>Order by Health Score</h3>
            <select onChange={e => this.handleChange_orderByH(e)}>
              <option name="Select One">Select Orden</option>
              <option value="Asc" >Ascendent</option>
              <option value="Desc" >Descendent</option>
            </select>
        </div>

        <div> 
            <h3>Type of Diets</h3>
            <select onChange={e => this.handleChange_filterByD(e)}>
            <option value="" selected>All Diets</option>
            <option value="gluten free" >Gluten Free</option>
            <option value="dairy free" >Dairy Free</option>
            <option value="lacto ovo vegetarian" >Lacto Ovo Vegetarian</option>
            <option value="vegan" >Vegan</option>
            <option value="pecetarian" >Pecetarian</option>
            <option value="paleo" >Paleo</option>
            <option value="primal" >Primal</option>
            <option value="low FODMAP" >Low FODMAP</option>
            <option value="whole 30" >Whole 30</option>
            </select>
        </div>
        </div>

      <div>
        <Page className="page" recipesxPage={recipesxPage} allRecipes={this.props.foods?.length} paginado={paginado}></Page>
       <div>

       </div>
        <div >
        <h1 className="recipes" >Recipes - Pag.{currentPage}</h1>
          <div className="Home">
              {!currentRecipes? <h1>`${errorMessaje}`</h1> : currentRecipes.map(el => (
              <div > 
                <FoodCard
//                  key = {el.id}
                  id={el.id}
                  title={el.title}
                  image={el.image}
                  healthScore={el.healthScore}
                  diets={el.diets}
                />
              </div>
            ))
            }
          </div>
        </div>
      </div>
      
      <div>      
        <Page className="page" recipesxPage={recipesxPage} allRecipes={this.props.foods?.length} paginado={paginado}></Page>
          </div>
    </header>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    foods: state.foods

  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    loadDiets: () => dispatch(loadDiets()),
    getFoods: () => dispatch(getFoods()),
    getSearch: title => dispatch(getSearch(title)),
    orderByTitle: tipoT => dispatch(orderByTitle(tipoT)),
    orderByHealthScore: tipoH => dispatch(orderByHealthScore(tipoH)),
    filterByDiet: tipoD => dispatch(filterByDiet(tipoD)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
