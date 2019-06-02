import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import Navbar from './Navbar'
import Pronostico from './Pronostico'

export default class TodoApp extends Component {

    state = { 
        idPronostico: 0
    };

    constructor(props){
        super(props);
    }

    render() {
      return (
        
        <div>
            <Navbar />
            
            <div className="container">
                <button type="button" className="btn btn-outline-primary btn-block" onClick={this.handleClick} >Crear Nuevo Pronostico</button>
                if(idPronostico!=0){
                    <Pronostico id={this.state.idPronostico}/>
                } 
            </div>
        </div>
      );
    }

    handelClick = (e) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8000/api/newPronostico')
            .then(response => response.json())
            .then(json => {
                this.setState({
                   idPronostico: json.idPronostico
                })
            });
        
    }
/*
    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/selecciones')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    items: json.items
                })
            });
        }
*/
    addItem = (newItem) => {
      this.setState(state => ({
        items: state.items.concat(newItem)
      }));
    }
  }