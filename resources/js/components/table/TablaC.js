import React from 'react';
import Tarjeta2 from '../card/Tarjeta2';
import Tarjeta from '../card/Tarjeta';
import './tabla.css';


export default class Tabla extends React.Component {
    constructor(props){
        super(props);
    }


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
            return (
                <tbody>
                    <tr className="size"><td><Tarjeta2/></td></tr>
                    <tr className="size"><td>{this.props.cuartos[0]}</td></tr>
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
    }
}
