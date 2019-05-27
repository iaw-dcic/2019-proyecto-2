import React, {Component} from 'react'; 
import Aux from '../../hoc/AuxDiv';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/CustomModal';
import BurgerSummary from '../../components/Burger/BurgerSummary/BurgerSummary';

class BurgerBuilder extends Component {

   /* state = {
        ingredients: {}
    }

    componentDidMount () {
        axios.get('/api/ingredients').then(response => {        
            
        this.data= response.data;
        let ingredientsToAssign= {};
        this.data.forEach((ingredient) => {
            //console.log("ingrediente: ",ingredient.name+ingredient.selectedIngredient);
            //arrayIngredients.push(ingredient.name+ingredient.selectedIngredient);
            ingredientsToAssign[ingredient.name+ingredient.selectedIngredient]= 0
        })
        //const result = arrayIngredients.map(value => ({[value]: 0}));
        //console.log("El arreglo es: ",result);
          console.log("Estoy en el builder: ",ingredientsToAssign);
          this.setState({
            ingredients: response.data,
          })
        })
    }*/


    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        canSaveBurger: false,
        savingBurger: false,
    }

    updateCanSaveBurgerState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { canSaveBurger: sum > 0 } );
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState( {ingredients: updatedIngredients } );
        this.updateCanSaveBurgerState(updatedIngredients);

    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState( {ingredients: updatedIngredients } );
        this.updateCanSaveBurgerState(updatedIngredients);
    }

    saveBurgerHandler = () => {
        this.setState({savingBurger: true});
        alert('You continue!');
        console.log("Continuar!");
    }

    savingCancelHandler = () => {
        this.setState({savingBurger: false});
    }

    savingContinueHandler = () => {
        alert('You continue!');
    }

    
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
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
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} 
                    canSaveBurger={this.state.canSaveBurger} 
                    saved={this.saveBurgerHandler}/>}
            </Aux>
        );
       
    }
}

export default BurgerBuilder;