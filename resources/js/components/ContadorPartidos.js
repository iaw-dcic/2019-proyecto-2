import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class ContadorPartidos extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-lg-3">
                        <div className="counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                        <span className="ico-circle"><i className="ion-checkmark-round"></i></span>
                        </div>
                        <div className="counter-num">
                            <p className="counter">450</p>
                            <span className="counter-text">WORKS COMPLETED</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 col-lg-3">
                    <div className="counter-box pt-4 pt-md-0">
                        <div className="counter-ico">
                            <span className="ico-circle"><i className="ion-ios-calendar-outline"></i></span>
                        </div>
                        <div className="counter-num">
                            <p className="counter">15</p>
                            <span className="counter-text">YEARS OF EXPERIENCE</span>
                        </div>
                    </div>
                    </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="counter-box pt-4 pt-md-0">
                                <div className="counter-ico">
                                    <span className="ico-circle"><i className="ion-ios-people"></i></span>
                                </div>
                            <div className="counter-num">
                                <p className="counter">550</p>
                                <span className="counter-text">TOTAL CLIENTS</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <div className="counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                                <span className="ico-circle"><i className="ion-ribbon-a"></i></span>
                            </div>
                            <div className="counter-num">
                                <p className="counter">36</p>
                                <span className="counter-text">AWARD WON</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        $('.counter').counterUp({
            delay: 15,
            time: 2000
        });
    }
}
