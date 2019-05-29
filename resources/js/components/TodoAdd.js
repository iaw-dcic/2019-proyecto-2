import React, { Component } from 'react'

export default class TodoAdd extends Component {

    state = { 
        text: '' 
    };

    render() {
      return (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Que se necesita hacer?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add
            </button>
          </form>
      );
    }
  
    handleChange = (e) => {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.props.addItem(newItem);
      this.setState({ text: ''});
    }
  }
