import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Cuadro from './Cuadro'
import axios from 'axios'


export default class Main extends Component {

    constructor (props) {
         super(props)
         this.showClick=this.showClick.bind(this);
    }


    showClick(id){
      this.props.onClickB(id);
       window.scrollTo(0, 0);
    }


  render() {
      return (
          <React.Fragment>
              <main role="main" className="container">
              <div className="row mt-5">
              <div className="col-md-4">
              <div className='card'>
                   <div className='card-header'>Mis pronosticos</div>
                   <div className='card-body'>
                     <ul className='list-group list-group-flush'>
                       {this.props.predictions.map((prediction) => (
                         <p
                           className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                           key={prediction.id}
                         >
                           {prediction.name}
                           <button type="button" onClick={(e) => this.showClick(prediction.id)} className= "btn btn-info">Ver</button>
                           </p>
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
