import React, { Component } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import ReactDOM from 'react-dom'

export default class Shirt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shirtImage: '',
            decorationImage: '',
            received_shirt_image: false,
        };
    }


    componentDidMount() {
        if (this.props.shirt.id != 0 && this.props.received_shirts_images) {
            this.loadShirtImage(this.props);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.shirt.id != 0 && nextProps.received_shirts_images) {
            this.loadShirtImage(nextProps);
            if (nextProps.shirt.decoration !== null) {
                axios.get(`/api/static/images/decorations/` + nextProps.shirt.decoration)
                    .then(res => {
                        this.setState({ decorationImage: res.data.decoration });
                    })
            }
            else {
                this.setState({ decorationImage: '' })
            }
        }
    }

    render() {
        let shirtImage = this.showShirt();
        return (
            <React.Fragment>
                {shirtImage}
            </React.Fragment>
        );
    }

    showShirt = () => {
        if (this.state.received_shirt_image) {
            return (
                <React.Fragment>
                    <div className="parent">
                        <img className="shirt" src={`data:image/png;base64,${this.state.shirtImage}`} />
                        {this.props.shirt.decoration !== null && <img className="decoration" src={`data:image/png;base64,${this.state.decorationImage}`} />}
                    </div>
                </React.Fragment>);
        }
        else {
            return (
                <React.Fragment>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </React.Fragment>
            )
        }
    }

    loadShirtImage = (propState) => {
        let images = propState.shirtsImages;
        if (propState.shirt.type === 'tshirt')
            images = images.tshirt;
        else if (propState.shirt.type === 'longsleeve')
            images = images.longsleeve;
        for (let key in images) {
            if (key === propState.shirt.color) {
                this.setState({ shirtImage: images[key], received_shirt_image: true });
            }
        }
    }

}
