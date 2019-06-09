import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/layout.css';
import Colors from './Colors';
import CaseOptions from './CaseOptions';
import Images from './Images';
import Modal from './Modal'
import Axios from 'axios';

export default class MainSection extends Component {
    constructor(){
      super()

      this.state={
        caseIndex:1,
        colorIndex:7,
        estampaIndex:1,
        fundaURL:null,
        estampaURL:null,
        modal: false
      }

      this.setCaseImage=this.setCaseImage.bind(this)
      this.setCaseColor=this.setCaseColor.bind(this)
      this.setEstampa=this.setEstampa.bind(this)
      this.setFundaURL=this.setFundaURL.bind(this)
      this.setEstampaURL=this.setEstampaURL.bind(this)

      this.showFunda=this.showFunda.bind(this)
      this.showEstampa=this.showEstampa.bind(this)
      this.selectModal=this.selectModal.bind(this)
      this.addNewProduct=this.addNewProduct.bind(this)

    }

     setFundaURL(url){
      this.setState({fundaURL: url})
    }

    setEstampaURL(url){
      this.setState({estampaURL: url})
    }

    setCaseImage(caseId){
        this.setState({caseIndex:caseId})
        this.showFunda(caseId,this.state.colorIndex)     
    }

    setCaseColor(colorId){
      this.setState({colorIndex:colorId})
      this.showFunda(this.state.caseIndex,colorId)
    
    }

    setEstampa(estampaId){
      this.setState({estampaIndex:estampaId})
      this.showEstampa(estampaId)
    }

    showFunda(caseId,colorId){
      const path="/api/colorcase/"+caseId+"/"+colorId;
  
      fetch(path).then(
           (response)=>{
               return response.json();
           }   )
       .then(image => {
         this.setFundaURL(image[0].path)
  
       });
  
    }

    showEstampa(estampaId){
      const path="/api/image/"+estampaId;

      fetch(path).then(
        (response)=>{
            return response.json();
        }   )
    .then(image => {
      this.setEstampaURL(image[0].path)

    });

    }

    selectModal(info){
      this.setState({modal: !this.state.modal}) // true/false toggle
    }

    addNewProduct() {
      window.axios = require('axios');
      let api_token = document.querySelector('meta[name="api-token"]');
  
      if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

      const product={
        'id_color': this.state.colorIndex,
        'id_case':this.state.caseIndex,
        'id_image':this.state.estampaIndex
      };
      Axios.post('/api/products',product)
      .then(response => {
          alert("Funda creada correctamente");
      });
      
      }

    render() {
        return (
                <div className="features-inner">
                  <div className="features-image">
                    <img src={this.state.fundaURL}/>
                    <img className="estampa-style" src={this.state.estampaURL}/>
                  </div>
                  <ul className="features-list list-1">
                    <li className="case-options">
                      <h3 className="features-item-header">Seleccione el tipo de funda a personalizar</h3>
                    </li>
                    <li className="case-options">
                      <CaseOptions onClick={this.setCaseImage}/>
                    </li>
                    <li className="case-options">
                      <h3 className="features-item-header">Selecciona un color</h3>
                    </li>
                    <li className="colors">
                      <Colors onClick={this.setCaseColor}/>
                    </li>
                  </ul>
                  <ul className="features-list list-2">
                    <li className="images-options">
                      <h3 className="features-item-header">Selecciona una imagen</h3>
                    </li>
                    <li className="images-options"> 
                      <Images onClick={this.setEstampa}/>
                    </li>
                    <li className="save-changes">
                      <button type="submit" onClick={this.addNewProduct} className="btn-changes btn btn-primary">Guardar</button>
                      <button type="button" className="btn-changes btn btn-primary" onClick={ this.selectModal }>Mis fundas</button>      
                      <Modal
                        displayModal={this.state.modal}
                        closeModal={this.selectModal}
                      />
                    </li>
                  </ul>
                </div>
        );
    }
}