import React, { Component } from 'react'
import {Navbar , Nav , Button } from 'react-bootstrap';

export default class NavBar extends Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                    <img
                            alt=""
                            src="https://img.icons8.com/plasticine/100/000000/hamburger.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                       
                        {'  BigBurger'}
                    </Navbar.Brand>

                    {
                        this.props.isAuthenticated ?
                            <Nav className="navbar-nav ml-auto">
                                <Nav.Link href="/">Inicio</Nav.Link>
                                <Nav.Link href="/savedBurgers">Mis hamburguesas</Nav.Link>
                                <Nav.Link onClick={() => this.props.logout()}>Cerrar Sesión</Nav.Link>
                            </Nav>
                            :
                            <Nav className="navbar-nav ml-auto">
                                <Nav.Link href="/ingresar">Login</Nav.Link>
                                <Nav.Link href="/register">Registrarse</Nav.Link>
                            </Nav>
                    }

                </Navbar>
            </>
        )

    }
}
