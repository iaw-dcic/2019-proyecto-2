import React, { Component } from 'react';
import { SliderPicker } from 'react-color';
import './TShirt.css'
import Axios from 'axios';


export default class Example extends Component {

    state = {
        tshirt_color: '#ffffff',
        image: null,
        image_type: "center",
        tshirt_type: "men",
    }

    makeMenTee = () => {
        this.setState({tshirt_type: "men"});
    }

    makeWomenTee = () => {
        this.setState({tshirt_type: "women"});
    }

    changeColor = (color, event) => {
        this.setState({ tshirt_color: color.hex });
    }

    clickCenterImage = (event) => {
        this.setState({ image: event.target.src,
            image_type: "center"});
    }

    removeCenterImage = () => {
        this.setState({ image: null });
    }
    clickPocketImage = (event) => {
        this.setState({ image: event.target.src,
            image_type: "pocket"});
    }

    removePocketImage = () => {
        this.setState({ image: null });
    }

    submit = event => {
        event.preventDefault();
        axios.post('/api/tshirts', {
                tshirt_color: this.state.tshirt_color,
                image: this.state.image,
                image_type: this.state.image_type,
                tshirt_type: this.state.tshirt_type,})
            .then(res => {console.log(res); console.log(res.data)});
    }

    render() {
        return (
            <div id="content">
                <span>
                    <div id="tshirt-container" className="row justify-content-center">
                        <div className="container">
                            <div>
                                <div id="tshirt_image"
                                    className={"tshirt-contents image "+this.state.tshirt_type+"_image"}
                                    style={{ backgroundColor: this.state.tshirt_color}}>
                                    {this.state.image != null &&
                                        <img className={'image ' + this.state.image_type} alt="image" src={this.state.image} />
                                    }
                                </div>
                                <div id="tshirt_foreground"
                                    className={"tshirt-contents image "+this.state.tshirt_type+"_foreground"}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="color_picker">
                        <SliderPicker color={this.state.tshirt_color} onChange={this.changeColor} />
                    </div>
                </span>
                <span>
                    <div>
                        <div className="option_label">Center image</div>
                        <div className="options">
                            <img className="image_button" alt="none" src="/storage/uploads/none.png" onClick={this.removeCenterImage} />
                            <img className="image_button" alt="star" src="/storage/uploads/note.png" onClick={this.clickCenterImage.bind(this)} />
                            <img className="image_button" alt="lightbulb" src="/storage/uploads/lightbulb.png" onClick={this.clickCenterImage.bind(this)} />
                            <img className="image_button" alt="star" src="/storage/uploads/pin.png" onClick={this.clickCenterImage.bind(this)} />
                            <img className="image_button" alt="star" src="/storage/uploads/lis_flower.png" onClick={this.clickCenterImage.bind(this)} />
                        </div>
                    </div>
                    <div>
                        <div className="option_label">Pocket image</div>
                        <div className="options">
                            <img className="image_button" alt="none" src="/storage/uploads/none.png" onClick={this.removePocketImage} />
                            <img className="image_button" alt="star" src="/storage/uploads/note.png" onClick={this.clickPocketImage.bind(this)} />
                            <img className="image_button" alt="lightbulb" src="/storage/uploads/lightbulb.png" onClick={this.clickPocketImage.bind(this)} />
                            <img className="image_button" alt="star" src="/storage/uploads/pin.png" onClick={this.clickPocketImage.bind(this)} />
                            <img className="image_button" alt="star" src="/storage/uploads/lis_flower.png" onClick={this.clickPocketImage.bind(this)} />
                        </div>
                    </div>

                    <div className="type_options">
                        <div>
                            <div className="option_label">Men</div>
                            <img className="large_image_button" alt="none" src="/storage/uploads/basic_tee.png" onClick={this.makeMenTee} />
                        </div>
                        <div>
                            <div className="option_label">Women</div>
                            <img className="large_image_button" alt="none" src="/storage/uploads/women_tee.png" onClick={this.makeWomenTee} />
                        </div>
                    </div>

                    <div>
                        <button className="btn btn-primary btn-sm" onClick={this.submit}>Guardar</button>
                    </div>
                </span>
            </div>
        );
    }
}
