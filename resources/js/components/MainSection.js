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
        name:'',
        fundaURL:null,
        estampaURL:null,
        modal: false,
        fundaid:null,
        userid:null,

        fundas: []
      }

      this.setCaseImage=this.setCaseImage.bind(this)
      this.setCaseColor=this.setCaseColor.bind(this)
      this.setEstampa=this.setEstampa.bind(this)
      this.setFundaURL=this.setFundaURL.bind(this)
      this.setEstampaURL=this.setEstampaURL.bind(this)
      this.handleFieldChange=this.handleFieldChange.bind(this)
      this.setFundaID=this.setFundaID.bind(this)
      this.setName=this.setName.bind(this)

      this.showFunda=this.showFunda.bind(this)
      this.showEstampa=this.showEstampa.bind(this)
      this.saveState=this.saveState.bind(this)
      this.selectModal=this.selectModal.bind(this)
      this.addNewProduct=this.addNewProduct.bind(this)
      this.getFundaToEdit=this.getFundaToEdit.bind(this)
      this.getProductToEdit=this.getProductToEdit.bind(this)
      this.editProduct=this.editProduct.bind(this)
    }

    componentDidMount(){
      if(localStorage.hasOwnProperty('caseIndex')){
        this.setState({
          caseIndex: localStorage.getItem('caseIndex'),
          colorIndex: localStorage.getItem('colorIndex'),
          estampaIndex: localStorage.getItem('estampaIndex'),
        })
        this.showFunda(localStorage.getItem('caseIndex'),localStorage.getItem('colorIndex'))
        this.showEstampa(localStorage.getItem('estampaIndex'))
      }else{
        this.setState({
          caseIndex: 1,
          colorIndex: 7,
          estampaIndex: 1,
        })
      }
    }

    saveState(caseId,colorId,imageId){
      localStorage.setItem('caseIndex',caseId)
      localStorage.setItem('colorIndex',colorId)
      localStorage.setItem('estampaIndex',imageId)
      localStorage.setItem('fundaURL',this.state.fundaURL)
      localStorage.setItem('estampaURL', this.state.estampaURL)
    }

    setFundaID(id){
      this.setState({fundaid: id})
      this.getFundaToEdit(id)
      this.getProductToEdit(id)
    }

     setFundaURL(url){
      this.setState({fundaURL: url})
    }

    setEstampaURL(url){
      this.setState({estampaURL: url})
    }

    setName(value){
      this.setState({name:value})
    }

    setCaseImage(caseId){
        this.setState({caseIndex:caseId})
        this.showFunda(caseId,this.state.colorIndex)   
        this.saveState(caseId,this.state.colorIndex,this.state.estampaIndex)  
    }

    setCaseColor(colorId){
      this.setState({colorIndex:colorId})
      this.showFunda(this.state.caseIndex,colorId)
      this.saveState(this.state.caseIndex,colorId,this.state.estampaIndex)  
    
    }

    setEstampa(estampaId){
      this.setState({estampaIndex:estampaId})
      this.showEstampa(estampaId)
      this.saveState(this.state.caseIndex,this.state.colorIndex,estampaId)  
    }

    handleFieldChange (event) {
      this.setState({
        [event.target.name]: event.target.value
      })
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
        'id_image':this.state.estampaIndex,
        'name':this.state.name
      };
      Axios.post('/api/products',product)
      .then(response => {
          alert("Funda creada correctamente");
      });
      
      }

      getFundaToEdit(id_funda){
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
    
        if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
  
        const path="/api/product/getfunda/"+id_funda;

        axios.get(path)
        .then((response) => {
          this.setCaseImage(response.data.id_case)
          this.setCaseColor(response.data.id_color)
        });
      }

      getProductToEdit(id_funda){
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
    
        if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
  
        const path="/api/product/"+id_funda;

        axios.get(path)
        .then((response) => {
          this.setEstampa(response.data.id_image)
          this.setName(response.data.name)
          console.log(response.data)
          console.log(this.state.fundaid)
          console.log(this.state.name)
        });
      }

      editProduct(){
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
    
        if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
  
        const product={
          'id':this.state.fundaid,
          'id_color': this.state.colorIndex,
          'id_case':this.state.caseIndex,
          'id_image':this.state.estampaIndex,
          'name':this.state.name
        };

        const path="/api/product/"+this.state.fundaid;

        Axios.put(path,product)
        .then(response => {
            alert("Funda editada !")
        });
      }

      componentWillMount(){
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
    
        if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
  
        axios.get('/api/products')
        .then((response) => {
          this.setState({
            fundas: response.data
          });
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
                    <li className="nombre-funda">
                      <input
                          id='name'
                          type='text'
                          className="form-control"
                          name='name'
                          placeholder="Nombre de la funda"
                          value={this.state.name}
                          onChange={this.handleFieldChange}
                          required autoFocus
                        />
                    </li>
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
                        allfundas={this.state.fundas}
                        displayModal={this.state.modal}
                        closeModal={this.selectModal}
                        onClick={this.setFundaID}
                      />
                      <button type="submit" onClick={this.editProduct} className="btn-changes btn btn-primary">Editar</button>
                    </li>
                  </ul>
                </div>
        );
    }
}