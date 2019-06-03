import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavLink, Button, Form, FormControl} from 'react-bootstrap';
import "./css/app.css";


export default class Navigation extends Component{

  render(){
    /*
    return (
      <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">SpoCtor</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Mis predicciones</Nav.Link>
            </Nav>
          </Navbar>
          </div>
      );
    }
    */

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
                      <a href="/new" className="btn icon-btn btn-success">+ Pronostico</a>
                  </ul>
                  <ul className="navbar-nav" ml-auto="">
                      <li className="nav-item">
                            <a className="nav-link" href='/logout'>Cerrar sesión</a>
                      </li>
                  </ul>

              </div >
          </nav>
      );
  }
  }
