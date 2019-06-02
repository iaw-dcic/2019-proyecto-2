import React, { Component } from 'react'

class Errors extends Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.error){
            return(
                <div className="alert alert-danger" role="alert">
                    Error: {this.props.message}
                </div>
            );
        }
        else{
            return null;
        }
    }

}

export default Errors