import React from 'react';

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <a 
            href={props.link} 
            className={props.active ? "Active" : null}>{props.children}</a>
    </li>
);

export default navigationItem;