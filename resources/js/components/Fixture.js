import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export default class Fixture extends Component {
    constructor(){
      super();
      this.state={
        ganador1:"",
        ganador2:"",
        ganador3:"",
        ganador4:"",
        ganador5:"",
        ganador6:"",
        ganador7:""
      };
    }   
    render() {
        return (           
                  <div class="bracket">
                    <section class="round quarterfinals">
                      <div class="winners">
                        <div class="matchups">
                          <div class="matchup">
                            <div class="participants">
                              <div class="participant">
                                  <button type="button" class="btn" onClick={ ()=>{this.setState({ganador1:"Brazil"})}}>GANA</button> 
                                  <span>Brazil</span>
                              </div>
                              <div class="participant">
                                <button type="button" class="btn" onClick={ ()=>{this.setState({ganador1:"Colombia"})}}>GANA</button>
                              <span>Colombia</span></div>
                            </div>
                          </div>
                          <div class="matchup">
                            <div class="participants">
                              <div class="participant">
                                <button type="button" class="btn" onClick={ ()=>{this.setState({ganador2:"Chile"})}}>GANA</button>
                              <span>Chile</span></div>
                              <div class="participant">
                                  <button type="button" class="btn"  onClick={ ()=>{this.setState({ganador2:"Paraguay"})}}>GANA</button>
                              <span>Paraguay</span></div>
                            </div>
                          </div>
                        </div>
                        <div class="connector">
                          <div class="merger"></div>
                          <div class="line"></div>
                        </div>
                      </div>
                      <div class="winners">
                        <div class="matchups">
                          <div class="matchup">
                            <div class="participants">
                              <div class="participant">
                                <button type="button" class="btn"  onClick={ ()=>{this.setState({ganador3:"Argentina"})}}>GANA</button>
                              <span>Argentina</span></div>

                              <div class="participant">
                                  <button type="button" class="btn"  onClick={ ()=>{this.setState({ganador3:"Uruguay"})}}>GANA</button>
                              <span>Uruguay</span></div>
                            </div>
                          </div>
                          <div class="matchup">
                            <div class="participants">
                              <div class="participant">
                                  <button type="button" class="btn"  onClick={ ()=>{this.setState({ganador4:"Venezuela"})}}>GANA</button>
                              <span>Venezuela</span></div>
                              <div class="participant">
                                    <button type="button" class="btn"   onClick={ ()=>{this.setState({ganador4:"Peru"})}}>GANA</button>
                              <span>Peru</span></div>
                            </div>
                          </div>
                        </div>
                        <div class="connector">
                          <div class="merger"></div>
                          <div class="line"></div>
                        </div>
                      </div>
                    </section>


                    <section class="round semifinals">
                      <div class="winners">
                        <div class="matchups">
                          <div class="matchup">
                            <div class="participants">
                              <div class="participant">
                              <button type="button" class="btn"   onClick={ ()=>{this.setState({ganador5:this.state.ganador1})}}>GANA</button>
                              <span>
                              {this.state.ganador1}
                              </span></div>
                              <div class="participant">
                              <button type="button" class="btn"   onClick={ ()=>{this.setState({ganador5:this.state.ganador2})}}>GANA</button>
                              <span>
                              {this.state.ganador2}
                              </span></div>
                            </div>
                          </div>
                          <div class="matchup">
                            <div class="participants">
                              <div class="participant">
                              <button type="button" class="btn"   onClick={ ()=>{this.setState({ganador6:this.state.ganador3})}}>GANA</button>
                              <span>
                              {this.state.ganador3}
                              </span></div>
                              <div class="participant">
                              <button type="button" class="btn"   onClick={ ()=>{this.setState({ganador6:this.state.ganador4})}}>GANA</button>
                              <span>
                              {this.state.ganador4}
                              </span></div>
                            </div>
                          </div>
                        </div>
                        <div class="connector">
                          <div class="merger"></div>
                          <div class="line"></div>
                        </div>
                      </div>
                    </section>
                    

                    <section class="round finals">
                      <div class="winners">
                        <div class="matchups">
                          <div class="matchup">
                            <div class="participants">
                              <div class="participant">
                              <button type="button" class="btn"   onClick={ ()=>{this.setState({ganador7:this.state.ganador5})}}>GANA</button>
                              <span>
                              {this.state.ganador5}
                              </span></div>
                              <div class="participant">
                              <button type="button" class="btn"   onClick={ ()=>{this.setState({ganador7:this.state.ganador6})}}>GANA</button>
                              <span>
                              {this.state.ganador6}
                              </span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                 

                  <section class="round finals">
                      <div class="winners">
                        <div class="matchups">
                          <div class="matchup">
                            <div class="participants">
                              <div class="participant winner">
                              <span>
                              {this.state.ganador7}
                              </span></div>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>



            );
    }
}



