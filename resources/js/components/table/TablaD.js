import React from 'react';

import {
    Button, Card
} from 'reactstrap';
import './tabla.css';
export default class TablaD extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        if ((this.props.e.id )>= 9) {
            return (
                <tbody>
                    <tr className="size">
                        <td>
                        <Card className="text-center">

                            <Button onClick={() => { this.props.ganadorO(event, this.props.e) }} color="dark">{this.props.e.name}({this.props.e.pais})</Button>
                       </Card>
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
