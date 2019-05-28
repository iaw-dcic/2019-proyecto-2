import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

export default class TodoApp extends Component {

    state = { 
        items: []
    };

    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <TodoAdd addItem={this.addItem}/>
        </div>
      );
    }
  
    addItem = (newItem) => {
      this.setState(state => ({
        items: state.items.concat(newItem)
      }));
    }
  }
