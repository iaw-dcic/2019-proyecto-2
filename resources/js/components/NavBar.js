import React, { Component } from 'react'
import {Navbar , Nav , Button } from 'react-bootstrap';


export default class NavBar extends Component {

    render () {
        return (
            <Navbar className="Navbar" expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Navbar.Brand href="/misCreaciones">Mis Creaciones</Navbar.Brand>
                <Navbar.Toggle />
            </Navbar>
        )
    }
}
