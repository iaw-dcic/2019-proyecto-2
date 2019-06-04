import React, { Component } from "react";
import Aux from "../../hoc/AuxDiv";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/CustomModal";
import BurgerSummary from "../../components/Burger/BurgerSummary/BurgerSummary";
import { Alert } from 'reactstrap';
import { UncontrolledAlert } from 'reactstrap';
import localStorage from 'local-storage'



class BurgerBuilder extends Component {
    state = {
        ingredients: {},
        separatedIngredients: [],
        canSaveBurger: false,
        savingBurger: false,        
    };

    componentDidMount() {
        let token= localStorage.get('userToken');
        let axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        };

        let ingredients = localStorage.get('ingredients') || null;    
            axios.get("/api/ingredients",axiosConfig).then(response => {
                let ingredientsToAssign = [];
                const data = response.data;
                data.map(ingredient => {
                    ingredientsToAssign[ingredient.type] = 0;
                });
                this.setState({
                    separatedIngredients: data
                });
                if (ingredients === null) { //No esta en local storage
                    this.setState({
                        ingredients: ingredientsToAssign,
                    })
                } else { //Esta en local storage
                    this.setState({
                        ingredients: ingredients,              
                    });
                }
            });
             
    }

    updateCanSaveBurgerState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ canSaveBurger: sum > 0 });
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState({ ingredients: updatedIngredients });
        this.updateCanSaveBurgerState(updatedIngredients);
        localStorage.set('ingredients',updatedIngredients);
    };

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState({ ingredients: updatedIngredients });
        this.updateCanSaveBurgerState(updatedIngredients);
        localStorage.set('ingredients',updatedIngredients);
    };

    saveBurgerHandler = () => {

        this.setState({ savingBurger: true });

        let arrayIngredients = [];

        Object.keys(this.state.ingredients)
            .map(igKey => {
                return [...Array(this.state.ingredients[igKey])].map((_, i) => {
                    arrayIngredients.push(igKey);
                });
            })
            .reduce((arr, el) => {
                return arr.concat(el);
            }, []);

        const burger = {
            ingredients: arrayIngredients
        };

        let token= localStorage.get('userToken');
        let axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        };

        axios.post("/api/burgers", burger,axiosConfig)
            .then(response => {
                //alert("Hamburguesa guardada");
            });
    };

    /*savingCancelHandler = () => {
        this.setState({ savingBurger: false });
    };*/

    /*savingContinueHandler = () => {
        //alert("You continue!");
    };*/

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        // {lechuga: true, carne: false, ...}
        return (
            <Aux>
                {/*<Modal show={this.state.savingBurger} modalClosed={this.savingCancelHandler} >
                    <BurgerSummary 
                        ingredients={this.state.ingredients}
                        savingCancelled={this.savingCancelHandler}
                        savingContinued={this.savingContinueHandler} />
               </Modal>*/}
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    separatedIngredients={this.state.separatedIngredients}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    canSaveBurger={this.state.canSaveBurger}
                    saved={this.saveBurgerHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
