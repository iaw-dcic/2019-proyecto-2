import React from 'react';
import Tarjeta2 from '../card/Tarjeta2';
import Tarjeta from '../card/Tarjeta';
import './tabla.css';
import {
    Button, Card
} from 'reactstrap';


export default class TablaC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: [false, false, false, false],
        }
    }



    cambiarEstado() {

        var visibility = this.state.visibility;
        visibility[0]=false
        visibility[1]=false
        visibility[2]=false
        visibility[3]=false
        if (this.props.cuartos[0].id > 0) {
            visibility[0] = true;
            this.setState = {
                visibility: visibility
            }
        }if (this.props.cuartos[1].id > 0) {
            visibility[1] = true;
            this.setState = {
                visibility: visibility
            }
        }if (this.props.cuartos[2].id > 0) {
            visibility[2] = true;
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

    estanTodos(){
        if(this.state.visibility[0] && this.state.visibility[1] && this.state.visibility[2] && this.state.visibility[3])
            return false;
        else
            return true;
    }





    render() {
        this.cambiarEstado()
        return (
            <tbody>
                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>

                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[0]} disabled={this.estanTodos()} onClick={() => { this.props.ganadorC(event, this.props.cuartos[0]) }} color="danger">{this.props.cuartos[0].name}({this.props.cuartos[0].pais})</Button></Card></td></tr>
                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[1]} disabled={this.estanTodos()} onClick={() => { this.props.ganadorC(event, this.props.cuartos[1]) }} color="danger">{this.props.cuartos[1].name}({this.props.cuartos[1].pais})</Button></Card></td></tr>
                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[2]} disabled={this.estanTodos()} onClick={() => { this.props.ganadorC(event, this.props.cuartos[2]) }} color="danger">{this.props.cuartos[2].name}({this.props.cuartos[2].pais})</Button></Card></td></tr>
                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[3]} disabled={this.estanTodos()}  onClick={() => { this.props.ganadorC(event, this.props.cuartos[3]) }} color="danger">{this.props.cuartos[3].name}({this.props.cuartos[3].pais})</Button></Card></td></tr>
            </tbody>
        );
    }


}
