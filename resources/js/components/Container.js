import React, { Component } from 'react';
import ShirtImage from './ShirtImage';
import MisDiseños from './MisDiseños';
import ReactDOM from 'react-dom';
import Axios from 'axios';
export default class Container extends Component {

    constructor() {
        super()
        this.state = {
            content: <ShirtImage />
            }
    }

    handleChangeToDesign() {        
        this.setState({
            content: <MisDiseños />
        });
    }
    handleChangeToCreate() {
        this.setState({
            content: <ShirtImage />
        });
    }

    render() {
        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item mr-2">
                        <span className="nav-link active" onClick={(e) => this.handleChangeToDesign()} >Mis diseños</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link active" onClick={(e) => this.handleChangeToCreate()} >Crear</span>
                    </li>
                </ul>
                {this.state.content}
            </div>

        );
    }
}

