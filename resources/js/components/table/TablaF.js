import React from 'react';
import Tarjeta2 from '../card/Tarjeta2';
import Tarjeta from '../card/Tarjeta';
import './tabla.css';
import {
    Button
} from 'reactstrap';


export default class TablaS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: [false]
        }
    }

    // shouldComponentUpdate(){
    //     if (this.props.cuartos[0]===0)
    //         return false;
    //     else
    //         return true;
    // }
    cambiarEstado() {

        var visibility = this.state.visibility;
        if (this.props.final[0].id > 0) {
            visibility[0] = visibility;
            this.setState = {
                visibility: visibility
            }
        }
    }
    render() {

        this.cambiarEstado()
        return (
            <tbody>
                <tr className="size"><td><Tarjeta2 /></td></tr>

                <tr className="size"><td><Tarjeta2 /></td></tr>

                <tr className="size"><td><Tarjeta2 /></td></tr>
                <tr className="size"><td><Tarjeta2 /></td></tr>
                <tr className="size"><td><Button hidden={!this.state.visibility[0]} onClick={() => { this.props.ganadorF(event, this.props.final[0]) }} color="secondary">{this.props.final[0].name}({this.props.final[0].pais})</Button></td></tr>

                <tr className="size"><td><Tarjeta2 /></td></tr>
                <tr className="size"><td><Tarjeta2 /></td></tr>

                <tr className="size"><td><Tarjeta2 /></td></tr>
            </tbody>
        );    }


}

