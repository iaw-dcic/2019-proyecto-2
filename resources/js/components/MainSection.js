import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/layout.css';
import Colors from './Colors';
import CaseOptions from './CaseOptions';
import Images from './Images';
import Save from './Save';
import ImageService from './ImageService';


export default class MainSection extends Component {
    constructor(){
      super()

      this.imageService=new ImageService();


      this.state={
        caseIndex:1,
        colorIndex:0,
        estampaIndex:0
      }

      this.setCaseImage=this.setCaseImage.bind(this)
      this.setCaseColor=this.setCaseColor.bind(this)
      this.setEstampa=this.setEstampa.bind(this)
    }

    setCaseImage(caseId){
        this.setState({caseIndex:caseId})
    }

    setCaseColor(colorId){
      this.setState({colorIndex:colorId})
    }

    setEstampa(estampaId){
      this.setState({estampaIndex:estampaId})
    }

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
                      <Save />
                    </li>
                  </ul>
                </div>
        );
    }
}