import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {

    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    /*console.log("Estoy en burger: "+Object.keys(props.ingredients));

    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => { //igKey es el nombre del ingrediente
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
             return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    */
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Agregá tus ingredientes!</p>;
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
