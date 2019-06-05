import React, {Component} from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';


class Tarjeta extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="card">
            <Card>
                <CardBody>
                <CardTitle>{ this.props.name}({this.props.pais})</CardTitle>
                </CardBody>
         </Card>
          </div>
        );
    }
}

export default Tarjeta;
