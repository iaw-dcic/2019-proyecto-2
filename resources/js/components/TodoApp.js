import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

export default class TodoApp extends Component {

    state = { 
        items: []
    };

    render() {
      return (
        <div className="container" style={{marginTop: 60 + 'px'}}>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <TodoAdd addItem={this.addItem}/>
              </div>
            </div>
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
