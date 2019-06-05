import React, { Component } from 'react'
import {Navbar , Nav , Button } from 'react-bootstrap';


export default class NavBar extends Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
                <Navbar className="Navbar" expand="lg" bg="dark" variant="dark">
                    {
                        this.props.isAuthenticated ?
                            <Nav className="navbar-nav ml-auto">
                                <Nav.Link href="/">Inicio</Nav.Link>
                                <Nav.Link href="/misCreaciones">Mis Creaciones</Nav.Link>
                                <Nav.Link onClick={() => this.props.logout()}>Cerrar Sesión</Nav.Link>
                            </Nav>
                            :
                            <Nav className="navbar-nav ml-auto">
                                <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
                                <Nav.Link href="/register">Registrarse</Nav.Link>
                            </Nav>
                    }
                </Navbar>
        )
    }
}
