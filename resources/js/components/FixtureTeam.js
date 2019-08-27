import React, { Component } from 'react'

export default class FixtureTeam extends Component {
    render () {
        return (<span ><button type="button" className="btn btn-outline-secondary" onClick={this.handleClick}>{this.props.name}</button><br></br></span>);
    }

    handleClick = (e) => {
        e.target.disabled = true;        
        const teamName = e.target.innerHTML;
        this.props.onClick(teamName);

    }
}
