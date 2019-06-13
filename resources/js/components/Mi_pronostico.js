import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './Main.js';


export default class Mi_pronostico extends Component {
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
        ganador7:"",
        modificar:""
      };
    } 



componentDidMount() {

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
           
        
          axios.get('/api/get_equipos').then(response => {
            this.setState({
                equipos: response.data,
            })
            console.log(response.data)
          });
          
           if(localStorage.getItem('modificar')!=null){
                 this.state.modificar= localStorage.getItem('modificar');
                 localStorage.clear();
                 axios.get('/api/get_pronostico/'+this.state.modificar).then(response => {
                  this.setState({
                      ganador1:response.data[0]-1,
                      ganador2:response.data[1]-1,
                      ganador3:response.data[2]-1,
                      ganador4:response.data[3]-1,
                      ganador5:response.data[4]-1,
                      ganador6:response.data[5]-1,
                      ganador7:response.data[6]-1,
                      
                  })
                  console.log(response.data)
                  console.log(this.state)
                });
            }     
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
            localStorage.setItem('ganador6',this.state.ganador3);
            break;         
        case 4:
          this.setState({ganador6:this.state.ganador4})
          localStorage.setItem('ganador6',this.state.ganador4);
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
        let consistente=false;
        if(this.state.ganador1==0 | this.state.ganador1==1 ){
          if(this.state.ganador2==2 | this.state.ganador2==3 ){
            if(this.state.ganador3==4 | this.state.ganador3==5 ){
               if(this.state.ganador4==6 | this.state.ganador4==7 ){
                  if(this.state.ganador5==this.state.ganador1 | this.state.ganador5==this.state.ganador2 ){
                    if(this.state.ganador6==this.state.ganador3 | this.state.ganador6==this.state.ganador4 ){
                       if(this.state.ganador7==this.state.ganador5 | this.state.ganador7==this.state.ganador6 ){
                         consistente=true; 
                        try {
                            var string="";
                            if(this.state.modificar!=""){
                                string='editar_pronostico';
                            } else{
                                string='crear_pronostico';    
                             }   
                            axios.post('/api/'+string, {
                              equipos: this.state.equipos,        
                              ganador1:this.state.ganador1,
                              ganador2:this.state.ganador2,
                              ganador3:this.state.ganador3,
                              ganador4:this.state.ganador4,
                              ganador5:this.state.ganador5,
                              ganador6:this.state.ganador6,
                              ganador7:this.state.ganador7,
                              mod:this.state.modificar

                            }).then(res => {
                                console.log(res);
                                console.log(res.data);
                            })
                        }
                        catch(event){
                            console.log('Axios request failed',event);
                        }
        }}}}}}}
          if(!consistente){
          alert('¡¡PRONOSTICO INCONSISTENTE!!  Reviselo y vuelva a guardar');
        }else{
            alert('Su pronostico fue guardado exitosamente');
          }

        window.location.reload();  
        
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
                                  <span>{this.state.equipos[0]}</span>
                              </div>
                              <div className="participant">
                                <button type="button" className="btn" onClick={(event) => this.handleChangeCuartos(1)}>GANA</button>
                              <span>{this.state.equipos[1]}</span></div>
                            </div>
                          </div>
                          <div className="matchup">
                            <div className="participants">
                              <div className="participant">
                                <button type="button" className="btn" onClick={(event) => this.handleChangeCuartos(2)}>GANA</button>
                              <span>{this.state.equipos[2]}</span></div>
                              <div className="participant">
                                  <button type="button" className="btn"  onClick={(event) => this.handleChangeCuartos(3)}>GANA</button>
                              <span>{this.state.equipos[3]}</span></div>
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
                              <span>{this.state.equipos[4]}</span></div>

                              <div className="participant">
                                  <button type="button" className="btn"  onClick={(event) => this.handleChangeCuartos(5)}>GANA</button>
                              <span>{this.state.equipos[5]}</span></div>
                            </div>
                          </div>
                          <div className="matchup">
                            <div className="participants">
                              <div className="participant">
                                  <button type="button" className="btn"  onClick={(event) => this.handleChangeCuartos(6)}>GANA</button>
                              <span>{this.state.equipos[6]}</span></div>
                              <div className="participant">
                                    <button type="button" className="btn"   onClick={(event) => this.handleChangeCuartos(7)}>GANA</button>
                              <span>{this.state.equipos[7]}</span></div>
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



                  <button type="button" className="btn" onClick={(event) => this.handleChangeGuardar()}>GUARDAR</button> 

                  </div>



      

            );
    }




}