import React, { Component } from 'react';
import cara from './RecursosGraficos/Caras/Cara1.png'
import './ComponentCSS/CardStyle.css'

export default class Avatar extends Component {
    
    handleChange(event){
        event.preventDefault()
        this.setState({nameValue: event.target.value});
        //this.props.handleNameChange(this.state.nameValue);
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
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card config text-center">
                            <div className="card-body">
                                <input type="text" className="card-title text-center" value={this.state.nameValue} onChange={this.handleChange}/>
                            </div>
                                <img className="card-img-bottom" src={cara} alt="Card image cap"/>
                                /*Idea, cargar todo en divs distintos y manejar todo por CSS background  
                                    
                                    <div className="hair"></div>
                                    <div className="skin">
                                        <div className="eyes"></div>
                                        <div className="mouth"></div>
                                    </div>
                                */  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
