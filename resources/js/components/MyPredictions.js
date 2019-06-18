
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MyPredictions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButtonSave: false,
            predictions: [],
            name: null,
            predictionid : null,
        };
    }

    async onClickSaveBracket() {
        let vm = this;
        let user = localStorage.getItem('api-token');

        let quarters = localStorage.getItem('quarters');
        let semis = localStorage.getItem('semis');
        let finals = localStorage.getItem('finals');
        let champion = localStorage.getItem('champion');

        axios.post('/api/match', 
        {
            quarters: quarters,
            semis: semis,
            finals: finals,
            champion: champion,
            prediction_id: vm.state.predictionid
        }, 
        { headers: {"Authorization" : `Bearer ${user}`} })
        .then(function (response) {
            console.log(response)
            vm.predictionsFetch()
            vm.setState({
                showButtonSave: false
            });
        }).catch(function (error){
            console.log(error.response)
        })
            
       
    }

    async onClickCreate(){
        let name = prompt("Ingresa el nombre del Pronóstico", "");
        let vm = this;
        if(name != null && name != ""){
            await this.setState({
                name : name,
            })
            let user = localStorage.getItem('api-token');
            axios.post('/api/prediction', {name: vm.state.name}, { headers: {"Authorization" : `Bearer ${user}`} })
            .then(function (response) {
                console.log(response)
                vm.predictionsFetch()
                vm.setState({
                    showButtonSave: true,
                    predictionid: response.data.id
                });
                localStorage.removeItem('quarters');
                localStorage.removeItem('semis');
                localStorage.removeItem('finals');
                localStorage.removeItem('champion');
            }).catch(function (error){
                console.log(error.response)
            })
            
        }
    }

    predictionsFetch() {
        var vm = this
        let user = localStorage.getItem('api-token');
        
        axios.get('/api/prediction', { headers: {"Authorization" : `Bearer ${user}`} })
        .then(function (response) {
            vm.setState({
               predictions: response.data,
              });
              console.log(response.data)
    
        }).catch(function (error){
            console.log(error.response)
        })
    }

    componentDidMount() {
        this.predictionsFetch()
    }

    render() {
        const predictions =  this.state.predictions.map(function(item, index) {
            return  (
                <tr>
                    <th>{item.name}</th>
                    <th>{item.created_at}</th>
                    <th><button  type="button" className="btn btn-primary btn-sm ml-3" >Ver</button></th>
                    <th><button  type="button" className="btn btn-danger btn-sm ml-3" >Borrar</button></th>
                </tr>
            )
        })
        
        const saveButton = this.state.showButtonSave ? 
            (<button onClick={() => {this.onClickSaveBracket() }} className="btn btn-primary ml-3">Guardar</button>) : (<div></div>)

        return (

        <div className="container"> 
            <div className="row justify-content-center mt-5">
                <div class="table-responsive-md">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Mis Pronósticos</th> 
                                <th scope="col">Fecha de creación</th>
                                <th scope="col" className="thbtnsize"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {predictions}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div class="col-md-12 text-center">
                    <button onClick={() => {this.onClickCreate() }} className="btn btn-primary ml-3">Crear Pronóstico</button>
                   {saveButton}
                </div>
            </div>
            

        </div>
        );
    }
}