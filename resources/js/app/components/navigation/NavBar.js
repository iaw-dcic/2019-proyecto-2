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
                            src="http://www.clipartly.com/wp-content/uploads/2017/12/Black-White-Soccer-Ball-Clipart-Png-Picture.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {'  ProdeAR'}
                    </Navbar.Brand>

                    {
                        this.props.isAuthenticated ?
                            <Nav className="navbar-nav ml-auto">
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
