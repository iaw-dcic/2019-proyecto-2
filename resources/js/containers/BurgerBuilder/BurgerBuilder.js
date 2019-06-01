import React, { Component } from "react";
import Aux from "../../hoc/AuxDiv";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/CustomModal";
import BurgerSummary from "../../components/Burger/BurgerSummary/BurgerSummary";
import { Alert } from 'reactstrap';
import { UncontrolledAlert } from 'reactstrap';


class BurgerBuilder extends Component {
    state = {
        ingredients: {},
        separatedIngredients: [],
        canSaveBurger: false,
        savingBurger: false,        
    };
   
    componentDidMount() {
        axios.get("/api/ingredients").then(response => {
            let ingredientsToAssign = [];
            const data = response.data;
            data.map(ingredient => {
                //ingredientsToAssign[ingredient.ingredient + " " + ingredient.type] = 0;
                ingredientsToAssign[ingredient.type] = 0;
            });
            this.setState({
                ingredients: ingredientsToAssign,
                separatedIngredients: data
            });
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
            user_id: 99,
            ingredients: arrayIngredients
        };

        axios.post("/api/burgers", burger)
            .then(response => {
                alert("Hamburguesa guardada");
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
