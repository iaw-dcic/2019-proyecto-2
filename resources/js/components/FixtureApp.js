import React, { Component } from 'react'
import FixtureGame from './FixtureGame';
import axios from 'axios';

export default class FixtureApp extends Component {
    constructor(){
      super();
    
    this.state = { 
        teams: [],

        quarTeams: ["","","","","","","",""],

        semiTeams: ["","","",""],

        finalTeams: ["",""],

        championTeam: "none",

        fixtures: [],
        
        id: 0,

        fixtureName: "New Fixture",

        flag: 0
    }
    this.handleToQuart = this.handleToQuart.bind(this);
    this.handleToSemi = this.handleToSemi.bind(this);
    this.handleToFinal = this.handleToFinal.bind(this);
    this.handleToChamp = this.handleToChamp.bind(this);
    this.save = this.save.bind(this);
    this.search = this.search.bind(this);
    this.new = this.new.bind(this);
  }
    componentDidMount(){
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        var self = this;

        axios.get('/api/prode')
        .then(function (response) {
            self.setState({fixtures: response.data})
        })
        .catch(function (error) {
          console.log("ERROR EN EL COMPONENT DID MOUNT");
        });


          axios.get('/api/teams')
           .then(function (response) {
              self.setState({teams: response.data});
           })
          .catch(function (error) {state
             console.log("ERROR EN EL LOCALSTORAGE");
          });

          self.setState({flag: 1});
        
          if(localStorage.length != 0){
            self.setState({
              teams: localStorage.getItem('teams').split(','),
              quarTeams: localStorage.getItem('quarTeams').split(','),
              semiTeams: localStorage.getItem('semiTeams').split(','),
              finalTeams: localStorage.getItem('finalTeams').split(','),
              championTeam: localStorage.getItem('championTeam'),
              flag: 1
        });}
    }

    render() {
      if (this.state.flag != 0){
        if (this.state.id != 0){
            localStorage.clear();
        } else {
            localStorage.setItem('teams', this.state.teams);
            localStorage.setItem('quarTeams', this.state.quarTeams);
            localStorage.setItem('semiTeams', this.state.semiTeams);
            localStorage.setItem('finalTeams', this.state.finalTeams);
            localStorage.setItem('championTeam', this.state.championTeam);
        }
}
      return (
        <div className="container">             
            
            <div className="row" >
              <div className="col-sm text-center"><b>Western Conference</b></div>
              <div className="col-sm text-center" ><b>Quarter Finals</b></div>
              <div className="col-sm text-center"><b>Semifinal</b></div>
              <div className="col-sm text-center"><b>Final</b></div>    
              <div className="col-sm text-center"><b>Semifinal</b></div>
              <div className="col-sm text-center"><b>Quarter Finals</b></div>
              <div className="col-sm text-center"><b>Eastern Conference</b></div>

            </div>
              <div className="row">
                {this.createTeamsA()}
                {this.createQuarTeamsA()}           
                {this.createSemiTeamsA()}
                {this.createFinal()}
                {this.createSemiTeamsB()}
                {this.createQuarTeamsB()}  
                {this.createTeamsB()}   
            </div>     
            <br></br>
            <div className="row">
              <div className="col-sm Content border-success">
                <div className="list-group">
                  <button className="btn btn-success btn-block">My Fixtures</button>                          
                    {this.state.fixtures.map((fixture, i) =>
                    <button type="button" className="btn btn-block text-center"
                      id = {fixture.id} 
                      className="list-group-item list-group-item-action" 
                      onClick={this.search}>
                      {fixture.created_at}
                    </button>
                    )}
                </div>
              </div>
            </div>
          </div>
          
      );
    }
  
    handleToQuart = (teamName) => {
      var i=0; var index=0;
      const quarTeams = [...this.state.quarTeams];
      while(i<16){
        if(this.state.teams[i]==teamName){
          index = Math.floor(i/2);
          quarTeams[index]={...quarTeams};
          quarTeams[index]=teamName;
          this.setState({quarTeams});
        }
        i++;
      }
    }

    handleToSemi = (teamName) =>{
       var i = 0;  
       var index = 0;
       const semiTeams = [...this.state.semiTeams];
       while(i<8){
         if(this.state.quarTeams[i]===teamName){
            index = Math.floor(i/2);
            semiTeams[index]={...semiTeams};
            semiTeams[index]=teamName;
            this.setState({semiTeams});
          }
         i++;
       }
    }
    
    handleToFinal = (teamName) =>{
        var i = 0; 
        const finalTeams = [...this.state.finalTeams]; 
        while(i<4){
          if(this.state.semiTeams[i]===teamName){
            var index = Math.floor(i/2);
            finalTeams[index] = teamName;
            this.setState({finalTeams});            
          }
          i++;
        }
    }

    handleToChamp = (teamName) =>{
      const realChamp = "NBA 2019 WINNER "+teamName;
      if(this.state.championTeam =="none" && this.state.finalTeams[0]!="" && this.state.finalTeams[1]!=""){ 
        this.setState({
          championTeam: realChamp
        });
      }
    }

   
    save(){
      var self = this;
      if (self.state.id == 0){
          axios.post('/api/prode', {
              data: self.state
          }).then(function (response) {
              self.setState({
                  fixtures: response.data,
                  id: response.data[response.data.length-1]['id'],
                  fixtureName: response.data[response.data.length-1]['created_at']
              });
          }).catch(function (error) {
            console.log("ERROR EN SAVE 1: "+error);
          });

      } else {
          axios.put('/api/teams/'+this.state.id, {
              data: this.state
          }).then(function (response) {
          }).catch(function (error) {
            console.log("ERROR EN SAVE 2");
          });

      }
  }

  search(e){
      var id = e.target.id;
      var self = this;
      axios.get('/api/teams/'+id)
       .then(function (response) {
          var teams = response.data[0]['teams'].split(',');
          var quarTeams = response.data[0]['quarTeams'].split(',');
          var semiTeams = response.data[0]['semiTeams'].split(',');
          var finalTeams = response.data[0]['finalTeams'].split(',');
          var championTeam = response.data[0]['championTeam'];
          var fixtureName = response.data[0]['created_at'];

          self.setState({
            teams: teams,
            quarTeams: quarTeams,
            semiTeams: semiTeams,
            finalTeams: finalTeams,
            championTeam: championTeam,
            id: id,
            fixtureName: fixtureName
          });
       })
      .catch(function (error) {
         console.log("ERROR EN SEARCH");
      });
  }

  new(){
      this.setState({
          quarTeams: ["", "", "", "", "", "", "", ""],
          semiTeams: ["", "", "", ""],
          finalTeams: ["", ""],
          championTeam: "none",
          fixtureId: 0,
          fixtureName: "New Fixture"
      });
  }


  createTeamsA(){
    var disabled1="";     var disabled2="";     var disabled3="";     var disabled4="";

    if(this.state.quarTeams[0]!="" ) disabled1="disabled";
    if(this.state.quarTeams[1]!="" ) disabled2="disabled";
    if(this.state.quarTeams[2]!="" ) disabled3="disabled";
    if(this.state.quarTeams[3]!="" ) disabled4="disabled";

    return (<div className="col-sm" id="teamsA" >
    <FixtureGame  onClick={this.handleToQuart} key="teams1" disabled={disabled1} teams={ this.state.teams} index={0} ></FixtureGame><br></br>
    <FixtureGame  onClick={this.handleToQuart} key="teams2" disabled={disabled2} teams={ this.state.teams} index={2} ></FixtureGame><br></br>
    <FixtureGame  onClick={this.handleToQuart} key="teams3" disabled={disabled3} teams={ this.state.teams} index={4} ></FixtureGame><br></br>
    <FixtureGame  onClick={this.handleToQuart} key="teams4" disabled={disabled4} teams={ this.state.teams} index={6} ></FixtureGame>
    </div>  );
  }

  createQuarTeamsA(){
    var disabled1="";     var disabled2="";     
    
    if (this.state.quarTeams[0] == "" || this.state.quarTeams[1] == "" || this.state.semiTeams[0] != "") disabled1="disabled";
    if (this.state.quarTeams[2] == "" || this.state.quarTeams[3] == "" || this.state.semiTeams[1] != "") disabled2="disabled";

    return(
    <div className="col-sm" id="cuartosA" >
    <br></br><br></br><br></br>
    <FixtureGame onClick={this.handleToSemi} key="cuartos1" disabled={disabled1}  teams={ this.state.quarTeams} index={0} ></FixtureGame>
    <br></br><br></br><br></br><br></br><br></br>
    <FixtureGame onClick={this.handleToSemi} key="cuartos2" disabled={disabled2}  teams={ this.state.quarTeams} index={2} ></FixtureGame></div>);
  }

  createSemiTeamsA(){
    var disabled1="";
    if (this.state.semiTeams[0] == "" || this.state.semiTeams[1] == "" || this.state.finalTeams[0] != "") disabled1="disabled";

    return(
      <div className="col-sm" id="semifinalesA" >
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <FixtureGame onClick={this.handleToFinal} key="semifinal1" disabled={disabled1} teams={ this.state.semiTeams} index={0} ></FixtureGame>
      </div>);
  }

  createFinal(){
    var disabled1="";
    if (this.state.finalTeams[0] == "" || this.state.finalTeams[1] == "" || this.state.championTeam != "none") disabled1="disabled";

    return(
    <div className="col-sm" id="final">   
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <FixtureGame onClick={this.handleToChamp} key="final" disabled={disabled1} teams={ this.state.finalTeams} index={0} ></FixtureGame><br></br>
                <button className="btn btn-block btn-success "  >{this.state.championTeam == "none" ? "" : this.state.championTeam}</button><br></br>
                <button className="btn btn-success btn-block " onClick={this.save}>Save Fixture</button>
                <button className="btn btn-success btn-block " onClick={this.new}>New Fixture</button>
    </div> 
    ); 
  }

  createSemiTeamsB(){
    var disabled1="";
    if (this.state.semiTeams[2] == "" || this.state.semiTeams[3] == "" || this.state.finalTeams[1] != "") disabled1="disabled";
    return(
    <div className="col-sm" id="semifinalesB" >
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <FixtureGame onClick={this.handleToFinal} key="semifinal2" disabled={disabled1} teams={ this.state.semiTeams} index={2} ></FixtureGame>
  </div>);
  }

  createQuarTeamsB(){
    var disabled1="";     var disabled2="";     
    
    if (this.state.quarTeams[4] == "" || this.state.quarTeams[5] == "" || this.state.semiTeams[2] != "") disabled1="disabled";
    if (this.state.quarTeams[6] == "" || this.state.quarTeams[7] == "" || this.state.semiTeams[3] != "") disabled2="disabled";

    return(
    <div className="col-sm" id="cuartosB" >
        <br></br><br></br><br></br>
      <FixtureGame onClick={this.handleToSemi} key="cuartos3" disabled={disabled1} teams={ this.state.quarTeams} index={4} ></FixtureGame>
      <br></br><br></br><br></br><br></br><br></br>
      <FixtureGame onClick={this.handleToSemi} key="cuartos4" disabled={disabled2} teams={ this.state.quarTeams} index={6} ></FixtureGame>
    </div> );
  }

  createTeamsB(){
    var disabled1="";     var disabled2="";     var disabled3="";     var disabled4="";

    if(this.state.quarTeams[4]!="" ) disabled1="disabled";
    if(this.state.quarTeams[5]!="" ) disabled2="disabled";
    if(this.state.quarTeams[6]!="" ) disabled3="disabled";
    if(this.state.quarTeams[7]!="" ) disabled4="disabled";
    return(
    <div className="col-sm" id="teamsB" >
    <FixtureGame  onClick={this.handleToQuart} key="teams5" disabled={disabled1} teams={ this.state.teams} index={8} ></FixtureGame><br></br>
    <FixtureGame  onClick={this.handleToQuart} key="teams6" disabled={disabled2} teams={ this.state.teams} index={10} ></FixtureGame><br></br>
    <FixtureGame  onClick={this.handleToQuart} key="teams7" disabled={disabled3} teams={ this.state.teams} index={12} ></FixtureGame><br></br>
    <FixtureGame  onClick={this.handleToQuart} key="teams8" disabled={disabled4} teams={ this.state.teams} index={14} ></FixtureGame>
    </div>  );
  }
  
}
  