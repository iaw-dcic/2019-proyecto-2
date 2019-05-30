import React, { Component } from 'react';

import './ComponentCSS/CardStyle.css'
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
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card config text-center mx-auto">
                            <div className="card-body">
                                <input type="text" className="card-title text-center"  value={this.state.nameValue} onChange={this.handleChange}/>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card config text-center mx-auto">
                            
                            <div>
                                
                                <div className="hair superponer "><img src={window.location.origin + '/RecursosGraficos/Caras/'+ this.props.face + '.png'}/> </div>
                                <div className="skin superponer "><img src={window.location.origin + '/RecursosGraficos/Ojos/' + this.props.eyes + '.png'}/></div>
                                <div className="eyes superponer "><img src={window.location.origin + '/RecursosGraficos/Pelos/' + this.props.hair + '.png'}/></div>
                                <div className="mouth superponer"><img src={window.location.origin + '/RecursosGraficos/Bocas/' + this.props.mouth + '.png'}/></div>
                            </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
