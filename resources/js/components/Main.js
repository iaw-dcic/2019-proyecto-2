import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

import axios from 'axios'

import  "./css/main.css";

export default class Main extends Component {

    constructor () {
         super()
         this.state = {
           predictions:[]
         }
    }
    componentWillMount () {
            axios.get('/predictions').then(response => {
              predictions: response.data;
            }).catch(error => {
              console.log("this is error", error);
        });

    }

    renderPredictions() {


       return this.state.predictions.map(prediction => {
           return (
               /* When using list you need to specify a key
                * attribute that is unique for each list item
               */
               <li key={prediction.id} >
                   { prediction.name }
               </li>
           );
       })
     }

  render() {
        console.log(this.state.predictions);

                return (
                    <React.Fragment>

                        <main role="main" className="container">
                        <div className="row mt-5">
                        <div className="col-md-4">
                        <div className='card'>
                             <div className='card-header'>Pronosticos</div>
                             <div className='card-body'>
                               <ul className='list-group list-group-flush'>

                                 {this.state.predictions.map((prediction) => (
                                   <Link
                                     className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                     key={prediction.id}
                                   >
                                     {prediction.name}

                                   </Link>
                                 ))}
                               </ul>
                             </div>
                           </div>
                         </div>
                         </div>
                        </main>

                    </React.Fragment>
                );
  }
}
