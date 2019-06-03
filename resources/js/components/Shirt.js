import React, { Component } from 'react'
import axios from 'axios'

import ReactDOM from 'react-dom'



export default class Shirt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            color: this.props.color,
            shirt: ''
        };
    }


    componentDidMount() {
        axios.get(`http://localhost:8000/api/static/images/shirts/` + this.props.type + `/` + this.props.color)
            .then(res => {
                const shirt = res.data.content;
                this.setState({ shirt });
            })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type != '') {
            axios.get(`http://localhost:8000/api/static/images/shirts/` + nextProps.type + `/` + nextProps.color)
                .then(res => {
                    const newShirt = res.data.content;
                    this.setState({
                        type: nextProps.type,
                        color: nextProps.color,
                        shirt: newShirt
                    });
                })
        }
    }

    render() {
        return (
            <React.Fragment>
                <img src={`data:image/png;base64,${this.state.shirt}`} />
            </React.Fragment>
        );
    }

}
