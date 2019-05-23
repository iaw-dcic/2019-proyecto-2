import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AvatarView extends Component {

    render() {
        return (
            <div>
                {this.props.avatar.element1}
                {this.props.avatar.element2}
                {this.props.avatar.element3}
            </div>
        );
    }

}