import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Match extends Component {
    render() {
        var child1 =<li className="team team-bottom"><span className="score"><img src='' width="26px" height="26px" alt=" ? "/>
                    </span><button onClick={this.props.onClick} className="button">{this.props.teamA}</button></li>

        var child2 =<li className="team team-bottom"><span className="score"><img src='' width="26px" height="26px" alt=" ? "/>
        </span><button onClick={this.props.onClick} className="button">{this.props.teamB}</button></li>
        return (
                <ul className="matchup">
                  {child1}
                  {child2}
                </ul>
        );
    }
}
/* 
{this.getTeamImage(this.props.teamA)}
{this.getTeamImage(this.props.teamB)} */
