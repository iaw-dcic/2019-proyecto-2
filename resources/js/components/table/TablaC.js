import React from 'react';
import Tarjeta2 from '../card/Tarjeta2';
import Tarjeta from '../card/Tarjeta';
import './tabla.css';


export default class Tabla extends React.Component {
    constructor(props){
        super(props);
    }

    // shouldComponentUpdate(){
    //     if (this.props.cuartos[0]===0)
    //         return false;
    //     else
    //         return true;
    // }

    render() {
        if(this.props.cuartos.length==0){
            return (
                <tbody>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td><Tarjeta/></td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td><Tarjeta/></td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td><Tarjeta/></td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td><Tarjeta/></td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td><Tarjeta/></td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td><Tarjeta/></td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td><Tarjeta/></td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td><Tarjeta/></td></tr>
                </tbody>
            );
        }
        else{
        console.log(this.props.cuartos[0]);

            return (
                <tbody>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td>{this.props.cuartos[0]}</td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td>{this.props.cuartos[1]}</td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td>{this.props.cuartos[2]}</td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td>{this.props.cuartos[3]}</td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td>{this.props.cuartos[4]}</td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td>{this.props.cuartos[5]}</td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td>{this.props.cuartos[6]}</td></tr>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td>{this.props.cuartos[7]}</td></tr>
                </tbody>
            );

        }
    }
}
