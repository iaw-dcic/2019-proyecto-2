import React, { Component } from 'react'
import {Navbar , Nav , Button } from 'react-bootstrap';


export default class NavBar extends Component {

    render () {
        return (

            <Navbar className="Navbar" expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
                        <Nav.Link href="/register">Registrarse</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
