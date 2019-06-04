import React, { Component } from 'react';

export default class SuccessAlert extends Component {
  render() {
    return (
      <div ref="alert" className="alert alert-success" role="alert">
        Tu avatar se guardo con exito.
      </div>
    );
  }
}
