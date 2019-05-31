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
                <CardHeader>Header</CardHeader>
                <CardBody>
                <CardTitle>{ this.props.name}</CardTitle>
                <CardText>{ this.props.username}, {this.props.website}</CardText>
                <Button>Go somewhere</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
          </Card>
          </div>
        );
    }
}

export default Tarjeta;
