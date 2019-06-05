import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import Navbar from './Navbar'
import Pronostico from './Pronostico'

export default class TodoApp extends Component {

    state = { 
        pronosticos: [],
    };

    render() {
        var i = "";
        var { pronosticos } = this.state;
        if (pronosticos != null) {
            {
                i = pronosticos.map((pronostico, i) => (
                    <option key={i}>
                        {pronostico.id}
                    </option>
                ))
            }
}

      return (
        
        <div>
            <Navbar />
            
            <div className="container">
            <button type="button" className="btn btn-outline-primary btn-block" onClick={(e) => this.getPronosticos()} > Ver Pronosticos</button>
                <div className="form-group">
                    <label className="texto">Selecciona el pronóstico a ver:</label>
                    <select className="form-control" id="selectBox" onClick={(e) => this.getPronosticos()}>
                        <option> </option>
                        {i}

                    </select>
                </div>
                <button type="button" className="btn btn-outline-primary btn-block" onClick={(e) => this.handleClick()} >Crear Nuevo Pronostico</button>
            </div>
        </div>
      );
    }

    getPronosticos = (e) => {
        fetch('http://127.0.0.1:8000/api/getPronosticos')
            .then(response => response.json())
            .then(json => {
                if(json != null)
                    this.setState({
                        pronosticos: json.pronosticos
                     });
            });
            console.log(this.state.pronosticos);
    }
    handleClick = (e) => {
        fetch('http://127.0.0.1:8000/api/newPronostico')
            .then(response => response.json())
            .then(json => {
                if(json != null)
                    this.setState({
                        pronosticos: json.pronosticos
                    });
            });
            console.log(this.state.pronosticos);
        
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