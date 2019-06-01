import React, { Component } from 'react';
import { SliderPicker } from 'react-color';
import './TShirtEditor.css'


export default class TShirtEditor extends Component {

    state = {
        tshirt_color: localStorage.getItem('tshirt_color') ? localStorage.getItem('tshirt_color') : '#bf4040',
        image: localStorage.getItem('image') ? localStorage.getItem('image') : null,
        image_type: localStorage.getItem('image_type') ? localStorage.getItem('image_type') : "center",
        tshirt_type: localStorage.getItem('tshirt_type') ? localStorage.getItem('tshirt_type') : "men",
    }

    makeMenTee = () => {
        localStorage.setItem('tshirt_type', 'men');
        this.setState({ tshirt_type: "men" });
    }

    makeWomenTee = () => {
        localStorage.setItem('tshirt_type', 'women');
        this.setState({ tshirt_type: "women" });
    }

    changeColor = (color, event) => {
        localStorage.setItem('tshirt_color', color.hex);
        this.setState({ tshirt_color: color.hex });
    }

    clickCenterImage = (event) => {
        localStorage.setItem('image_type', 'center');
        localStorage.setItem('image', event.target.src);
        this.setState({
            image: event.target.src,
            image_type: "center"
        });
    }

    removeCenterImage = () => {
        localStorage.setItem('image', null);
        this.setState({ image: null });
    }
    clickPocketImage = (event) => {
        localStorage.setItem('image_type', 'pocket');
        localStorage.setItem('image', event.target.src);
        this.setState({
            image: event.target.src,
            image_type: "pocket"
        });
    }

    removePocketImage = () => {
        localStorage.setItem('image', null);
        this.setState({ image: null });
    }

    submit = event => {
        event.preventDefault();
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        if (token)
            window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        if (api_token)
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        try {
            const response = axios.post('/api/tshirts', {
                tshirt_color: this.state.tshirt_color,
                image: this.state.image,
                image_type: this.state.image_type,
                tshirt_type: this.state.tshirt_type,
            });
            this.props.save();
        } catch (e) {
            console.log('axios request failed:', e);
        }

    }

    render() {
        return (
            <div id="content">
                <span>
                    <div id="tshirt-editor-container" className="row justify-content-center">
                        <div className="container">
                            <div>
                                <div id="tshirt_image"
                                    className={"tshirt-contents image " + this.state.tshirt_type + "_image"}
                                    style={{ backgroundColor: this.state.tshirt_color }}>
                                    {this.state.image != null &&
                                        <img className={'image editor-' + this.state.image_type} alt="image" src={this.state.image} />
                                    }
                                </div>
                                <div id="tshirt_foreground"
                                    className={"tshirt-contents image " + this.state.tshirt_type + "_foreground"}>
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
                        {document.querySelector('meta[name="api-token"]') &&
                            <div className="row justify-content-center save-btn">
                                <button className="btn btn-primary btn-m" onClick={this.submit}>Save</button>
                            </div>}
                    </div>
                </span>
            </div>
        );
    }
}
