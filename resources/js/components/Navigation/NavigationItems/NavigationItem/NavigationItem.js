import React from 'react';
import {NavLink} from 'react-router-dom';

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName="NavigationItem active">{props.children}
        </NavLink>
    </li>
);

export default navigationItem;