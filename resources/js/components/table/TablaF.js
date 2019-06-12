import React from 'react';
import Tarjeta2 from '../card/Tarjeta2';
import './tabla.css';
import {
    Button, Card,  CardImg, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';


export default class TablaS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: [false,false],
            campeon: [""],
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

        if (this.props.final[0].id > 0) {
            visibility[0] = visibility;
            this.setState = {
                visibility: visibility
            }
        }
        if (this.props.final[1].id > 0) {
            visibility[1] = visibility;
            this.setState = {
                visibility: visibility
            }
        }
    }




    campeon(event,equipo){
        event.preventDefault();
        var campeon= this.state.campeon;
        campeon[0]=equipo;
        this.setState = {
            campeon:campeon,
        }
    }
    renderCampeon(){
        if(this.state.campeon.length>0)
        return(
            < Card className="Card-borderless">
            <CardImg top width="100%" className="rounded" src="./trofeo.png" alt="Card image cap" />
            <CardBody>
                <CardTitle className= "text-center"><h4><span className="badge badge-primary">Campeón</span></h4></CardTitle>
                    <CardSubtitle className= "text-center"><h3><span className="badge badge-warning">{this.props.campeon[0].name}</span></h3></CardSubtitle>

            </CardBody>
            </Card >
        );
        else return(
            < Card className="Card-borderless">
            <CardImg top width="100%" className="rounded" src="./trofeo.png" alt="Card image cap" />
            <CardBody>
                <CardTitle className= "text-center"><span className="badge badge-warning">Campeón</span></CardTitle>
                    <CardSubtitle></CardSubtitle>

            </CardBody>
            </Card >

        );
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

                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[0]} disabled={this.estanTodos()}onClick={() => { {this.campeon(event,this.props.final[0])};this.props.ganadorF(event, this.props.final[0]) }} color="warning">{this.props.final[0].name}({this.props.final[0].pais})</Button></Card></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[1]} disabled={this.estanTodos()}onClick={() => { {this.campeon(event,this.props.final[1])};this.props.ganadorF(event, this.props.final[1]) }} color="warning">{this.props.final[1].name}({this.props.final[1].pais})</Button></Card></td></tr>
                {this.renderCampeon()}
            </tbody>
        );    }


}

