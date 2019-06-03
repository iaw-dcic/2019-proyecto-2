import React, { Component } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import { fabric } from 'fabric'
import ReactDOM from 'react-dom'



export default class Shirt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            color: this.props.color,
            shirt: '',
            received_shirt_image: false,
        };
    }


    componentDidMount() {
        axios.get(`http://localhost:8000/api/static/images/shirts/` + this.props.type + `/` + this.props.color)
            .then(res => {
                const shirt = res.data.content;
                this.setState({ shirt, received_shirt_image: true });
            })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id != 0) {
            axios.get(`http://localhost:8000/api/static/images/shirts/` + nextProps.type + `/` + nextProps.color)
                .then(res => {
                    const newShirt = res.data.content;
                    this.setState({
                        type: nextProps.type,
                        color: nextProps.color,
                        shirt: newShirt,
                        received_shirt_image: true
                    });
                })
        }
    }

    render() {
        let shirt = this.showShirt();
        return (
            <React.Fragment>
                {shirt}
            </React.Fragment>
        );
    }

    showShirt = () => {
        if (this.state.received_shirt_image) {
            return (<React.Fragment><img src={`data:image/png;base64,${this.state.shirt}`} /></React.Fragment>);
        }
        else {
            return(
                <React.Fragment>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </React.Fragment>
            )
        }
    }

}
