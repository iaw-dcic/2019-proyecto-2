import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'


export default class TodoApp extends Component {

    state = { 
      isLoaded: false,
      error: null,
      items: []
    };

    componentDidMount() {
      /* fetch API in action */
      fetch('/api/resources')
        .then(response => {
          return response.json();
        })
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items.bodyitems,              
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    renderApp(){
      const { error, isLoaded, items } = this.state;
      if (error) {
        return (
          <div>
            Error: {error.message}
          </div>
        );
      } 
      else if (!isLoaded) {
        return (
          <div>
            Loading...
          </div>
        );
      } 
      else {
        return (
          <div>                
            <h3>TO:DO</h3>
            <TodoList items={this.state.items} />
            <TodoAdd addItem={this.addItem}/>          
          </div>
        );
      }
    }

    render() {
      return (
        <div className="container" style={{marginTop: 60 + 'px'}}>
          <div className="row justify-content-center">
            <div className="col-md-8">
              {this.renderApp()}
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
