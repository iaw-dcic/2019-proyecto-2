import React from 'react';
import burgerLogo from '../../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={burgerLogo} alt="BigBurger" />
    </div>
);

export default logo;