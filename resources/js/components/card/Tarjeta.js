import React, {Component} from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';


class Tarjeta extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="card-xs">
            <Card className="text-center">

                <Button  onClick={()=>{this.props.ganador(this.props.id)}}color="secondary">{ this.props.name}({this.props.pais})</Button>

         </Card>
          </div>
        );
    }
}

export default Tarjeta;
