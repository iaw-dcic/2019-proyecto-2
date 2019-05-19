import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Armar hamburguesa</NavigationItem>
        <NavigationItem link="/">Guardar hamburguesa</NavigationItem>
    </ul>
);

export default navigationItems;