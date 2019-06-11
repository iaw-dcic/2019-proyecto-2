import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import Cuadro from './Cuadro'
import axios from 'axios'


export default class Main extends Component {

    constructor (props) {
         super(props)
         this.state = {
         }
         this.buttonClick=this.buttonClick.bind(this);
         this.showClick=this.showClick.bind(this);
         this.coleccionPredictions= this.coleccionPredictions.bind(this);
    }

    buttonClick(response){
        this.props.onClickA(response);
    }

    showClick(id){
      this.props.onClickB(id);
       window.scrollTo(0, 0);
    }

    componentDidMount(){
           this.coleccionPredictions();
       }

    coleccionPredictions(){
         let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

         var header = {
                    headers: {
                        'X-CSRF-TOKEN': token.content,
                        'Authorization': 'Bearer ' + api_token.content
                    }
                }

         axios.get('/api/predictions', header)
            .then((response) => {
                console.log('predictions',response);
              this.buttonClick(response.data);
            });
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
                         <h1
                           className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                           key={prediction.id}
                         >
                           {prediction.id}
                           <button type="button" onClick={(e) => this.showClick(prediction.id)} className= "btn btn-info">Ver</button>
                           </h1>
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
