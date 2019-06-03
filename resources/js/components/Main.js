import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'
import axios from 'axios'

import  "./css/main.css";

export default class Main extends Component {

  constructor () {
       super()
       this.state = {
         predictions: []
       }
 }
      componentDidMount () {
              axios.get('/api/predictions').then(response => {
                this.setState({
                  predictions: response.data
                })
              })
            }


  render() {
    const { predictions } = this.state


                return (
                    <React.Fragment>
                        <Navigation/>

                        <main role="main" className="container">
                        <div className="row mt-5">
                        <div className="col-md-4">
                           <div className="card">
                                     <div className="card-content">
                                        <div className="card-header-grey">
                                            <h1 className="card-heading">Pronóstico 1</h1>
                                         </div>
                                         <div className="card-body">
                                         <p className="card-p">
                                         {predictions.map(prediction => (
                                              <Link
                                                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                                to={`/${project.id}`}
                                                key={prediction.id}
                                              >
                                                {prediction.name}

                                              </Link>
                                            ))}
                                         </p>
                                       </div>

                                       <nav className="nav-tabs">
                                         <ul className="nav nav-pills pull-left">
                                                 <li ><a className="card-action-grey" href="#">Link al pronostico </a></li>
                                         </ul>
                                       </nav>

                                     </div>
                                 </div>
                         </div>
                         </div>
                        </main>

                    </React.Fragment>
                );
  }
}
