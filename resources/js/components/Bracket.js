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
            champion: localStorage.getItem('champion') ? JSON.parse(localStorage.getItem('champion')) : []
        };
        this.handleBrackets = this.handleBrackets.bind(this);
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
            return <button className="team-item" onClick={() => {vm.handleBrackets(index, item, vm.state.quarters, 'quarters') }} key={index}>{item.name}</button>
        })

        const quarters =  this.state.quarters.map(function(item, index) {
            return  <button className="team-item" onClick={() => {vm.handleBrackets(index, item, vm.state.semis, 'semis')} } key={index}>{item.name}</button>
        })

        const semis =  this.state.semis.map(function(item, index) {
            return  <button className="team-item" onClick={() => {vm.handleBrackets(index, item, vm.state.finals, 'finals')} } key={index}>{item.name}</button>
        })

        const finals =  this.state.finals.map(function(item, index) {
            return  <button className="team-item" onClick={() => {vm.handleBrackets(index, item, vm.state.champion, 'champion')} } key={index}>{item.name}</button>
        })

        const champion =  this.state.champion.map(function(item, index) {
            return  <button className="team-item"  key={index}>{item.name}</button>
        })

        return (
            <section id="bracket">
                <center><h2>Pronósticos Copa Libertadores 2019</h2></center>
                <div className="tournament-brackets">
                    <ul className="bracket bracket-1">
                        
                        <center><h4>Octavos de Final</h4></center>
                        {round16}
                    </ul>  
                    <ul className="bracket bracket-2">
                    <center><h4>Cuartos de Final</h4></center>
                        {quarters}
                    </ul>  
                    <ul class="bracket bracket-3">
                    <center><h4>Semifinales</h4></center>
                        {semis}
                    </ul>  
                    <ul className="bracket bracket-4">
                    <center><h4>Final</h4></center>
                        {finals}
                    </ul>  

                    <ul className="bracket bracket-5">
                    <center><h4>Campeón</h4></center>
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
    }

    
        
}
