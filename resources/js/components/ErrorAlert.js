import React, { Component } from 'react';

export default class ErrorAlert extends Component {
  render() {
    return (
      <div ref="alert" className="alert alert-error" role="alert">
        {this.props.message}
      </div>
    );
  }
}
