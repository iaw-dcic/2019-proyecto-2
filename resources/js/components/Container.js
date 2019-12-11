import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Container extends Component {
 
    render() {
        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item mr-2">
                        <NavLink to="/misDiseños"className="nav-link active"  >Mis diseños</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/home" className="nav-link active">Crear</NavLink>
                    </li>
                </ul>
           </div>
        );
    }
}

