import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Armar hamburguesa</NavigationItem>
        <NavigationItem link="/savedBurgers">Mis hamburguesas</NavigationItem>
        <NavigationItem link="/logout">Cerrar sesion</NavigationItem>
    </ul>
);

export default navigationItems;