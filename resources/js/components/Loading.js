import React, {Component} from 'react'

export default class Loading extends Component{

    render(){
        return(
            <div className="row justify-content-center h-100">                
                <div className="col-md-1 my-auto">
                    <i className="fa fa-spinner fa-spin loading"/>
                </div>
            </div>
        );
    }
}

