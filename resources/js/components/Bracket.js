import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <section id="bracket">
                <div class="container">
                    <div class="split split-one">
                        <div class="round round-one current">
                            <div class="round-details">Round 1<br/><span class="date">March 16</span></div>
                            <ul class="matchup">
                                <li class="team team-top">Duke<input type="number" class="score"/></li>
                                <li class="team team-bottom">Virginia<input type="number" class="score"/></li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">Wake Forest<input type="number" class="score"/></li>
                                <li class="team team-bottom">Clemson<input type="number" class="score"/></li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">North Carolina<input type="number" class="score"/></li>
                                <li class="team team-bottom">Florida State<input type="number" class="score"/></li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">NC State<input type="number" class="score"/></li>
                                <li class="team team-bottom">Maryland<input type="number" class="score"/></li>
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
                        
                        <div class="round round-three">
                            <div class="round-details">Round 3<br/><span class="date">March 22</span></div>			
                            <ul class="matchup">
                                <li class="team team-top">&nbsp;<input type="number" class="score"/></li>
                                <li class="team team-bottom">&nbsp;<input type="number" class="score"/></li>
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
                                <li class="team team-top">Minnesota<input type="number" class="score"/></li>
                                <li class="team team-bottom">Northwestern<input type="number" class="score"/></li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">Michigan<input type="number" class="score"/></li>
                                <li class="team team-bottom">Iowa<input type="number" class="score"/></li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">Illinois<input type="number" class="score"/></li>
                                <li class="team team-bottom">Wisconsin<input type="number" class="score"/></li>
                            </ul>
                            <ul class="matchup">
                                <li class="team team-top">Purdue<input type="number" class="score"/></li>
                                <li class="team team-bottom">Boise State<input type="number" class="score"/></li>
                            </ul>			
                        </div>				
                    </div>
            </div>
        </section>
        );
    }
}
