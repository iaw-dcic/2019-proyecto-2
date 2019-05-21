import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AvatarComponents extends Component {

    state = {
        element1: '',
        element2: '',
        element3: ''
    }

    render() {
        return (
            <div></div>
        );
    }

    handleChange = (e) => { //Con esto y el submit de esta forma, no es necesario tener un constructor
        this.setState({text: e.target.value});
    }

    handleSubmit = (e) => { //Esto es para un formulario
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState(state => ({
            items: state.items.concat(newItem), //estos dos son estados
            text: ''
        }));
    }
}