import React, {Component} from 'react'

export default class Loading extends Component{

    render(){
        return(
            <div className="row justify-content-center">                
                <div className="col-md-1">
                    <i className="fa fa-spinner fa-spin loading"/>
                </div>
            </div>
        );
    }
}

