import React, { Component } from 'react';
import './TShirt.css'


export default class TShirt extends Component {

    state = {
        delete_button: null
    }

    onMouseOver = () => {
        this.setState({
            delete_button:
                <div className="delete_button" onClick={this.delete}></div>
        });
    }
    onMouseLeave = () => {
        this.setState({ delete_button: null });
    }

    delete = event => {
        event.preventDefault();
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');
        if (token && api_token) {
            window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

            try {
                const response = axios.delete('/api/tshirts/'+this.props.id)
                    .then(
                        this.props.delete()
                    );
            } catch (e) {
                console.log('axios request failed:', e);
            }
        }
    }

    getColor = () => {
        return this.props.tshirt_color ? this.props.tshirt_color : '#ffffff'
    }


    getType = () => {
        return this.props.tshirt_type ? this.props.tshirt_type : 'men'
    }

    getImage = () => {
        return this.props.image ? this.props.image : null;
    }

    getImageType = () => {
        return this.props.image_type ? this.props.image_type : 'center'
    }

    render() {
        return (
            <div id="tshirt-container" className="row justify-content-center large_image_button">
                <div className="container">
                    <div
                        onMouseEnter={this.onMouseOver}
                        onMouseLeave={this.onMouseLeave}>
                        <div id="tshirt_image"
                            className={"tshirt-contents image " + this.getType() + "_image"}
                            style={{ backgroundColor: this.getColor() }}>
                            {this.getImage() != null &&
                                <img className={'image ' + this.getImageType()} alt="image" src={this.getImage()} />
                            }
                        </div>
                        <div id="tshirt_foreground"
                            className={"tshirt-contents image " + this.getType() + "_foreground"}>
                        </div>
                        {this.state.delete_button}
                    </div>
                </div>
            </div>
        );
    }
}
