import React, { Component } from 'react'
import AppNavbar from './AppNavbar'
import ShirtMenu from './ShirtMenu'
import { Tabs, Tab, Container, Row, Col, Form } from 'react-bootstrap'
import { CirclePicker } from 'react-color'
import axios from 'axios'
import Shirt from './Shirt'
import Modals from './Modals'
import LoadingScreen from 'react-loading-screen';
import DecorationList from './DecorationList';
import { decorations } from './img/decorations/decorations';
import Logo from './img/logo.png'
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
            received_shirts_info: false,
        };
    }

    render() {
        return (
            <React.Fragment>
                <AppNavbar user_info={this.props.user_info} />
                {this.showContent()}
            </React.Fragment>
        );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.received_user_info) {
            axios.get("http://localhost:8000/api/" + nextProps.user_info.id + "/shirts").then(resp => {
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
            if (this.state.shirts.length > 0) {
                return (
                    <React.Fragment>
                        <ShirtMenu shirts={this.state.shirts} onSelectShirt={this.handleShirtSelect} onCreateShirt={this.handleCreateShirt} />
                        <Container>
                            <Row>
                                <Col>
                                    <div className="well">
                                        <Shirt type={this.state.shirt.type} color={this.state.shirt.color} received_shirts_info={this.state.received_shirts_info} />
                                    </div>
                                </Col>
                                <Col>
                                    <h3>{this.state.shirt.design_name}</h3>
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
                                                    data={decorations}
                                                    onSelectShirt={this.handleSelectDecoration}
                                                />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                    <Modals design_name={this.state.shirt.design_name} onSelectSave={this.handleSaveShirt} onSelectDelete={this.handleDeleteShirt} />
                                </Col>
                            </Row>
                        </Container>;
                </React.Fragment>
                );
            }
            else {
                return (
                    <React.Fragment>
                        {/* TODO */}
                        <ShirtMenu shirts={this.state.shirts} onSelectShirt={this.handleShirtSelect} onCreateShirt={this.handleCreateShirt} />
                        <p>empty shirts yo</p>
                    </React.Fragment>
                );
            }
        }
        else return (
            <React.Fragment>
                {/* TODO */}
                <p>you're a guest,please login</p>
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
        shirt.color = color.hex.substr(1);
        this.setState({ shirt });
    }

    handleShirtSelect = (shirt) => {
        this.setState({ shirt });
    }

    handleSelectDecoration = (imgElement) => {
        let shirt = this.state.shirt;
        shirt.decoration = imgElement;
        this.setState({ shirt });
        console.log(shirt);
    }

    handleShowSaveModal = () => {
        this.setState({ showSaveModal: true })
    }

    handleCloseSaveModal = () => {
        this.setState({ showSaveModal: false })
    }

    handleSaveShirt = (name) => {
        let shirt = { ...this.state.shirt };
        shirt.design_name = name;
        this.setState({ shirt, showSaveModal: false });
        axios.patch(`http://localhost:8000/api/shirts/` + shirt.id, shirt)
            .then(res => {
                let shirts = this.state.shirts;
                let affectedShirt = [res.data];
                let updatedShirts = shirts.map(obj => affectedShirt.find(o => o.id === obj.id) || obj);
                this.setState({ shirts: updatedShirts });
            });
    }

    handleDeleteShirt = () => {
        axios.delete('http://localhost:8000/api/shirts/' + this.state.shirt.id)
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
        axios.post(`http://localhost:8000/api/shirts/store/` + this.props.user_info.id)
            .then(res => {
                let shirt = res.data;
                let shirts = this.state.shirts;
                shirts.push(shirt);
                this.setState({ shirt, shirts });
            });
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
}
