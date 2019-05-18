import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './public/css/styleSidenav.css';

class sideBar extends Component{
    render(){
        return (
            <div id="wrapper">
            <div class="overlay"></div>
    
      
        <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
            
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Submanu title <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li class="dropdown-header">Dropdown heading</li>
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
        );
    }
}