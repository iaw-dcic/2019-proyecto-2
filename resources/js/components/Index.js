import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Index extends Component {
    render() {
        return (
            <div>
                <div className="overlay-itro"></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className="intro-title mb-4">Copa Mundial de la FIFA 2018</h1>
                            <p className="intro-subtitle"><span className="text-slider-items">Duis veniam aliquip.,Sunt excepteur nisi.,Sint laboris est.,laborum non amet qui esse.</span><strong className="text-slider"></strong></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        if ($('.text-slider').length == 1) {
            var typed_strings = $('.text-slider-items').text();
            var typed = new Typed('.text-slider', {
                strings: typed_strings.split(','),
                typeSpeed: 80,
                loop: true,
                backDelay: 1100,
                backSpeed: 30
            });
        }
    }
}
