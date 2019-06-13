import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/layout.css';
import '../../../public/css/caseOptions.css';
import CaseButton from './CaseButton'

export default class CaseOptions extends Component {
    constructor(){
        super()

        this.state={fundas:[]}
    }

    componentWillMount(){
        this.loadFundas();
    }

    loadFundas(){
        fetch('/api/fundas').then(
            (response)=>{
                return response.json();
            }   )
        .then(fundas => {
            this.setState({ fundas: fundas });
        });
    }

    render() {
        return (
            <div className="hover-btn">
                           
                {
                   this.state.fundas.map(funda => <CaseButton key={funda.id} funda={funda} onClick={() => this.props.onClick(funda.id)}/>)
                }
            </div>
        );
    }
}