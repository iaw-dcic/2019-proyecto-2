import React from 'react';
import Tarjeta2 from '../card/Tarjeta2';
import Tarjeta from '../card/Tarjeta';
import './tabla.css';
import {
    Button
} from 'reactstrap';


export default class TablaC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: [false, false, false, false]
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
        if (this.props.cuartos[0].id > 0) {
            visibility[0] = visibility;
            this.setState = {
                visibility: visibility
            }
        }if (this.props.cuartos[1].id > 0) {
            visibility[1] = visibility;
            this.setState = {
                visibility: visibility
            }
        }if (this.props.cuartos[2].id > 0) {
            visibility[2] = visibility;
            this.setState = {
                visibility: visibility,
            }
        }if (this.props.cuartos[3].id > 0) {
            visibility[3] = true;
            this.setState = {
                visibility: visibility,
            }
        }
    }
    render() {

        this.cambiarEstado()
        return (
            <tbody>
                <tr className="size"><td><Tarjeta2 /></td></tr>

                <tr className="size"><td><Button hidden={!this.state.visibility[0]} onClick={() => { this.props.ganadorC(event, this.props.cuartos[0]) }} color="secondary">{this.props.cuartos[0].name}({this.props.cuartos[0].pais})</Button></td></tr>
                <tr className="size"><td><Tarjeta2 /></td></tr>
                <tr className="size"><td><Button hidden={!this.state.visibility[1]} onClick={() => { this.props.ganadorC(event, this.props.cuartos[1]) }} color="secondary">{this.props.cuartos[1].name}({this.props.cuartos[1].pais})</Button></td></tr>
                <tr className="size"><td><Tarjeta2 /></td></tr>
                <tr className="size"><td><Button hidden={!this.state.visibility[2]} onClick={() => { this.props.ganadorC(event, this.props.cuartos[2]) }} color="secondary">{this.props.cuartos[2].name}({this.props.cuartos[2].pais})</Button></td></tr>
                <tr className="size"><td><Tarjeta2 /></td></tr>
                <tr className="size"><td><Button hidden={!this.state.visibility[3]}onClick={() => { this.props.ganadorC(event, this.props.cuartos[3]) }} color="secondary">{this.props.cuartos[3].name}({this.props.cuartos[3].pais})</Button></td></tr>
            </tbody>
        );
    }


}
