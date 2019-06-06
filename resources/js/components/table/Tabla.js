import React from 'react';

import {
    Button
} from 'reactstrap';
import './tabla.css';
export default class Tabla extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (

            <tbody>

                <tr className = "size">
                    <td>
                    <Button  onClick={()=>{this.props.ganadorO(event,this.props.id)}}color="secondary">{this.props.name}({this.props.pais})</Button>
                    </td>
                </tr>

            </tbody>
        );
    }
}
