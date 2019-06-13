import React from 'react';

import {
    Button, Card
} from 'reactstrap';
import './tabla.css';
export default class Tabla extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
            return (

                    <tr className="size">

                        <td>
                            <Card className="text-center">
                                <Button onClick={() => { this.props.ganadorO(event, this.props.e) }} color="dark">{this.props.e.name}({this.props.e.pais})</Button>
                            </Card>
                        </td>
                    </tr>

            );


    }
}
