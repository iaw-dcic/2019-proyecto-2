import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


export default class Header extends Component {

    render () {
        return (
            <Navbar className="Navbar" expand="lg" bg="dark" variant="dark">
                <Link to='/'  >
                    <Navbar.Brand >Inicio</Navbar.Brand>
                </Link>
                <Link to='/misCreaciones' >
                    <Navbar.Brand>Mis Creaciones</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
            </Navbar>
        )
    }
}