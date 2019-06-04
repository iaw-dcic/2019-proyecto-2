import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'

const Header = () => (
    <Navbar className="Navbar" expand="lg" bg="dark" variant="dark">
        <Link to="/">
            <Navbar.Brand>Inicio</Navbar.Brand>
        </Link>
        <Link to="/misCreaciones">
            <Navbar.Brand>Mis creaciones</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

        <Navbar.Brand href="/login">Iniciar Sesion</Navbar.Brand>

        <Navbar.Brand href="/register">Registrarme</Navbar.Brand>
        </Navbar.Collapse>
    </Navbar>
)

export default Header