import React from 'react';
import { Col } from 'react-bootstrap';

export default class DecorationListItem extends React.Component {


    handleSelectDecoration = () => {
        this.props.onSelectDecoration(this.props.id,this.props.image);
    }

    render() {

        return (

            <Col xs={6} md={4} >
                <a href="#" className="thumbnail" onClick={this.handleSelectDecoration}>
                    <img src={`data:image/png;base64,${this.props.image}`} />
                </a>
            </Col>
        );
    }
}