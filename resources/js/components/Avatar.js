import React, { Component } from 'react';

import './ComponentCSS/CardStyle.css'
import './ComponentCSS/viewAvatar.css'
import './ComponentCSS/superponer.css'

export default class Avatar extends Component {
    
    handleChange(event){
        event.preventDefault()
        this.setState({nameValue: event.target.value});
        this.props.handleNameChange(event);
    }
    constructor(props){
        super(props)
        this.state = { 
            nameValue : 'Ponme un Nombre!'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <>
           
                        <div className="card config mx-auto side">
                            <div className="card-body mx-auto">
                                <input type="text" className="card-title text-center"  placeholder="Ponme un Nombre" value="" onChange={this.handleChange}/>
                            </div>
                            <div className="divAv">
                                
                                <img className="pelo superponer-edicion " src={window.location.origin + '/RecursosGraficos/Caras/'+ this.props.face + '.png'}/>
                                <img className="cara superponer-edicion " src={window.location.origin + '/RecursosGraficos/Ojos/' + this.props.eyes + '.png'}/>
                                <img className="ojos superponer-edicion " src={window.location.origin + '/RecursosGraficos/Pelos/' + this.props.hair + '.png'}/>
                                <img className="boca superponer-edicion " src={window.location.origin + '/RecursosGraficos/Bocas/' + this.props.mouth + '.png'}/>
                            </div>
                                
                        </div>
             
            </>
        );
    }
}
