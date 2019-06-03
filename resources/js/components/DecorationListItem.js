import React from 'react';
import { Col } from 'react-bootstrap';

export default class DecorationListItem extends React.Component {


    handleSelectDecoration = (e) => {
        e.preventDefault();
        this.props.onSelectShirt(e.target);
    }

    render() {

        return (

            <Col xs={6} md={4} >
                <a href="#" className="thumbnail" onClick={this.handleSelectDecoration}>
                    <img alt="" src={this.props.url} />
                </a>
            </Col>
        );
    }
}