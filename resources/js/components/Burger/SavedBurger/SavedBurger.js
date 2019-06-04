import React from 'react';
import Burger from '../Burger';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const order = ( props ) => {
    const ingredients = [];

    /*for ( let ingredientName in props.ingredients ) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }*/
    let transformedIngredients = Object.keys( props.ingredients)
    .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
    } )
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);


    //console.log("Estoy en savedBurger y tiene estos ingredientes: ",transformedIngredients);

    const ingredientOutput = ingredients.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });

    //console.log("Estoy en savedBurger y voy a pasarle estos ingredientes: ",ingredientOutput);

    return (
       /* <div className="SavedBurger">
            <p>Ingredients: {ingredientOutput}</p>
        </div>*/
       
        <div>
            <Burger ingredients={ingredientOutput} />
        </div>
    );
};

export default order;