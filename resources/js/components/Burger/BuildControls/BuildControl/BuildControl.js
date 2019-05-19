import React from 'react';


const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button 
            className="Less"
            onClick={props.removed} 
            disabled={props.disabled}>
            Menos
        </button>
        <button 
            className="More"
            onClick={props.added}>
            Más
        </button>
    </div>
);

export default buildControl;