import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switchm, Link } from 'react-router-dom'
import Prode from './Prode'
class App extends Component {



    constructor() {
        super();
    }

    state = {
        partidosDelUsuario: [],
    }

    componentDidMount() {
        this.actualizarPartidosUsuarios();
    }

    actualizarPartidosUsuarios = () => {
        axios.get("/partidos").then(response => {
            var partidosDelUsuario = response["data"];
            this.setState({ partidosDelUsuario });
        }).catch(error => {
            console.log("this is error", error);
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-3">
                            <div className="btn-group col-md-offset-3">
                                <Link to="/prode">
                                    <button type="button" className="btn btn-primary text-center center">Nuevo prode</button>
                                </Link>
                                {
                                    this.state.partidosDelUsuario.map(lista => {
                                        return (
                                            <Link to={"/prode/" + lista.id} key={lista.id}>
                                                <button type="button" className="btn btn-primary text-center center" key={lista.id} value={lista.id}>Prode existente</button>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                <Route
                    exact path="/prode/:listaId"
                    component={Prode}>
                </Route>

                <Route
                    exact path="/prode"
                    render={(props) => <Prode {...props} actualizarPartidosUsuarios={this.actualizarPartidosUsuarios} />}
                />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))