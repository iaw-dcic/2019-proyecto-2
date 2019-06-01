import React, { Component } from 'react';
import './TShirt.css'


export default class TShirt extends Component {

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
                    <div>
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
                    </div>
                </div>
            </div>
        );
    }
}
