import React, { Component } from 'react';

import './partidos.css'
export default class Final extends Component {
    state = {
        item: []
    };

    handleClick(param, e) {
        console.log('Parameter', param);
        console.log('Event', e);
        this.props.setJugador(param);
    }

    render() {
        let a = [this.props.jugadorFinal1, this.props.jugadorFinal2];
        let r = [];

        for (let i = 0; i < 2; i++) {
            r.push(
                <div key={"final" + i} className="col-2 header justify-content-cente r align-items-center minh-100 ">
                    {a[i].pais && <img src={"banderas/" + a[i].pais + ".png"}></img>}


                    < button type="button" className="btn btn-light jugador"
                        onClick={(e) => this.handleClick(a[i], e)}>
                        {a[i].nombre && a[i].nombre}
                    </button >
                    <button type="button" className="btn btn-light jugadorabre"
                        onClick={(e) => this.handleClick(a[i], e)}>
                        {a[i].abrev && a[i].abrev}
                    </button>

                </div >

            );
        }
        return <>
            {r}
        </ >


    }
}
