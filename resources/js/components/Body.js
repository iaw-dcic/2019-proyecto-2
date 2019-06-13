import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainSection from './MainSection';
import '../../../public/css/layout.css';

export default class Body extends Component {
    render() {
        return (
            <section id="features">
                    <MainSection />
            </section>
        );
    }
}