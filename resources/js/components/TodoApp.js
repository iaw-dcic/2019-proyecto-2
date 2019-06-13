import React, { Component } from 'react'
import Navbar from './Navbar'
import Pronostico from './Pronostico'

export default class TodoApp extends Component {

    state = { 
        isLoading: true,
        pronosticos: [],
        pronoSeleccionado: 0
    };

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            pronosticos: [],
            pronoSeleccionado: -1
        }
    }

    render() {
        if(this.state.isLoading){
            return (
                <div>
                    <Navbar />
                    <div className="container text-center">
                        Cargando..
                    </div>
                </div>

            )
        }else{
        var i = "";
        var listaPronos= this.state.pronosticos;
        if (listaPronos != null) {
            {
                i = listaPronos.map((pronostico, i) => (
                    <option key={i}>
                        Pronostico #{pronostico.id}
                    </option>
                ))
            }
}

      return (
        
        <div>
            <Navbar />
            
            <div className="container colorFondo" id="listaPronosticos">
                <div className="form-group">
                    <label className="text-center">Selecciona el pronóstico a ver</label>
                    <select className="form-control" id="selectBox">
                        {i}
                    </select>
                </div>
                <button type="button" className="btn btn-outline-primary btn-block" onClick={(e) => this.handlePronostico()} >Cargar Pronostico</button>
                <button type="button" className="btn btn-outline-primary btn-block" onClick={(e) => this.handleClick()} >Crear Nuevo Pronostico</button>
            </div>

            <div className="container ocultar colorFondo" id="pronosticoSeleccionado">
                <Pronostico idPronostico={this.state.pronoSeleccionado}/>
            </div>
        </div>
        );}
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/getPronosticos')
            .then(response => response.json())
            .then(json => {
                if(json != null){
                    this.setState({
                        isLoading: false,
                        pronosticos: json.item
                     });
                    }
            });
    }
    handleClick = (e) => {
        fetch('http://127.0.0.1:8000/api/newPronostico')
            .then(response => response.json())
            .then(json => {
                if(json != null)
                    this.setState({
                        isLoading: false,
                        pronosticos: json.item
                    });
            });
        
    }

    async handlePronostico() {
        var selectBox = document.getElementById("selectBox");
        var selectedValue = selectBox.options[selectBox.selectedIndex].index;
        this.setState({
                pronoSeleccionado: this.state.pronosticos[selectedValue].id
        });
        document.getElementById('pronosticoSeleccionado').classList.remove("ocultar");
      }
  }