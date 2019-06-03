import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import axios from 'axios';

export default class Edit extends Component {

    constructor(props){
        super(props);
        this.onChangeProdeName = this.onChangeProdeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            prode_name:''
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/prode/edit/'+this.props.match.params.id)
        .then(response=>{
            this.setState({prode_name:response.data.name});
        });
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
        axios.put('http://127.0.0.1:8000/api/prode/update/'+this.props.match.params.id,prode)
        .then(res=>Console.log(res.data));
    }

    render () {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <div class="form-group">
                    <label for="prode_name">Nombre del prode</label>
                    <input type="text" 
                    class="form-control" 
                    id="prode_name" 
                    value={this.state.prode_name}
                    onChange={this.onChangeProdeName}
                    placeholder="Enter prode" />
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
        </div>
    )
    }
}