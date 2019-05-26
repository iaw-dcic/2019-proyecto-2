import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import Navbar from './Navbar'
import Card from './Card';

export default class TodoApp extends Component {

    state = { 
        items: []
    };

    render() {
      return (
        
        <div>
            <Navbar />
            
            <div className="container">
                <Card />
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <TodoAdd addItem={this.addItem}/>
            </div>
        </div>
      );
    }

    addItem = (newItem) => {
      this.setState(state => ({
        items: state.items.concat(newItem)
      }));
    }
  }