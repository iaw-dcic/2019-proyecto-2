import React, { Component } from 'react';
import cara from './RecursosGraficos/Caras/Cara1.png'
import './ComponentCSS/CardStyle.css'

export default class Avatar extends Component {
    
    handleChange(event){
        event.preventDefault();
        this.setState({nameValue: event.target.value});
        alert('A name was submitted: ' + this.state.value);
        //this.props.handleNameChange(this.state.nameValue);
    }
    state = {
        nameValue : 'NombreAvatar'
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card config text-center">
                            <div className="card-body">
                                <input type="text" className="card-title text-center" value={this.state.nameValue} onChange={this.handleChange}/>
                            </div>
                                <img className="card-img-bottom" src={cara} alt="Card image cap"/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
