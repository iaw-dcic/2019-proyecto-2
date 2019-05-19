import React from 'react';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Carne', type: 'meat' },
    { label: 'Queso', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Lechuga', type: 'salad' },
];

const buildControls = (props) => (
    <div className="BuildControls">
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} 
            />
        ))}
    </div>
);

export default buildControls;