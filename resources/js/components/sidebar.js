import React, { Component } from 'react';

export default class SideBar extends Component{
    render(){
        return (
        <nav className="navbar fixed-bottom  navbar-dark bg-dark">
            <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Piel
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cabello
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ojos
            </button>
            <div className="dropdown-menu ">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Boca
            </button>
            <div className="dropdown-menu ">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <input className="btn btn-outline-success btn-lg" type="submit" value="Guardar Avatar"/>
        </nav>
        )
    }
}