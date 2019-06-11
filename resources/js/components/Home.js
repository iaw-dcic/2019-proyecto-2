import React, { Component } from 'react';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }
  
    routeChange() {
        let path = '/prodes/create';
        this.props.history.push(path);
      }


    componentDidMount(){
        //get equipos de la bd
        let  axios = require('axios');
        //obtengo el token del usr
        var token = document.head.querySelector('meta[name="user-token"]');
        //uso Bearer
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.content; 
        //realizo el delete
        axios.get(`/api/equipos`).then( 
            (response) => {
              response.data.map((equipo)=> {
                localStorage.setItem(equipo.id,JSON.stringify(equipo));
              })
            });

    }


    render() {
        return (
            <div className="container" >
                   
            <button className="btn btn-success btnNuevoProde"  onClick={this.routeChange}> Crear Nuevo Prode</button>
                    
            <h1 className="msjBienvenida">Bienvenido!</h1>
               
            </div>
        )
    }
}
