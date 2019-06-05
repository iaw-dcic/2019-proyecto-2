import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavLink, Button, Form, FormControl} from 'react-bootstrap';
import "./css/app.css";


export default class Navigation extends Component{

  render(){
  //se utilizo el navbar de laravel

      return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <a className="navbar-brand" href="/">Spoctor</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <a className="nav-link" href="/home">Home</a>
                      <a className="nav-link" href="#">Fixture</a>
                      <a className="nav-link" href="/teams">Equipos</a>
                  </ul>
              </div >
          </nav>
      );
  }
  }
