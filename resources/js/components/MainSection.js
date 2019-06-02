import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/layout.css';
import Colors from './Colors';
import CaseOptions from './CaseOptions';
import Images from './Images';
import Save from './Save';
import ImageService from './ImageService';
import Modal from './Modal'
import Axios from 'axios';

export default class MainSection extends Component {
    constructor(){
      super()

      this.imageService=new ImageService();


      this.state={
        caseIndex:1,
        colorIndex:0,
        estampaIndex:0,
        //casePath:""
        modal: false
      }

      this.setCaseImage=this.setCaseImage.bind(this)
      this.setCaseColor=this.setCaseColor.bind(this)
      this.setEstampa=this.setEstampa.bind(this)
      this.selectModal=this.selectModal.bind(this)
      this.addNewProduct=this.addNewProduct.bind(this)
    }

    // componentWillMount() {
    //   this.getCaseImage();
    // }

    setCaseImage(caseId){
        this.setState({caseIndex:caseId})
        // this.getCaseImage()
    }

    setCaseColor(colorId){
      this.setState({colorIndex:colorId})
       //this.getCaseImage()
    }

    setEstampa(estampaId){
      this.setState({estampaIndex:estampaId})
    }

    selectModal(info){
      this.setState({modal: !this.state.modal}) // true/false toggle
    }

    addNewProduct() {
      const product={
        'id_user':1,
        'id_color': this.state.colorIndex,
        'id_case':this.state.caseIndex,
        'id_image':this.state.estampaIndex
      };
      Axios.post('api/products',product)
      .then(response => {
          alert("Funda creada correctamente");
      });
      
      }
    

    // getCaseImage(){
    //   this.imageService.getCaseColor(this.state.caseIndex,this.state.colorIndex).then(
    //     path => {
    //       this.setState({casePath:path})
    //     }
    //   );
    // }

    render() {
        return (
                <div className="features-inner">
                  <div className="features-image">
                    <img src={this.imageService.getColorCase(this.state.caseIndex,this.state.colorIndex)}/>
                    <img className="estampa-style" src={this.imageService.getEstampa(this.state.estampaIndex)}/>
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