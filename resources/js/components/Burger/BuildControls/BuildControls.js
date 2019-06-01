import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Badge } from "reactstrap";
import BuildControl from "./BuildControl/BuildControl";

class BuildControls extends Component {
 
    render() {
        const ingredientsTypes = [];
        const controls = [];

        //Show labels and ingredients
        Object.values(this.props.separatedIngredients).map(ingredient => {
            //Create columns with labels : carne,queso,...
            var index = ingredientsTypes.findIndex(
                x => x.label == ingredient.ingredient
            );
            if (index === -1) {
                let labelToAdd = { label: ingredient.ingredient };
                ingredientsTypes.push(labelToAdd);
            }

            //Add controls for types of ingredients: Carne: res, pollo, ...  - Queso: comun, cheddar, ...
            let controlToAdd= {label: ingredient.ingredient , type: ingredient.type};
            controls.push(controlToAdd);

        });

        return (
            <div className="BuildControls">
                <Row>
                    {ingredientsTypes.map(ingType => (
                        <Col key={ingType.label}>
                            <h1 className="text-center">
                                <Badge color="secondary">{ingType.label}</Badge>
                            </h1>
                            {controls.map(ctrl => {
                                if (ctrl.label === ingType.label)
                                    return (
                                        <BuildControl
                                            key={ctrl.type}
                                            label={ctrl.type}
                                            added={() =>this.props.ingredientAdded(ctrl.type)}
                                            removed={() =>this.props.ingredientRemoved(ctrl.type)}
                                            disabled={this.props.disabled[ctrl.type]}
                                        />
                                    );
                            })}
                        </Col>
                    ))}
                </Row>

                <button
                    className="OrderButton"
                    disabled={!this.props.canSaveBurger}
                    onClick={this.props.saved}
                >
                    Guardar
                </button>
            </div>
        );
    }
}

export default BuildControls;
