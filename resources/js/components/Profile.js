import React, { Component } from 'react'

import "./../css/Profile.css"

import Menu from './Menu'

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatars: [],
            band: false
        };
    }

    componentWillMount(){
        let token = document.querySelector('meta[name="api-token"]').getAttribute('content');
        let init = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }

        fetch("api/avatars", init).then(res => res.json()).then(
            (result) => {
                this.setState({
                    avatars: result,
                    band: true
                });
            },
            (error) => {
                console.log("error");
            }
        )
    }

    render() {
        if(this.state.band){
            return (
                <div className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                                <Menu
                                    avatars={this.state.avatars}
                                />
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <br></br>
                                <a href="/mylab" className="btn btn-success">New avatar</a>
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
