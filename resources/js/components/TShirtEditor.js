import React, { Component } from 'react';
import { SliderPicker } from 'react-color';
import './TShirtEditor.css'
import ScrollMenu from 'react-horizontal-scrolling-menu';


let username = document.querySelector('meta[name="username"]');

export default class TShirtEditor extends Component {

    state = {
        tshirt_color: localStorage.getItem('tshirt_color') ? localStorage.getItem('tshirt_color') : '#bf4040',
        image: localStorage.getItem('image') ? localStorage.getItem('image') : null,
        image_type: localStorage.getItem('image_type') ? localStorage.getItem('image_type') : "center",
        tshirt_type: localStorage.getItem('tshirt_type') ? localStorage.getItem('tshirt_type') : "men",
        images: [],
        tshirt_images: [],
    }

    componentDidMount = () => {
        window.axios = require('axios');
        try {
            const response = axios.get('/api/images')
                .then(res => {
                    this.setState({ images: res.data });
                });
        } catch (e) {
            console.log('axios request failed:', e);
        }
    }

    makeMenTee = () => {
        localStorage.setItem('tshirt_type'+username, 'men');
        this.setState({ tshirt_type: "men" });
    }

    makeWomenTee = () => {
        localStorage.setItem('tshirt_type'+username, 'women');
        this.setState({ tshirt_type: "women" });
    }

    changeColor = (color, event) => {
        localStorage.setItem('tshirt_color'+username, color.hex);
        this.setState({ tshirt_color: color.hex });
    }

    clickCenterImage = key => {
        const image = document.getElementById(key);
        localStorage.setItem('image_type'+username, 'center');
        localStorage.setItem('image'+username, image.src);
        this.setState({
            image: image.src,
            image_type: "center"
        });
    }

    removeImage = () => {
        localStorage.setItem('image'+username, null);
        this.setState({ image: null });
    }
    clickPocketImage = key => {
        const image = document.getElementById(key);
        localStorage.setItem('image_type'+username, 'pocket');
        localStorage.setItem('image'+username, image.src);
        this.setState({
            image: image.src,
            image_type: "pocket"
        });
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
            }).then(res =>
                this.props.save()
            );
        } catch (e) {
            console.log('axios request failed:', e);
        }

    }

    render() {
        return (
            <div className="row justify-content-center">
                    <div className="col-md-6 my-center">
                        <div id="tshirt-editor-container" className="my-center">
                            <div>
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
                    </div>
                    <div className="col-md-4">
                        <div>
                            <div className="option_label">No image</div>
                            <div className="my-center">
                                <img className="image_button" alt="none" src="/storage/uploads/none.png" onClick={this.removeImage} />
                            </div>
                        </div>
                        <div>
                            <div className="option_label">Center image</div>
                            <div className="options my-center">
                                <ScrollMenu
                                    data={
                                        this.state.images.map((image, key) =>
                                            <img key={key} id={key} className="image_button"
                                                alt={key}
                                                src={image.src}
                                            />)
                                    }
                                    arrowLeft={<div className="arrow left"></div>}
                                    arrowRight={<div className="arrow right"></div>}
                                    onSelect={this.clickCenterImage.bind(this)}
                                />
                            </div>

                        </div>
                        <div>
                            <div className="option_label">Pocket image</div>

                            <div className="options my-center">
                                <ScrollMenu
                                    data={
                                        this.state.images.map((image, key) =>
                                            <img key={key} id={key} className="image_button"
                                                alt={key}
                                                src={image.src}
                                            />)
                                    }
                                    arrowLeft={<div className="arrow left"></div>}
                                    arrowRight={<div className="arrow right"></div>}
                                    onSelect={this.clickPocketImage.bind(this)}
                                />
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
                                <div className="mycenter save-btn">
                                    <button className="btn btn-primary btn-m" onClick={this.submit}>Save</button>
                                </div>}
                        </div>
                    </div>
            </div>
        );
    }
}
