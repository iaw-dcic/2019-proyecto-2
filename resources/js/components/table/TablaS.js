import React from 'react';
import { Card, Button} from 'reactstrap';
import Tarjeta2 from '../card/Tarjeta2';
import Tarjeta from '../card/Tarjeta';
import './tabla.css';


export default class TablaS extends React.Component {
    render() {
        return (
            <tbody>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta/></td></tr>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta/></td></tr>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta/></td></tr>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta2/></td></tr>
                <tr className="size"><td><Tarjeta/></td></tr>
            </tbody>
        );
    }
}
