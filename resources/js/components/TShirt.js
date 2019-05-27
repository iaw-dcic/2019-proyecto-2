import React, { Component } from 'react';
import { SliderPicker } from 'react-color';
import './TShirt.css'


export default class Example extends Component {

    state = {
        tshirt_color: '#ffffff',
        center_image: null,
        pocket_image: null,
        tshirt_image: "/storage/uploads/basic_tee.png",
        tshirt_foreground_image: "/storage/uploads/basic_tee_foreground.png",
    }

    makeMenTee = () => {
        this.setState({tshirt_image: "/storage/uploads/basic_tee.png",
        tshirt_foreground_image: "/storage/uploads/basic_tee_foreground.png",});
    }

    makeWomenTee = () => {
        this.setState({tshirt_image: "/storage/uploads/women_tee.png",
        tshirt_foreground_image: "/storage/uploads/women_tee_foreground.png",});
    }

    changeColor = (color, event) => {
        this.setState({ tshirt_color: color.hex });
    }

    clickCenterImage = (event) => {
        this.setState({ center_image: <img id="center_image" className="image" alt={event.target.alt} src={event.target.src} />,
            pocket_image: null });
    }

    removeCenterImage = () => {
        this.setState({ center_image: null });
    }
    clickPocketImage = (event) => {
        this.setState({ pocket_image: <img id="pocket_image" className="image" alt={event.target.alt} src={event.target.src} />,
            center_image: null });
    }

    removePocketImage = () => {
        this.setState({ pocket_image: null });
    }

    render() {
        return (
            <div id="content">
                <span>
                    <div id="tshirt-container" className="row justify-content-center">
                        <div className="container">
                            <div>
                                <div id="tshirt_image"
                                    className="tshirt-contents image"
                                    style={{ backgroundColor: this.state.tshirt_color,
                                            backgroundImage: 'url('+this.state.tshirt_image +')'}}>
                                    {this.state.center_image}
                                    {this.state.pocket_image}
                                </div>
                                <div id="tshirt_foreground"
                                    className="tshirt-contents image"
                                    style={{backgroundImage: 'url('+this.state.tshirt_foreground_image +')'}}>
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
                </span>
            </div>
        );
    }
}
