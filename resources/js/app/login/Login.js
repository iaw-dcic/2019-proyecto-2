import React, { Component } from "react";
import { Button, FormGroup, FormControl , FormLabel } from "react-bootstrap";
import {login} from '../api/ApiUtils';
import "./Login.css";

import localStorage from 'local-storage'

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            showingAlert: false,
        };

        this.validateForm=this.validateForm.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    async handleSubmit(event) {

        event.preventDefault();

        const response = await login(this.state.email,this.state.password);

        if(response !== 401){

            const token = response.token;

            await localStorage.set('userToken',token);
            this.props.authenticate();

        }
        else
            this.setState({ showingAlert : true })


    }

    render() {
        return (

            <div className="Login">

                <div className="text-center p-2">
                    <h2>Iniciar Sesión</h2>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" >
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" >
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>

                    <br/>

                    {
                        this.state.showingAlert ?
                            <div className={`alert alert-danger text-center ${this.state.showingAlert ? 'alert-hidden' : 'alert-hidden'}`}>
                                 Usuario o contraseña incorrecta
                            </div>
                            :
                            <>
                            </>
                    }

                    <div className="text-center">
                        <a href='/password/reset' className="">Olvidó su contraseña?</a>
                    </div>

                </form>

            </div>
        );
    }
}