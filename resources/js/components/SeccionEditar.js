import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class SeccionEditar extends Component {

    constructor(){
        super()
    
        this.state={
            donuts:[]
        }
    }
    
    // componentWillMount(){
    //     this.loadDonut();
    // }
    
    // loadDonut(){
    //     fetch('/api/donuts').then(
    //         (response)=>{
    //             return response.json();
    //         }   )
    //     .then(donuts => {
    //         this.setState({ donuts : donuts });
    //     });
    // }

	render() {
		return (
			<div className="row fondo">
                <h4>Hola</h4>
				{
                this.state.donuts.map(donut => 
                    <h4>{donut.id}</h4>
                )
            }
			</div>
		);
	}
}

export default SeccionEditar;
