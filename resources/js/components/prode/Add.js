import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import axios from 'axios';

export default class Add extends Component {

    constructor(){
        super();
        this.onChangeProdeName = this.onChangeProdeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            prode_name:''
        }
    }

    onChangeProdeName(e){
        this.setState({
            prode_name:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const prode ={
            prode_name : this.state.prode_name
        }
        axios.post('http://127.0.0.1:8000/api/prode/store',prode)
        .then(res=>Console.log(res.data));
    }

    render () {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="prode_name">Nombre del prode</label>
                    <input type="text" 
                    className="form-control" 
                    id="prode_name" 
                    value={this.state.prode_name}
                    onChange={this.onChangeProdeName}
                    placeholder="Enter prode" />
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
    }
}