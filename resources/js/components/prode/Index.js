import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';

export default class Index extends Component {
    render () {
    return (
        <div>
                <div>
                    <div>
                        &nbsp;
                        <Link to="/prode" className="btn btn-dark">Prodes</Link> 
                        &nbsp;
                        <Link to="/prode/Add" className="btn btn-dark">Agregar prode</Link>
                    </div>
                    <br/>
                    <div>
                        <Route exact path="/prode" component={Listing} />
                        <Route exact path="/prode/add" component={Add} />
                        <Route exact path="/prode/edit/:id" component={Edit} />
                    </div>
                </div>
        </div>
    )
    }
}