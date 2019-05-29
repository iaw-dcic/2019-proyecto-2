import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SelectOptions from './SelectOptions';
import '../../../public/css/options.css';

export default class Box extends Component {
    render() {
        return (
            <div className="section-builder-cel">
                <div className="image-cel">
                    hol
                </div>
                <div className="options-cel">
                   <SelectOptions />
                </div>
            </div>
        );
    }
}