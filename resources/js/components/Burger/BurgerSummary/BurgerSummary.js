import React, { Component } from 'react';

import Aux from '../../../hoc/AuxDiv';
//import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
   /* componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }*/

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Aux>  
                <p>Ingredientes:</p>
                <ul>
                    {ingredientSummary}
                </ul>       
            </Aux>
        );
    }
}

export default OrderSummary;