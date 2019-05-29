import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tournament from './Tournament/Tournament'

export default class Container extends Component {
    render() {
        return (
            <div className="hero-container2">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div>
                            <Tournament />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
