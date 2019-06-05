import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BurgerBuilder from "./../containers/BurgerBuilder/BurgerBuilder";
import SavedBurgers from "../containers/SavedBurgers/SavedBurgers";
import Login from "../containers/Login/Login";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/savedBurgers" component={SavedBurgers} />
                        <Route path="/" component={BurgerBuilder} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

