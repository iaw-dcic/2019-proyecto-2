import React, { Component } from 'react';
import '../scriptSideNav.js'
import "./ComponentCSS/styleSidenav.css"

export default class SideBar extends Component{
    render(){
        return (
            <div id="wrapper">
            <div className="overlay"></div>
    
      
        <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <ul className="nav sidebar-nav">
            
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Submanu title <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="dropdown-header">Dropdown heading</li>
                    <li><a href="#">Submanu 1</a></li>
                    <li><a href="#">Submanu 2</a></li>
                    <li><a href="#">Submanu 3</a></li>
                    <li><a href="#">Submanu 4</a></li>
                    <li><a href="#">Submanu 5</a></li>
                  </ul>
                </li>
                
            </ul>
        </nav>
        </div>
        )
    }
}