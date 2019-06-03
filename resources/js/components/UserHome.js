import React , { Component } from 'react'

import UserAvatars from './UserAvatars'
import Errors from './Errors'

class UserHome extends Component {

    constructor(props){
        super(props);
        this.state={
            user: null,
            status: null,
            isLoaded: true,
            error: false,
        }
    }

    fetchUser(){
        const bearer = 'Bearer ' + this.props.api_token;
        console.log("USERHOME: Fetching user");
        fetch('/api/user', { 
            method: 'GET',
            headers: {
                'Authorization': bearer, 
                'Accept': 'application/json'  
            }
        })
        .then( 
            (response) => {
                return response.json();
            }
        )
        .then(
            (result) => {
                console.log("USERHOME: Fetching user finished");
                if (result.message){
                    this.setState({
                        isLoaded: true,
                        error: true,
                        status: result.message,
                    });
                }
                else{
                    this.setState({
                        isLoaded: true,
                        user: result,
                    });
                }
            }
        )
    }

    componentDidMount(){
        // Es necesario obtener los datos del usuario?
        //this.fetchUser();
    }

    renderApp(){
        const {error, isLoaded} = this.state;
        if (isLoaded){
            if (error){
                return(
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <Errors 
                                error={this.state.error}
                                message={this.state.status}
                            />
                        </div>
                    </div>
                );
            }
            else{
                return(
                    <UserAvatars 
                        api_token={this.props.api_token}
                        items={this.props.items}
                        user={this.state.user}
                    />
                );
            }            
        }
        else {
            return(
                <div className="row justify-content-center testing">                
                    <div className="col-md-1 testing">
                        <span>
                            <i className="fa fa-spinner fa-spin loading"/>
                        </span>
                    </div>
                </div>
            );
        }

    }

    render(){
        return(
            <div className="container testing">                
                {this.renderApp()}
            </div>
        );
    }


}

export default UserHome;