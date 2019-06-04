import React, { Component } from 'react';
import { Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import Logo from './img/logox64.png'
import ReactDOM from 'react-dom';


export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let navbarOptions;
        if (this.props.user_info.isLoggedIn) {
            navbarOptions = this.renderNavbarUser();
        }
        else {
            navbarOptions = this.renderNavbarGuest();
        }
        return (
            <Navbar bg="dark" variant="dark">
                <img src={Logo} />
                <Navbar.Brand href="/">&nbsp; ShirtDesigner</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/readme">ReadMe</Nav.Link>
                </Nav>
                {navbarOptions}
            </Navbar>
        );
    }

    renderNavbarUser() {
        return (
            <React.Fragment>
                <Form inline>
                    <NavDropdown title={this.props.user_info.name} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#" onClick={this.handleLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Form>
            </React.Fragment>
        );
    }

    handleLogout = () => {
        event.preventDefault();
        document.getElementById('logout-form').submit();
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
