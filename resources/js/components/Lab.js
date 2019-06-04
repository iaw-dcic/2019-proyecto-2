import React, { Component } from 'react'

import Body from './Body' 

import "./../css/Lab.css"

export default class Lab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bodies: [],
            eyes: [],
            hairs: [],
            mouths: [],
            noses: [],
            name: "",
            button: "Create",
            con: 0,
            band: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        let csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        let token = document.querySelector('meta[name="api-token"]').getAttribute('content');
        let init = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }

        fetch("/api/bodies", init).then(res => res.json()).then(
            (result) => {
                this.setState({
                    bodies: result,
                    con: this.state.con + 1
                });
            },
            (error) => {
                console.log("error");
            }
        )

        fetch("/api/eyes", init).then(res => res.json()).then(
            (result) => {
                this.setState({
                    eyes: result,
                    con: this.state.con + 1
                });
            },
            (error) => {
                console.log("error");
            }
        )

        fetch("/api/hairs", init).then(res => res.json()).then(
            (result) => {
                this.setState({
                    hairs: result,
                    con: this.state.con + 1
                });
            },
            (error) => {
                console.log("error");
            }
        )

        fetch("/api/mouths", init).then(res => res.json()).then(
            (result) => {
                this.setState({
                    mouths: result,
                    con: this.state.con + 1
                });
            },
            (error) => {
                console.log("error");
            }
        )

        fetch("/api/noses", init).then(res => res.json()).then(
            (result) => {
                this.setState({
                    noses: result,
                    con: this.state.con + 1
                });
            },
            (error) => {
                console.log("error");
            }
        )

        let { match: { params } } = this.props;
        let avatar_id = params.id;

        if(avatar_id != null){
            this.setState({
                band: false
            });
        }
    }

    componentDidMount() {
        
    }

    sortArray(array, option){
        var aux = array[0];
        if(option == 1){
            let temp = array[array.length-1];
            for(var i = array.length-1 ; i > 0 ; i--){
                array[i] = array[i-1];
            }
            array[0] = temp;

        }else if(option == -1){
            for(var x = 0 ; x < array.length-1 ; x++){
                array[x] = array[x+1];
            }
            array[array.length-1] = aux;
        }
        return array;
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleClick(option, part) {
        switch(part){
            case "body":
                this.sortArray(this.state.bodies, option);
                break;
            case "eyes":
                this.sortArray(this.state.eyes, option);
                break;
            case "hair":
                this.sortArray(this.state.hairs, option);
                break;
            case "nose":
                this.sortArray(this.state.noses, option);
                break;
            case "mouth":
                this.sortArray(this.state.mouths, option);
                break;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let token = document.querySelector('meta[name="api-token"]').getAttribute('content');

        let data = {
            name: document.getElementById("name").value,
            body_id: this.state.bodies[0].id,
            eyes_id: this.state.eyes[0].id,
            hair_id: this.state.hairs[0].id,
            nose_id: this.state.noses[0].id,
            mouth_id: this.state.mouths[0].id
        };

        let { match: { params } } = this.props;
        let avatar_id = params.id;
        let method;
        let url;




        if(avatar_id != null){
            url = "/api/avatars/"+avatar_id;
            method = "PUT";
        }else{
            url = "/api/avatars";
            method = "POST";
        }

        let init = {
            method: method,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        }


        fetch(url, init).then(res => res.json())
        .catch(error => "ok")
        .then(response => window.location="/profile");
    }

    loadAvatar(avatar_id){
        let token = document.querySelector('meta[name="api-token"]').getAttribute('content');
        let init = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }

        fetch("/api/avatars/" + avatar_id, init).then(res => res.json()).then(
            (result) => {     
                let {bodies, eyes, hairs, mouths, noses} = this.state;

                while(result.body.id != bodies[0].id){
                    this.sortArray(bodies, -1);
                }

                while(result.eyes.id != eyes[0].id){
                    this.sortArray(eyes, -1);
                }

                while(result.mouth.id != mouths[0].id){
                    this.sortArray(mouths, -1);
                }

                while(result.nose.id != noses[0].id){
                    this.sortArray(noses, -1);
                }

                while(result.hair.id != hairs[0].id){
                    this.sortArray(hairs, -1);
                }

                this.setState({
                    name: result.name,
                    band: true,
                    button: "Edit"
                });
            },
            (error) => {
                console.log("error");
            }
        )
    }

    render() {
        let { match: { params } } = this.props;
        let avatar_id = params.id;

        if(this.state.con == 5 && !this.state.band){
            this.loadAvatar(avatar_id);
        }

        if(this.state.con == 5 && this.state.band){
            return (
                <div className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div id="card-body" className="card-body">
                                        <Body 
                                            body={this.state.bodies[0]}
                                            eyes={this.state.eyes[0]}
                                            mouth={this.state.mouths[0]}
                                            hair={this.state.hairs[0]}
                                            nose={this.state.noses[0]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card options-avatar">
                                    <ul className="list-group list-group-flush">
                                        <form onSubmit={this.handleSubmit}>
                                            <li className="list-group-item">
                                                <input value={this.state.name} onChange={this.handleChange} id="name" name="name" type="text" className="form-control" placeholder="Avatar name" required/>
                                            </li>
                                            <li className="list-group-item">
                                                <a onClick={() => this.handleClick(-1, "body")} href="#" className="previous round buttons-options">&#8249;</a>
                                                <label className="text">BODY</label>
                                                <a onClick={() => this.handleClick(1, "body")} href="#" className="next round buttons-options">&#8250;</a>
                                            </li>
                                            <li className="list-group-item">
                                                <a onClick={() => this.handleClick(-1, "eyes")} href="#" className="previous round buttons-options">&#8249;</a>
                                                <label className="text">EYES</label>
                                                <a onClick={() => this.handleClick(1, "eyes")} href="#" className="next round buttons-options">&#8250;</a>
                                            </li>
                                            <li className="list-group-item">
                                                <a onClick={() => this.handleClick(-1, "hair")} href="#" className="previous round buttons-options">&#8249;</a>
                                                <label className="text">HAIR</label>
                                                <a onClick={() => this.handleClick(1, "hair")} href="#" className="next round buttons-options">&#8250;</a>
                                            </li>
                                            <li className="list-group-item">
                                                <a onClick={() => this.handleClick(-1, "nose")} href="#" className="previous round buttons-options">&#8249;</a>
                                                <label className="text">NOSE</label>
                                                <a onClick={() => this.handleClick(1, "nose")} href="#" className="next round buttons-options">&#8250;</a>
                                            </li>
                                            <li className="list-group-item">
                                                <a onClick={() => this.handleClick(-1, "mouth")} href="#" className="previous round buttons-options">&#8249;</a>
                                                <label className="text">MOUTH</label>
                                                <a onClick={() => this.handleClick(1, "mouth")} href="#" className="next round buttons-options">&#8250;</a>
                                            </li>
                                            <li className="list-group-item">
                                                <button className="btn btn-success">{this.state.button}</button>
                                            </li>
                                        </form>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="card">
                                loading....
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
