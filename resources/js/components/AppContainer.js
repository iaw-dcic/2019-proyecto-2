import React, { Component } from 'react'

import ShirtMenu from './ShirtMenu'
import { Tabs, Tab, Container, Row, Col, Form } from 'react-bootstrap'
import { CirclePicker } from 'react-color'
import axios from 'axios'
import Shirt from './Shirt'
import Modals from './Modals'
import LoadingScreen from 'react-loading-screen';
import DecorationList from './DecorationList';
import LandingImage from './img/landing-page.jpg'
import { Heading, Text } from 'rebass'
import Logo from './img/logo.png'
import { Hero } from 'react-landing-page'
import ReactDOM from 'react-dom'


export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shirt: {
                id: 0,
                type: "",
                color: "",
                design_name: "",
                decoration: "",
            },
            shirts: [],
        };
    }

    render() {
        return (
            <React.Fragment>
                {this.showContent()}
            </React.Fragment>
        );
    }

    componentDidMount() {
        if (this.props.user_info.isLoggedIn) {
            axios.get(`/api/static/images/decorations`)
                .then(res => {
                    this.setState({ decorations: res.data });
                });
            axios.get(`/api/static/images/shirts`)
                .then(res => {
                    this.setState({ shirtsImages: res.data });
                });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user_info.id != null) {
            axios.get("/api/" + nextProps.user_info.id + "/shirts").then(resp => {
                let shirts = resp.data;
                this.setState({ shirts, received_shirts_info: true });
                if (shirts.length > 0 && this.state.shirt.id == 0) {
                    let shirt = shirts[0];
                    this.setState({ shirt });
                }
            });
        }
    }

    showContent() {
        if (this.props.user_info.isLoggedIn && !this.state.received_shirts_info) {
            return this.showLoadingScreen();
        }
        else if (this.state.received_shirts_info) {
            if (this.state.shirts.length > 0)
                return this.showEditingScreen();
            else
                return this.showEmptyDesignsScreen();
        }
        else
            return this.showGuestScreen();
    }

    showLoadingScreen = () => {
        return (
            <React.Fragment>
                <LoadingScreen
                    loading={true}
                    bgColor='#f1f1f1'
                    spinnerColor='#9ee5f8'
                    textColor='#676767'
                    logoSrc={Logo}
                    text='Loading, please hold'
                    children=''
                />
            </React.Fragment>
        );
    }

    showEditingScreen = () => {
        return (
            <React.Fragment>
                <ShirtMenu shirts={this.state.shirts} onSelectShirt={this.handleShirtSelect} onCreateShirt={this.handleCreateShirt} />
                <Container>
                    <Row className="pt-3">
                        <Col>
                            <div className="well">
                                <Shirt shirt={this.state.shirt}
                                    received_shirts_info={this.state.received_shirts_info}
                                    shirtsImages={this.state.shirtsImages}
                                    decorations={this.state.decorations} />
                            </div>
                        </Col>
                        <Col className="pt-2">
                            <Heading fontSize={[34]}>{this.state.shirt.design_name}</Heading>
                            <Tabs className="padtop">
                                <Tab eventKey="typeAndColor" title="Type and color">
                                    <div className="well">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control as="select"
                                            onChange={this.handleTypeChange}
                                            value={this.state.shirt.type}>
                                            <option value="tshirt">Short sleeve</option>
                                            <option value="longsleeve">Long sleeve</option>
                                        </Form.Control>
                                        <br />
                                    </div>
                                    <div className="well">
                                        <p>Color</p>
                                        <CirclePicker
                                            color={'#' + this.state.shirt.color}
                                            colors={['#1B998B', '#ED217C', '#55DDFF', '#FFFFFF', '#FF9B71']}
                                            onChange={this.handleColorChange}
                                        />
                                    </div>
                                </Tab>
                                <Tab eventKey="Images" title="Decoration">
                                    <div className="well">
                                        <DecorationList
                                            decorations={this.state.decorations}
                                            onSelectDecoration={this.handleSelectDecoration}
                                        />
                                    </div>
                                </Tab>
                            </Tabs>
                            <Modals
                                design_name={this.state.shirt.design_name}
                                onSelectSave={this.handleSaveShirt}
                                onSelectDelete={this.handleDeleteShirt}
                                onSelectReset={this.handleResetShirt}
                            />
                        </Col>
                    </Row>
                </Container>;
                </React.Fragment>
        );
    }

    showGuestScreen = () => {
        return (
            <React.Fragment>
                <Hero
                    color="black"
                    bg="white"
                    backgroundImage={LandingImage}
                >
                    <Heading fontSize={[64]} className="xoverflow">ShirtDesigner</Heading>
                    <Text fontSize={[20]}><a href="/login">Login</a> to start designing</Text>
                </Hero>

            </React.Fragment>
        );
    }

    showEmptyDesignsScreen = () => {
        return (
            <React.Fragment>
                <ShirtMenu shirts={this.state.shirts} onSelectShirt={this.handleShirtSelect} onCreateShirt={this.handleCreateShirt} />
                <Hero>
                    <Heading fontSize={[42]}>You don't have any designs</Heading>
                    <Text fontSize={[20]}><a href="#" onClick={this.handleCreateShirt}>Create</a> one!</Text>
                </Hero>
            </React.Fragment>
        );
    }

    handleTypeChange = (e) => {
        let shirt = { ...this.state.shirt };
        shirt.type = e.target.value;
        this.setState({ shirt });
    }

    handleColorChange = (color, event) => {
        let shirt = { ...this.state.shirt };
        shirt.color = color.hex.substr(1).toUpperCase();
        this.setState({ shirt });
    }

    handleShirtSelect = (shirt) => {
        this.setState({ shirt });
    }

    handleSelectDecoration = (id) => {
        let shirt = this.state.shirt;
        shirt.decoration = id;
        this.setState({ shirt });
    }

    handleShowSaveModal = () => {
        this.setState({ showSaveModal: true });
    }

    handleCloseSaveModal = () => {
        this.setState({ showSaveModal: false });
    }

    handleResetShirt = () => {
        let shirt = this.state.shirt;
        shirt.type = "tshirt";
        shirt.color = "FFFFFF";
        shirt.decoration = "";
        this.setState({ shirt });
    }

    handleSaveShirt = (name) => {
        let shirt = { ...this.state.shirt };
        shirt.design_name = name;
        this.setState({ shirt, showSaveModal: false });
        axios.patch(`/api/shirts/` + shirt.id, shirt)
            .then(res => {
                let shirts = this.state.shirts;
                let affectedShirt = [res.data];
                let updatedShirts = shirts.map(obj => affectedShirt.find(o => o.id === obj.id) || obj);
                this.setState({ shirts: updatedShirts });
            });
    }

    handleDeleteShirt = () => {
        axios.delete('/api/shirts/' + this.state.shirt.id)
            .then(res => {
                const shirts = this.state.shirts.filter(shirt => shirt.id !== res.data.id);
                let shirtToShowNext;
                if (shirts.length > 0) {
                    shirtToShowNext = shirts[0];
                }
                else {
                    shirtToShowNext = [];
                }
                this.setState({ shirts, shirt: shirtToShowNext })
            });
    }

    handleCreateShirt = () => {
        axios.post(`/api/shirts/store/` + this.props.user_info.id)
            .then(res => {
                let shirt = res.data;
                let shirts = this.state.shirts;
                shirts.push(shirt);
                this.setState({ shirt, shirts });
            });
    }

}
