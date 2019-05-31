import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switchm, Link } from 'react-router-dom'
import { createHashHistory } from 'history'
import Prode from './Prode'
export const history = createHashHistory();
class App extends Component {



    constructor() {
        super();
        this.state = {
            partidosDelUsuario: [],
        }
    }

    componentDidMount() {

        axios.get("/partidos").then(response => {
            console.log(response["data"]);
            var partidosDelUsuario = response["data"];
            this.setState({ partidosDelUsuario });
        }).catch(error => {
            console.log("this is error", error);
        });
    }

    nuevoProde = () => {
        console.log("entro");
        this.context.history.push('/prode')
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
                                        return <button type="button" className="btn btn-primary text-center center" key={lista.id} value={lista.id}>Prode existente</button>
                                    })
                                }
                                {/* <button type="button" className="btn btn-primary text-center center">Samsung</button>
                                <button type="button" className="btn btn-primary text-center center">Sony</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Route path="/prode" component={Prode}></Route>

            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))