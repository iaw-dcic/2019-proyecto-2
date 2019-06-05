import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Team from './Team'

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: localStorage.getItem('team') ? JSON.parse(localStorage.getItem('team')) : [],
            quarters: localStorage.getItem('quarters') ? JSON.parse(localStorage.getItem('quarters')) : [],
            semis: localStorage.getItem('semis') ? JSON.parse(localStorage.getItem('semis')) : [],
            finals: localStorage.getItem('finals') ? JSON.parse(localStorage.getItem('finals')) : [],
            champion: localStorage.getItem('champion') ? JSON.parse(localStorage.getItem('champion')) : [],
            showButtonSave: false,
            predictions: [],
            name: null,
            predictionid : null,
        };
        this.handleBrackets = this.handleBrackets.bind(this);
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
                    predictionid: response.data.id,
                    quarters: [],
                    semis: [],
                    finals: [],
                    champion: [],
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


    async onClickDelete(idd){
        let vm = this;
            let user = localStorage.getItem('api-token');
            axios.post('/api/prediction/delete', {id: idd}, { headers: {"Authorization" : `Bearer ${user}`} })
            .then(function (response) {
                console.log(response)
                vm.predictionsFetch()
            }).catch(function (error){
                console.log(error.response)
            })
            
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

    handleBrackets(index, item, statex, state_name) {
        let tsize;
       /* switch(state_name) {
            case 'team':
                tsize= 16;
                break;
            case 'quarters':
                tsize= 8;
                break;
            case 'semis':
                tsize= 4;
                break;
            case 'finals':
                tsize= 2;
                break;
        }*/

        
        var arr = statex;
        const new_index = index % 2 == 0 ? index : index-1

        //if(arr.length<tsize) {

            if(typeof arr[new_index/2] === 'undefined') {
                arr[Math.floor(new_index/2)] = {name: item.name}
                this.setState({
                    [state_name]: arr
                });
                this.saveToStorage()
            }
        //}
        
        
    }

    saveToStorage() {

        localStorage.setItem('team', JSON.stringify(this.state.team));
        localStorage.setItem('quarters', JSON.stringify(this.state.quarters));
        localStorage.setItem('semis', JSON.stringify(this.state.semis));
        localStorage.setItem('finals', JSON.stringify(this.state.finals));
        localStorage.setItem('champion', JSON.stringify(this.state.champion));

    }
   
    render() {
        const vm = this
        const round16 =  this.state.team.map(function(item, index)  {
            return <button className="team-item btn btn-primary" onClick={() => {vm.handleBrackets(index, item, vm.state.quarters, 'quarters') }} key={index}>{item.name}</button>
        })

        const quarters =  this.state.quarters.map(function(item, index) {
            return  <button className="team-item btn btn-primary" onClick={() => {vm.handleBrackets(index, item, vm.state.semis, 'semis')} } key={index}>{item.name}</button>
        })

        const semis =  this.state.semis.map(function(item, index) {
            return  <button className="team-item btn btn-primary" onClick={() => {vm.handleBrackets(index, item, vm.state.finals, 'finals')} } key={index}>{item.name}</button>
        })

        const finals =  this.state.finals.map(function(item, index) {
            return  <button className="team-item btn btn-primary" onClick={() => {vm.handleBrackets(index, item, vm.state.champion, 'champion')} } key={index}>{item.name}</button>
        })

        const champion =  this.state.champion.map(function(item, index) {
            return  <button className="team-item btn btn-primary"  key={index}>{item.name}</button>
        })

        const predictions =  this.state.predictions.map(function(item, index) {
            return  (
                <tr>
                    <th>{item.name}</th>
                    <th>{item.created_at}</th>
                    <th><button  type="button" onClick={() => {vm.onClickDelete(item.id) }} className="btn btn-danger btn-sm ml-3" >Borrar</button></th>
                </tr>
            )
        })
        
        const saveButton = this.state.showButtonSave ? 
            (<button onClick={() => {this.onClickSaveBracket() }} className="btn btn-primary ml-3">Guardar</button>) : (<div></div>)

        return (
            
            <section id="bracket">
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
                <div className="tournament-brackets">
                    <ul className="bracket bracket-1">
                        
                        {round16}
                    </ul>  
                    <ul className="bracket bracket-2">
                        {quarters}
                    </ul>  
                    <ul class="bracket bracket-3">
                        {semis}
                    </ul>  
                    <ul className="bracket bracket-4">
                        {finals}
                    </ul>  

                    <ul className="bracket bracket-5">
                        {champion}
                    </ul>  
                </div>

            </section>
    
        );
    }

    componentDidMount(){
        var vm = this
        axios.get('/api/team')
        .then(function (response) {
            vm.setState({
               team: response.data
              });
              console.log(response.data)
    
        }).catch(function (error){
            console.log(error.response)
        })
        this.predictionsFetch()
    }

    
        
}
