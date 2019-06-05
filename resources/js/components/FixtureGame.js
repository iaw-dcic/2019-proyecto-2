import React, { Component } from 'react'

export default class FixtureGame extends Component {


  
    render () {
            return (
            <div id="partidoPadre" className="container" className="border border-default" >            
                <button className="btn btn-warning btn-block text-primary"   id="firstTeam" onClick={this.handleClick} disabled={this.props.disabled}>{this.props.teams[this.props.index]}</button>
                <button className="btn btn-primary btn-block text-warning"  id="secondTeam" onClick={this.handleClick} disabled={this.props.disabled}>{this.props.teams[this.props.index+1]}</button>
            </div>
            );       
    }

    handleClick = (e) => {
        const teamName = e.target.innerHTML;
        this.props.onClick(teamName);
    }
}
