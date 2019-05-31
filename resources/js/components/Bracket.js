import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Team from './Team'

export default class Example extends Component {
    render() {
        return (
            <section id="bracket">
                <div class="container">
                    <div class="split split-one">
                        <div class="round round-one current">
                            <div class="round-details">Round 1<br/><span class="date">March 16</span></div>

                            <ul class="matchup">
                                <li class="team team-top">
                                <div class="row">
                                        <Team id="1"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                                <li class="team team-bottom">
                                    <div class="row">
                                        <Team id="2"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">
                                <div class="row">
                                        <Team id="3"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                                <li class="team team-bottom">
                                    <div class="row">
                                        <Team id="4"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">
                                <div class="row">
                                        <Team id="5"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                                <li class="team team-bottom">
                                    <div class="row">
                                        <Team id="6"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">
                                <div class="row">
                                        <Team id="7"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                                <li class="team team-bottom">
                                    <div class="row">
                                        <Team id="8"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>

                        <div class="round round-two">
                            <div class="round-details">Round 2<br/><span class="date">March 18</span></div>			
                            <ul class="matchup">
                                <li class="team team-top">
                                    <Team id=""/>
                                    <input type="number" class="score"/>
                                </li>
                                <li class="team team-bottom">
                                    <Team id=""/>
                                    <input type="number" class="score"/>
                                </li>
                            </ul>	
                            <ul class="matchup">
                                <li class="team team-top">
                                    <Team id=""/>
                                    <input type="number" class="score"/>
                                </li>
                                <li class="team team-bottom">
                                    <Team id=""/>
                                    <input type="number" class="score"/>
                                </li>
                            </ul>	
                        </div>
                        
                        <div class="round round-three">
                            <div class="round-details">Round 3<br/><span class="date">March 22</span></div>			
                            <ul class="matchup">
                                <li class="team team-top">
                                    <Team id=""/>
                                    <input type="number" class="score"/>
                                </li>
                                <li class="team team-bottom">
                                    <Team id=""/>
                                    <input type="number" class="score"/>
                                </li>
                            </ul>
                        </div>		
                    </div> 

                    <div class="champion">
                        <div class="final">
                            <i class="fa fa-trophy"></i>
                            <div class="round-details">championship <br/><span class="date">March 30 - Apr. 1</span></div>		
                            <ul class ="matchup championship">
                                <li class="team team-top">&nbsp;<input type="number" class="score"/></li>
                                <li class="team team-bottom">&nbsp;<input type="number" class="score"/></li>
                            </ul>
                        </div>
                    </div>


                    <div class="split split-two">
                        <div class="round round-three">
                            <div class="round-details">Round 3<br/><span class="date">March 22</span></div>						
                            <ul class="matchup">
                                <li class="team team-top">&nbsp;<input type="number" class="score"/></li>
                                <li class="team team-bottom">&nbsp;<input type="number" class="score"/></li>
                            </ul>	
                        </div>

                        <div class="round round-two">
                            <div class="round-details">Round 2<br/><span class="date">March 18</span></div>						
                            <ul class="matchup">
                                <li class="team team-top">&nbsp;<input type="number" class="score"/></li>
                                <li class="team team-bottom">&nbsp;<input type="number" class="score"/></li>
                            </ul>	
                            <ul class="matchup">
                                <li class="team team-top">&nbsp;<input type="number" class="score"/></li>
                                <li class="team team-bottom">&nbsp;<input type="number" class="score"/></li>
                            </ul>	
                        </div>
                        <div class="round round-one current">
                            <div class="round-details">Round 1<br/><span class="date">March 16</span></div>
                            <ul class="matchup">
                                <li class="team team-top">
                                <div class="row">
                                        <Team id="9"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                                <li class="team team-bottom">
                                    <div class="row">
                                        <Team id="10"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">
                                <div class="row">
                                        <Team id="11"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                                <li class="team team-bottom">
                                    <div class="row">
                                        <Team id="12"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">
                                <div class="row">
                                        <Team id="13"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                                <li class="team team-bottom">
                                    <div class="row">
                                        <Team id="14"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">
                                <div class="row">
                                        <Team id="15"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                                <li class="team team-bottom">
                                    <div class="row">
                                        <Team id="16"/>
                                        <div class="col-6">
                                            <input type="number" class="score" class="w-100"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>			
                        </div>				
                    </div>
            </div>
        </section>
        );
    }
}
