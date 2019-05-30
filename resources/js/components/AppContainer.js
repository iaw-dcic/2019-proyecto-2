import React, { Component } from 'react'
import AppNavbar from './AppNavbar'
import { slide as Menu } from 'react-burger-menu'
import { Tabs, Tab, Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'
import { CirclePicker } from 'react-color'
import axios from 'axios';
import Shirt from './Shirt'

import ReactDOM from 'react-dom'


export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            shirt: {
                id: 1,
                type: "tshirt",
                color: "FFFFFF",
                design_name: "Design 1"
            },
            showSaveModal: false,
            design_name_form_value: 'Design 1',

        };
    }

    render() {
        return (
            <React.Fragment>
                <AppNavbar />
                {this.showContent()}
            </React.Fragment>
        );
    }

    showContent() {
        if (this.state.isLoggedIn) {
            return (
                <React.Fragment>
                    <Menu>
                        <p>Your designs</p>
                        <a id="home" className="menu-item" href="#">Design-1</a>
                        <a id="about" className="menu-item" href="#">Design-2</a>
                        <a id="contact" className="menu-item" href="#">Design-n</a>
                    </Menu>
                    <Container>
                        <Row>
                            <Col>
                                <div className="well">
                                    <Shirt type={this.state.shirt.type} color={this.state.shirt.color} />
                                </div>
                            </Col>
                            <Col>
                            <h3>{this.state.shirt.design_name}</h3>
                                <Tabs className="padtop">
                                    <Tab eventKey="typeAndColor" title="Type and color">
                                        <div className="well">
                                            <Form.Label>Type</Form.Label>
                                            <Form.Control as="select"
                                                onChange={this.handleTypeChange}>
                                                <option value="tshirt">Short sleeve</option>
                                                <option value="longsleeve">Long sleeve</option>
                                            </Form.Control>
                                            <br />
                                        </div>
                                        <div className="well">
                                            <p>Color</p>
                                            <CirclePicker 
                                                color={'#'+this.state.shirt.color} 
                                                colors={['#1B998B', '#ED217C', '#55DDFF','#FFFFFF','#FF9B71']} 
                                                onChange= {this.handleColorChange}
                                            />
                                        </div>
                                        <Button variant="success" onClick={this.handleShowSaveModal}>Save shirt</Button>
                                    </Tab>
                                    <Tab eventKey="Images" title="Decoration">
                                        <div className="well">
                                            <p>images</p>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>;

                <Modal show={this.state.showSaveModal} onHide={this.handleCloseSaveModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Save design</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Form.Label>Enter a design name</Form.Label>
                    <Form.Control type="text" value={this.design_name_form_value} onChange={this.handleChange}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseSaveModal}>
                        Close
                    </Button>
                    <Button variant="success" onClick={this.handleSaveDesign}>
                        Save
                    </Button>
                </Modal.Footer>
                </Modal>

            </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <p>you're a guest,please login</p>
            </React.Fragment>
        );
    }

    handleTypeChange = (e) => {
        let shirt = { ...this.state.shirt };
        shirt.type = e.target.value;
        this.setState({
            shirt
        });
    }

    handleColorChange = (color,event) => {
        let shirt = { ...this.state.shirt };
        shirt.color = color.hex.substr(1);
        this.setState({
            shirt
        });
    }

    handleChange = (event) => {
        this.setState({design_name_form_value: event.target.value});
    }

    handleShowSaveModal = () => {
        this.setState({ showSaveModal: true})
    }

    handleCloseSaveModal = () => {
        this.setState({ showSaveModal: false})
    }

    handleSaveDesign = () => {
        let shirt = { ...this.state.shirt };
        shirt.design_name = this.state.design_name_form_value;
        this.setState({shirt, showSaveModal: false});
        axios.patch(`http://localhost:8000/api/shirts/`+shirt.id, shirt)
            .then(res => {
            //console.log('res',res);
      })
    }
}
