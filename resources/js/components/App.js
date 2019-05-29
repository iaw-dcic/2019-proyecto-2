import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import TShirt from './TShirt'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.tshirt = React.createRef();
    }

    handleColorChange(color) {
        this.tshirt.changeColor(color);
    }

    render() {
        return (
            <BrowserRouter>
                <div id="content" className="row justify-content-center">
                    <TShirt />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))
