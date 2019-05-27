import React, { Component } from 'react';

import './partidos.css'
export default class Semis extends Component {
    state = {
        item: []
    };



    handleClick(param, e) {
        console.log('Parameter', param);
        console.log('Event', e);


    }
    render() {
        var { item } = this.state;
        let j;
        if (this.props.i == 1) {
            j = <button type="button" className="btn btn-light "
                onClick={(e) => this.handleClick(this.props.jugador, (Number(this.props.i)), e)}>

            </ button>
        }
        return <div>



            <div className="row" id={"semis_" + this.props.i + "_juno"}>
                semi{this.props.i}juno
                    </div>

            <div className="row" id={"semis_" + this.props.i + "_jdos"}>
                semi{this.props.i}jdos
                </div>



        </div>


    }
}
