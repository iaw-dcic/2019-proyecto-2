import React, { Component } from 'react';
import axios from 'axios';
import './css/Prode.css';
import copa from './img/copa.png';
import MisProdes from './MisProdes';
import Bracket from './Bracket';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class Prode extends Component {
        constructor(){
            super();
            this.state={
                octavos : ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                cuartos : ["", "", "", "", "", "", "", ""],
                semis : ["", "", "", ""],
                final : ["", ""],
                campeon : "",
                name : "",
                prode_id: 0,
                prodes : [],
                show: 0,
                input : ""
            };
            this.handleOctavos = this.handleOctavos.bind(this);
            this.handleCuartos = this.handleCuartos.bind(this);
            this.handleSemis = this.handleSemis.bind(this);
            this.handleFinal = this.handleFinal.bind(this);
            this.handleGuardar = this.handleGuardar.bind(this);
            this.onClickCreate = this.onClickCreate.bind(this);
            this.handleEdit = this.handleEdit.bind(this);
            this.handleDelete = this.handleDelete.bind(this);
            this.onChange = this.onChange.bind(this);
            this.inputOnChange = this.inputOnChange.bind(this);
        }

        async componentDidMount () {
            window.axios = require('axios');
            let api_token = document.querySelector('meta[name="api-token"]');
            let token = document.head.querySelector('meta[name="csrf-token"]');
            window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
            var self = this;
            await axios.get('/api/octavos').then(function(response) {
                self.setState({
                    octavos : response.data
                })
            }).catch(function (error) {
                console.log(error);
             });
            this.getProdes();
            if(localStorage.getItem('api_token')==null || localStorage.getItem('api_token')==api_token.content){
                localStorage.setItem('api_token', api_token.content);
                localStorage.setItem('octavos', this.state.octavos);
                if(localStorage.getItem('campeon')!=null){
                    await this.setState({
                        cuartos : localStorage.getItem('cuartos').split(','),
                        semis : localStorage.getItem('semis').split(','),
                        final : localStorage.getItem('final').split(','),
                        campeon : localStorage.getItem('campeon'),
                        name : localStorage.getItem('name'),
                        prode_id : localStorage.getItem('prode_id'),
                        show : localStorage.getItem('show')
                    })
                }
            }
            else{
                    localStorage.clear();
                    localStorage.setItem('api_token', api_token.content);
            }
          }

    render() {
        return (
            <div className="container">


                <div className="row justify-content-center mt-5">
                    <h1>
                        Prode de la Copa Libertadores 2019
                    </h1>
                </div>

                <div className="row justify-content-center mt-5">
                    <img src={copa} className="imgsize" alt="copa"></img>
                </div>              

                <div className="row">
                    <div className="col-lg-4 mt-5 col-centered">
                        <input type="text" className="form-control" placeholder="Nombre del Prode" required value={this.state.input} onChange={this.inputOnChange}></input>
                        <div className="row justify-content-center">
                            <button className="btn btn-primary btnconfig mt-3" onClick={this.onClickCreate}>Crear Prode</button>
                        </div>
                    </div>
                </div>

                <MisProdes
                    prodes = {this.state.prodes}
                    edit = {this.handleEdit}
                    delete = {this.handleDelete}
                />

                {this.state.show==1 ?
                <Bracket
                    name = {this.state.name}
                    octavos = {this.state.octavos}
                    cuartos = {this.state.cuartos}
                    semis = {this.state.semis}
                    final = {this.state.final}
                    campeon = {this.state.campeon}
                    save = {this.handleGuardar}
                    onChange = {this.onChange}
                    handleOctavos = {this.handleOctavos}
                    handleCuartos = {this.handleCuartos}
                    handleSemis = {this.handleSemis}
                    handleFinal = {this.handleFinal}
                    handleCampeon = {this.handleCampeon}
                />
                :null
                }

            </div>
        );
    }

    async onChange(e){
        await this.setState({
            name : e.target.value
        })
        this.setLocal(1);
    }

    async inputOnChange(e){
        await this.setState({
            input : e.target.value
        })
        this.setLocal(1);
    }

    async getProdes(){
        var self = this;
            await axios.get('/api/prode').then(function(response) {
                self.setState({
                    prodes : response.data
                })
              }).catch(function (error) {
                  console.log(error);
            });
    }

    async onClickCreate(){
        if(this.state.input != ""){
            await this.setState({
                name : this.state.input,
                cuartos : ["", "", "", "", "", "", "", ""],
                semis : ["", "", "", ""],
                final : ["", ""],
                campeon : "",
                input : ""
            })
            let prode = await axios.post('/api/prode', {
                data : this.state
            });

            await this.setState({
                prode_id : prode.data.id,
                show : 1
            })
            this.setLocal(1);

            this.getProdes();
        }
        else
            this.alerta();
    }

    alerta = () => {
        confirmAlert({
          title: 'Error',
          message: 'Debe ingresarle un nombre al Prode',
          buttons: [
            {
              label: 'OK',
            }
          ]
        });
      };

    setLocal(show){
        localStorage.setItem('name', this.state.name);
        localStorage.setItem('octavos', this.state.octavos);
        localStorage.setItem('cuartos', this.state.cuartos);
        localStorage.setItem('semis', this.state.semis);
        localStorage.setItem('final', this.state.final);
        localStorage.setItem('campeon', this.state.campeon);
        localStorage.setItem('prode_id', this.state.prode_id);
        localStorage.setItem('show', show);
    }

    handleGuardar(){
        if(this.state.name!=""){
            axios.put('/api/prode', {
                data : this.state
            });
            this.getProdes();
        }
        else{
            this.alerta();
        }
    }

    async handleEdit(e){
        let id = e.target.id;
        var self = this;
        await axios.get('/api/prode/'+id).then(function(response) {
            let campeon = "";
            if(response.data.campeon!=null)
                campeon = response.data.campeon;
            self.setState({
                octavos : response.data.octavos,
                cuartos : response.data.cuartos,
                semis : response.data.semis,
                final : response.data.final,
                campeon : campeon,
                name : response.data.name,
                prode_id : id,
                show : 1
            })
        }).catch(function (error) {
            console.log(error);
         });
         this.setLocal(1);

    }

    async handleDelete(id){
        var self = this;
        await axios.delete('/api/prode/'+id).then(function(response) {
            if(self.state.prode_id==id){
                self.setState({
                    cuartos : ["", "", "", "", "", "", "", ""],
                    semis : ["", "", "", ""],
                    final : ["", ""],
                    campeon : "",
                    name : "",
                    prode_id : 0,
                    prodes : response.data,
                    show : 0
                })
                    self.setLocal(0);
                }
                else{
                    self.setState({
                        prodes : response.data
                    })
                }
            }).catch(function (error) {
                console.log(error);
        });
    }

    async handleOctavos(e){
        if(e.target.innerHTML != ""){
            let pos = Math.floor(e.target.id/2);
            let cuartosAux = this.state.cuartos;
            let equipo = cuartosAux[pos];
            if(equipo != "" && equipo != e.target.innerHTML)
                this.comprobarSemis(equipo, Math.floor(pos/2));
            cuartosAux[pos] = e.target.innerHTML;
            await this.setState({
                cuartos : cuartosAux
            })
            this.setLocal(1);
        }
    }

    async handleCuartos(e){
        if(e.target.innerHTML != ""){
            let pos = Math.floor(e.target.id/2);
            let semisAux = this.state.semis;
            let equipo = semisAux[pos];
            if(equipo != "" && equipo != e.target.innerHTML)
                this.comprobarFinal(equipo, Math.floor(pos/2));
            semisAux[pos] = e.target.innerHTML;
            await this.setState({
                semis : semisAux
            })
            this.setLocal(1);
        }
    }

    async handleSemis(e){
        if(e.target.innerHTML != ""){
            let pos = Math.floor(e.target.id/2);
            let finalAux = this.state.final;
            let equipo = finalAux[pos];
            if(equipo != "" && equipo != e.target.innerHTML)
                this.comprobarCampeon(equipo, Math.floor(pos/2));
            finalAux[pos] = e.target.innerHTML;
            await this.setState({
                final : finalAux
            })
            this.setLocal(1);
        }
    }

    async handleFinal(e){
        if(e.target.innerHTML != ""){
            let campeonAux = e.target.innerHTML;
            await this.setState({
                campeon : campeonAux
            })
            this.setLocal(1);
        }
    }

    async comprobarSemis(name, pos){
        let semisAux = this.state.semis;
        if(semisAux[pos] == name){
            this.comprobarFinal(name, Math.floor(pos/2));
            semisAux[pos] = "";
            await this.setState({
                semis : semisAux
            })
            this.setLocal(1);
        }
    }

    async comprobarFinal(name, pos){
        let finalAux = this.state.final;
        if(finalAux[pos] == name){
            this.comprobarCampeon(name);
            finalAux[pos] = "";
            await this.setState({
                final : finalAux
            })
            this.setLocal(1);
        }
    }

    async comprobarCampeon(name){
        let campeonAux = this.state.campeon;
        if(campeonAux == name){
            campeonAux = "";
            await this.setState({
                campeon : campeonAux
            })
            this.setLocal(1);
        }
    }
    
}
