import React, { Component } from 'react';
import { Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import ReactDOM from 'react-dom';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: true };
    }

    render() {
        let navbarOptions;
        if (this.state.isLoggedIn) {
            navbarOptions = this.renderNavbarUser();
        }
        else {
            navbarOptions = this.renderNavbarGuest();
        }

        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Shirt designer</Navbar.Brand>
                <Nav className="mr-auto">

                </Nav>
                {navbarOptions}
            </Navbar>
        );
    }

    renderNavbarUser() {
        return (
            <React.Fragment>
                <Form inline>
                    <NavDropdown title="User" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Form>
            </React.Fragment>
        );
    }

    renderNavbarGuest() {
        return (
            <React.Fragment>
                <Form inline>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Form>
                <Form inline>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Form>
            </React.Fragment>
        );
    }
}
