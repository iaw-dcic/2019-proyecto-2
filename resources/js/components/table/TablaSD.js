import React from 'react';
import Tarjeta2 from '../card/Tarjeta2';
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
        visibility[0]=false
        visibility[1]=false

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
    estanTodos(){
        if(this.state.visibility[0] && this.state.visibility[1])
            return false;
        else
            return true;
    }

    render() {

        this.cambiarEstado()
        return (
            <tbody>
                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[0]}  disabled={this.estanTodos()}onClick={() => { this.props.ganadorS(event, this.props.semis[2]) }} color="success">{this.props.semis[2].name}({this.props.semis[2].pais})</Button></Card></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[1]}  disabled={this.estanTodos()} onClick={() => { this.props.ganadorS(event, this.props.semis[3]) }} color="success">{this.props.semis[3].name}({this.props.semis[3].pais})</Button></Card></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
            </tbody>
        );
    }


}
