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
        if ((this.props.e.id )< 9) {
            return (
                <tbody>
                    <tr className="size">
                        <td>
                            <Button onClick={() => { this.props.ganadorO(event, this.props.e) }} color="secondary">{this.props.e.name}({this.props.e.pais})</Button>
                        </td>
                    </tr>
                </tbody>
            );
        } else{
            return (

                <tbody>

                </tbody>
            );
        }

    }
}
