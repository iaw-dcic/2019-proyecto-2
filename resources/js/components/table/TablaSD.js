import React from 'react';
import Tarjeta2 from '../card/Tarjeta2';
import Tarjeta from '../card/Tarjeta';
import './tabla.css';
import {
    Button,Card
} from 'reactstrap';


export default class TablaSD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: [false, false]
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
        if (this.props.semis[2].id > 0) {
            visibility[0] = visibility;
            this.setState = {
                visibility: visibility
            }
        } if (this.props.semis[3].id > 0) {
            visibility[1] = visibility;
            this.setState = {
                visibility: visibility
            }
        }
    }
    render() {

        this.cambiarEstado()
        return (
            <tbody>
                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[0]} onClick={() => { this.props.ganadorS(event, this.props.semis[2]) }} color="success">{this.props.semis[2].name}({this.props.semis[2].pais})</Button></Card></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[1]} onClick={() => { this.props.ganadorS(event, this.props.semis[3]) }} color="success">{this.props.semis[3].name}({this.props.semis[3].pais})</Button></Card></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
            </tbody>
        );
    }


}
