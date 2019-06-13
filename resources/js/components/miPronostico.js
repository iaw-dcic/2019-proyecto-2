import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './Main.js';


export default class Mis_pronosticos extends Component {
    constructor(){
      super();
      
      this.state={
        
        equipos: [],        
        ganador1:"",
        ganador2:"",
        ganador3:"",
        ganador4:"",
        ganador5:"",
        ganador6:"",
        ganador7:""
      };
    } 



componentDidMount() {

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
     



        var g1="";
        var g2="";
        var g3="";
        var g4="";
        var g5="";
        var g6="";
        var g7="";
        if(localStorage.hasOwnProperty('g1'))
            g1=localStorage.getItem('g1');
        if(localStorage.hasOwnProperty('g2'))
            g2=localStorage.getItem('g2');
        
        if(localStorage.hasOwnProperty('g3'))
            g3=localStorage.getItem('g3');
        
        if(localStorage.hasOwnProperty('g4'))
            g4=localStorage.getItem('g4');
        
        if(localStorage.hasOwnProperty('g5'))
            g5=localStorage.getItem('g5');
        
        if(localStorage.hasOwnProperty('g6'))
            g6=localStorage.getItem('g6');
        
        if(localStorage.hasOwnProperty('g7'))
            g7=localStorage.getItem('g7');
        
          axios.get('/api/get_equipos').then(response => {
            this.setState({
                equipos: response.equipos,
                ganador1: response.ganador1
            })
            console.log(response.data)
          });
  

       } 






 handleChangeCuartos(i) { 
      switch (i) {
        case 0:          
        case 1:
           this.setState({ganador1:i})
            localStorage.setItem('ganador1',i);
          break;
        case 2:          
        case 3:
           this.setState({ganador2:i})           
            localStorage.setItem('ganador2',i);
          break;
        case 4:          
        case 5:
           this.setState({ganador3:i})
            localStorage.setItem('ganador3',i);
          break;
        case 6:          
        case 7:
           this.setState({ganador4:i})
            localStorage.setItem('ganador4',i);
          break;    
      
      }
    }

      handleChangeSemis(i) { 
      switch (i) {
        case 1:
          this.setState({ganador5:this.state.ganador1})
            localStorage.setItem('ganador5',this.state.ganador1);
          break;          
        case 2:
           this.setState({ganador5:this.state.ganador2})
           localStorage.setItem('ganador5',this.state.ganador2);
           break;
        case 3: 
            this.setState({ganador6:this.state.ganador3})
            localStorage.setItem('ganador5',this.state.ganador3);
            break;         
        case 4:
          this.setState({ganador6:this.state.ganador4})
          localStorage.setItem('ganador5',this.state.ganador4);
          break;    
      
        }
      }

      handleChangeFinal(i) { 
      switch (i) {
        case 5:
          this.setState({ganador7:this.state.ganador5})
          localStorage.setItem('ganador7',this.state.ganador5);
          break;          
        case 6:
           this.setState({ganador7:this.state.ganador6})
           localStorage.setItem('ganador7',this.state.ganador6);
          break;
      }

    }
      handleChangeGuardar(event) {
        try {
            axios.post('/api/editar_pronostico', {
              equipos: this.state.equipos,        
              ganador1:this.state.ganador1,
              ganador2:this.state.ganador2,
              ganador3:this.state.ganador3,
              ganador4:this.state.ganador4,
              ganador5:this.state.ganador5,
              ganador6:this.state.ganador6,
              ganador7:this.state.ganador7

            }).then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
        catch(event){
            console.log('Axios request failed',event);
        }
    }
  



render() {
        return (
          
                  
                  <div className="bracket">
                    <section className="round quarterfinals">
                      <div className="winners">
                        <div className="matchups">
                          <div className="matchup">
                            <div className="participants">
                              <div className="participant">
                                   
                                  <button type="button" className="btn" onClick={(event) => this.handleChangeCuartos(0)}>GANA</button> 
                                  <span>Brazil</span>
                              </div>
                              <div className="participant">
                                <button type="button" className="btn" onClick={(event) => this.handleChangeCuartos(1)}>GANA</button>
                              <span>Colombia</span></div>
                            </div>
                          </div>
                          <div className="matchup">
                            <div className="participants">
                              <div className="participant">
                                <button type="button" className="btn" onClick={(event) => this.handleChangeCuartos(2)}>GANA</button>
                              <span>Chile</span></div>
                              <div className="participant">
                                  <button type="button" className="btn"  onClick={(event) => this.handleChangeCuartos(3)}>GANA</button>
                              <span>Paraguay</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="connector">
                          <div className="merger"></div>
                          <div className="line"></div>
                        </div>
                      </div>
                      <div className="winners">
                        <div className="matchups">
                          <div className="matchup">
                            <div className="participants">
                              <div className="participant">
                                <button type="button" className="btn"  onClick={(event) => this.handleChangeCuartos(4)}>GANA</button>
                              <span>Argentina</span></div>

                              <div className="participant">
                                  <button type="button" className="btn"  onClick={(event) => this.handleChangeCuartos(5)}>GANA</button>
                              <span>Uruguay</span></div>
                            </div>
                          </div>
                          <div className="matchup">
                            <div className="participants">
                              <div className="participant">
                                  <button type="button" className="btn"  onClick={(event) => this.handleChangeCuartos(6)}>GANA</button>
                              <span>Venezuela</span></div>
                              <div className="participant">
                                    <button type="button" className="btn"   onClick={(event) => this.handleChangeCuartos(7)}>GANA</button>
                              <span>Peru</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="connector">
                          <div className="merger"></div>
                          <div className="line"></div>
                        </div>
                      </div>
                    </section>


                    <section className="round semifinals">
                      <div className="winners">
                        <div className="matchups">
                          <div className="matchup">
                            <div className="participants">
                              <div className="participant">
                              <button type="button" className="btn"   onClick={(event) => this.handleChangeSemis(1)}>GANA</button>
                              <span>
                              {this.state.equipos[this.state.ganador1]}
                              </span></div>
                              <div className="participant">
                              <button type="button" className="btn"   onClick={(event) => this.handleChangeSemis(2)}>GANA</button>
                              <span>
                              {this.state.equipos[this.state.ganador2]}
                              </span></div>
                            </div>
                          </div>
                          <div className="matchup">
                            <div className="participants">
                              <div className="participant">
                              <button type="button" className="btn"   onClick={(event) => this.handleChangeSemis(3)}>GANA</button>
                              <span>
                              {this.state.equipos[this.state.ganador3]}
                              </span></div>
                              <div className="participant">
                              <button type="button" className="btn"   onClick={(event) => this.handleChangeSemis(4)}>GANA</button>
                              <span>
                              {this.state.equipos[this.state.ganador4]}
                              </span></div>
                            </div>
                          </div>
                        </div>
                        <div className="connector">
                          <div className="merger"></div>
                          <div className="line"></div>
                        </div>
                      </div>
                    </section>
                    

                    <section className="round finals">
                      <div className="winners">
                        <div className="matchups">
                          <div className="matchup">
                            <div className="participants">
                              <div className="participant">
                              <button type="button" className="btn"   onClick={(event) => this.handleChangeFinal(5)}>GANA</button>
                              <span>
                              {this.state.equipos[this.state.ganador5]}
                              </span></div>
                              <div className="participant">
                              <button type="button" className="btn"   onClick={(event) => this.handleChangeFinal(6)}>GANA</button>
                              <span>
                              {this.state.equipos[this.state.ganador6]}
                              </span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                 

                  <section className="round finals">
                      <div className="winners">
                        <div className="matchups">
                          <div className="matchup">
                            <div className="participants">
                              <div className="participant winner">
                              <span>
                             {this.state.equipos[this.state.ganador7]}
                              </span></div>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>



                  <button type="button" className="btn" onClick={(event) => this.handleChangeGuardar(event)}>GUARDAR</button> 

                  </div>



      

            );
    }




}