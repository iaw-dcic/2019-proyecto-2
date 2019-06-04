import React, { Component } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import ReactDOM from 'react-dom'

export default class Shirt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.shirt.type,
            color: this.props.shirt.color,
            shirtImage: '',
            decorationImage: '',
            received_shirt_image: false,
        };
    }


    componentDidMount() {
        if (this.props.shirt.id != 0) {
            axios.get(`/api/static/images/shirts/` + this.props.shirt.type + `/` + this.props.shirt.color)
                .then(res => {
                    const shirtImage = res.data.content;
                    this.setState({ shirtImage, received_shirt_image: true });
                })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.shirt.id != 0) {
            axios.get(`/api/static/images/shirts/` + nextProps.shirt.type + `/` + nextProps.shirt.color)
                .then(res => {
                    const newShirt = res.data.content;
                    this.setState({
                        type: nextProps.shirt.type,
                        color: nextProps.shirt.color,
                        shirtImage: newShirt,
                        received_shirt_image: true,
                    });
                });
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

}
