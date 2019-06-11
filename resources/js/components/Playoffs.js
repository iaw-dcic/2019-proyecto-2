import React, { Component } from 'react';
import Octavos from './Octavos';
import Cuartos from './Cuartos';
import Semis from './Semis';
import FinalyCampeon from './FinalyCampeon';
import './partidos.css'
export default class Playoffs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            c0j1: [], c0j2: [],
            c1j1: [], c1j2: [],
            c2j1: [], c2j2: [],
            c3j1: [], c3j2: [],
            s1j1: [], s1j2: [],
            s2j1: [], s2j2: [],
            j1: [], j2: [],
            campeon: [],
            user: [],
            pronost: null
        }
        this.baseState = this.state;
    }

    componentWillMount() {
        for (let key in this.state) {
            // if the key exists in localStorage
            if (localStorage.hasOwnProperty(key)) {
                // get the key's value from localStorage
                let value = localStorage.getItem(key);

                // parse the localStorage string and setState
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch (e) {
                    // handle empty string
                    this.setState({ [key]: value });
                }
            }

        }
    }


    render() {
        let oct = <><div className="col-2 cuartos">
            <p> </p>
        </div>
            <div className="col-4 semis">
                <p> </p>
            </div>
            <div className="col-2 cuartos">
                <p> </p>
            </div> </>

        return <div>
            <div className="row " >
                <div className="col-2 header">
                    <p>8vos</p>
                </div>
                <div className="col-2 header">
                    <p>4tos</p>
                </div>
                <div className="col-4 header text-center">
                    <p>Semis</p>
                </div>
                <div className="col-2  header">
                    <p>4tos</p>
                </div>
                <div className="col-2 header">
                    <p>8vos</p>
                </div>
            </div>
            <div className="partido row " >
                <div className="col-2 octavos">
                    <Octavos i={0} setJugador={this.setJugador} />
                </div>
                {oct}
                <div className="col-2 octavos">
                    <Octavos i={1} setJugador={this.setJugador} />
                </div>
            </div>

            <div className="partido row " >
                <div className="col-2 octavos"></div>
                <div className="col-2 cuartos">
                    <Cuartos i={0} jugador1={this.state.c0j1} jugador2={this.state.c0j2} setJugador={this.setJugador} />
                </div>
                <div className="col-4 semis"> </div>
                <div className="col-2 cuartos">
                    <Cuartos i={1} jugador1={this.state.c1j1} jugador2={this.state.c1j2} setJugador={this.setJugador} />
                </div>
                <div className="col-2 octavos"> </div>
            </div>
            <div className="partido row " >
                <div className="col-2 octavos">
                    <Octavos i={2} setJugador={this.setJugador} />
                </div>
                {oct}
                <div className="col-2 octavos">
                    <Octavos i={3} setJugador={this.setJugador} />
                </div>
            </div>

            <div className="partido row " >
                <div className="col-2 octavos"> </div>
                <div className="col-2 cuartos">  </div>
                <div className="col-2">
                    <Semis i={0} jugador1={this.state.s1j1} jugador2={this.state.s1j2} setJugador={this.setJugador} />
                </div>
                <div className="col-2">
                    <Semis i={1} jugador1={this.state.s2j1} jugador2={this.state.s2j2} setJugador={this.setJugador} />
                </div>
                <div className="col-2 cuartos"> </div>
                <div className="col-2 octavos">  </div>
            </div>
            <div className="partido row " >
                <div className="col-2 octavos">
                    <Octavos i={4} setJugador={this.setJugador} />
                </div>
                {oct}
                <div className="col-2 octavos">
                    <Octavos i={5} setJugador={this.setJugador} />
                </div>
            </div>

            <div className="partido row " >
                <div className="col-2 octavos"> </div>
                <div className="col-2 cuartos">
                    <Cuartos i={2} jugador1={this.state.c2j1} jugador2={this.state.c2j2} setJugador={this.setJugador} />
                </div>
                <div className="col-4 semis"> </div>
                <div className="col-2 cuartos">
                    <Cuartos i={3} jugador1={this.state.c3j1} jugador2={this.state.c3j2} setJugador={this.setJugador} />
                </div>

                <div className="col-2 octavos"></div>
            </div>

            <div className="partido row " >
                <div className="col-2 octavos">
                    <Octavos i={6} setJugador={this.setJugador} />
                </div>
                {oct}
                <div className="col-2 octavos">
                    <Octavos i={7} setJugador={this.setJugador} />
                </div>
            </div>
            <FinalyCampeon campeon={this.state.campeon}
                j1={this.state.j1} j2={this.state.j2} setJugador={this.setCampeon} />

            <div className="row">
                <button type="button" className="btn btn-primary"
                    onClick={(e) => this.handleCuartos()}>
                    Guardar
            </button>
            </div>
        </div >

    }

    setJugador = (newjugador, i, arreglo) => {

        var nombre = arreglo[i];
        this.setState({
            [nombre]: newjugador
        });
        localStorage.setItem(nombre, JSON.stringify(newjugador));
    }

    setCampeon = (newjugador) => {

        this.setState({
            campeon: newjugador
        });
        localStorage.setItem("campeon", JSON.stringify(newjugador));
    }

    async handleCuartos() {
        await this.addPronostico();

        //  console.log("hanle cuartos : " + this.state.pronost.id);
        var pro = this.state.pronost.id;

        let token = document.head.querySelector('meta[name="csrf-token"]');

        if (token) {
            window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        } else {
            console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
        }

        try {
            const response = await axios.post('/pr2/api/insert', {
                pronostico: pro,
                c0j1: this.state.c0j1.id,
                c0j2: this.state.c0j2.id,
                c1j1: this.state.c1j1.id,
                c1j2: this.state.c1j2.id,
                c2j1: this.state.c2j1.id,
                c2j2: this.state.c2j2.id,
                c3j1: this.state.c3j1.id,
                c3j2: this.state.c3j2.id,
                s1j1: this.state.s1j1.id,
                s1j2: this.state.s1j2.id,
                s2j1: this.state.s2j1.id,
                s2j2: this.state.s2j2.id,
                f1: this.state.j1.id,
                f2: this.state.j2.id,
                campeon: this.state.campeon.id,
            });
            for (let key in this.state) {
                // if the key exists in localStorage
                if (localStorage.hasOwnProperty(key))
                    localStorage.removeItem(key);

            }
            this.setState(this.baseState);
            localStorage.setItem("use", "false");
            alert("Su pronostico se guardo correctamente");
            // console.log('Returned data:', response);
        } catch (e) {
            console.log('axios request failed:', e);
        }



    }
    async addPronostico() {
        if (this.state.c0j1.id == null || this.state.c0j2.id == null ||
            this.state.c1j1.id == null || this.state.c1j2.id == null ||
            this.state.c2j1.id == null || this.state.c2j2.id == null ||
            this.state.c3j1.id == null || this.state.c3j2.id == null ||
            this.state.s1j1.id == null || this.state.s1j2.id == null ||
            this.state.s2j1.id == null || this.state.s2j2.id == null ||
            this.state.j1.id == null || this.state.j2.id == null ||
            this.state.campeon.id == null) {
            alert("no se puede guardar el cuadro sin completar");

        }
        else {
            let api_token = document.querySelector('meta[name="api-token"]');
            let token = document.head.querySelector('meta[name="csrf-token"]');

            if (token && api_token) {
                window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
            } else {
                console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
            }

            try {
                const response = await axios.post('/pr2/api/insertpronostico');
                //    console.log('Returned data:', response);
            } catch (e) {
                console.log('axios request failed:', e);
            }
            await this.getUltimo();
            this.props.agregarPronostico(this.state.pronost);
            localStorage.setItem("pronost", JSON.stringify(this.state.pronost));
        }

    }
    async  getUltimo() {

        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        var miInit = {
            headers: {
                'X-CSRF-TOKEN': token.content,
                'Authorization': 'Bearer ' + api_token.content
            }
        }
        const res = await fetch('/pr2/api/ultimopronostico', miInit)
        const something = await res.json();
        this.setState({ pronost: something })

    }


}



