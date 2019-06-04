import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SeccionCrear from './SeccionCrear';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<SeccionCrear />
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react-app'));
