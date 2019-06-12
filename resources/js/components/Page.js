import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Colores from './Colores';
import Modelos from './Modelos';
import Sizes from './Sizes';
import ConfirmBtn from './ConfirmBtn';
import LoadBtn from './LoadBtn';
import NuevaNotebookBtn from './NuevaNotebookBtn'
import './page.css'

export default class Page extends Component {
  constructor(){
    super()
    this.state={
      editid:null,
      modelid:1,
      sizeid:1,
      colorid:1,
      url:null,
    }
    this.colorhandler = this.colorhandler.bind(this)
    this.modelohandler = this.modelohandler.bind(this)
    this.sizehandler = this.sizehandler.bind(this)
    this.updatepanel = this.updatepanel.bind(this)
    this.guardarnotebookpersonalizada = this.guardarnotebookpersonalizada.bind(this)
    this.savestate = this.savestate.bind(this)
    this.seturl = this.seturl.bind(this)
    this.getnotebooklist = this.getnotebooklist.bind(this)
    this.cargarnotebook = this.cargarnotebook.bind(this)
    this.nuevanotebook = this.nuevanotebook.bind(this)
  }
  componentWillMount(){
    if(localStorage.hasOwnProperty('colorid')){
      this.setState({
        editid: localStorage.getItem('editid'),
        colorid: localStorage.getItem('colorid'),
        modelid: localStorage.getItem('modelid'),
        sizeid: localStorage.getItem('sizeid'),
      })
      this.updatepanel(localStorage.getItem('modelid'),localStorage.getItem('colorid'),localStorage.getItem('sizeid'),)
    }else{
      this.setState({
        editid: null,
        colorid: 1,
        modelid: 1,
        sizeid: 1,
      })
      this.updatepanel(1,1,1);
    }
  }
  seturl(value){
    this.setState({
      url: value,
    })
  }
  nuevanotebook(){
    this.setState(
      {
        colorid:1,
        modelid:1,
        editid:null,
        sizeid:1,

      }
    );
      this.updatepanel(1,1,1);
      this.savestate(1,1,1,null);

  }
  cargarnotebook(Notebook){
    alert("Se cargo tu notebook con exito");
    const s="/api/v1/notebook/"+Notebook.notebookid;
    fetch(s).then(
         (response)=>{
             return response.json();
         }   )
     .then(note => {
       this.setState({
         url: Notebook.stickerurl,
         editid: Notebook.id,
         colorid: note.colorid,
         modelid: note.modelid,
         sizeid:  note.sizeid,
       })
       this.savestate(note.modelid,note.colorid,note.sizeid,Notebook.id)

     });

  }
  updatepanel(model,color,size){
    const s="/api/v1/notebook/get/"+model+"/"+color+"/"+size;

    fetch(s).then(
         (response)=>{
             return response.json();
         }   )
     .then(estado => {
       this.seturl(estado[0].url)

     });

  }
  guardarnotebookpersonalizada(){
    console.log('pewpew');
      let api_token = document.querySelector('meta[name="api-token"]');
      if(this.state.editid==null){
        const s="modelid="+this.state.modelid+"&sizeid="+this.state.sizeid+"&colorid="+this.state.colorid;

        fetch('/api/v1/notebookuser', {
          method: 'post',
          headers: new Headers({
             'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
             'Authentication': api_token.content,
           }),
          body: s,
        }).then(
             (response)=>{
                 return response.json();
             }   )
         .then(nuevanote => {
           this.setState(
             {
               editid: nuevanote.id,
             }
           )

         });
      }else {
        const s2="modelid="+this.state.modelid+"&sizeid="+this.state.sizeid+"&colorid="+this.state.colorid;
        const path="/api/v1/notebookuser/"+this.state.editid
        fetch(path, {
          method: 'PUT',
          headers: new Headers({
             'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
             'Authentication': api_token.content,
           }),
          body: s2,
        });
      }

  }
  getnotebooklist(){
      let api_token = document.querySelector('meta[name="api-token"]');


      fetch('/api/v1/notebookuser', {
        headers: new Headers({
           'Authentication': api_token.content,
         }),
      });
  }
  colorhandler(someValue) {
    this.setState({
      colorid: someValue
    })
    this.updatepanel(this.state.modelid,someValue,this.state.sizeid)
    this.savestate(this.state.modelid,someValue,this.state.sizeid,this.state.editid)



  }
  savestate(model,color,size,edit){
    localStorage.setItem('editid',edit)
    localStorage.setItem('modelid',model)
    localStorage.setItem('colorid',color)
    localStorage.setItem('sizeid',size)
    localStorage.setItem('url',this.state.url)
  }
  modelohandler(someValue) {
    this.setState({
      modelid: someValue
    })
    this.updatepanel(someValue,this.state.colorid,this.state.sizeid)
    this.savestate(someValue,this.state.colorid,this.state.sizeid,this.state.editid)


  }
  sizehandler(someValue) {
    this.setState({
      sizeid: someValue
    })
    this.updatepanel(this.state.modelid,this.state.colorid,someValue)
    this.savestate(this.state.modelid,this.state.colorid,someValue,this.state.editid)


  }
  test(){
    alert('holu')
  }
  render() {
        return (
          <section id="features">
            <div className="features-inner">

              <div className="features-image">
                <p className="titulo" >Personaliza Tu Notebook</p>
                <img width="360" height="288" src={this.state.url}/>
              </div>

              <ul className="features-list list-1">
                <li className="features-item">
                  <Colores handler={this.colorhandler}/>
                </li>

              </ul>
              <ul className="features-list list-2">
                <li className="features-item">
                  <Modelos handler={this.modelohandler}/>
                </li>

                <li className="features-item">
                  <Sizes handler={this.sizehandler}/>
                </li>
                <li className="features-item">
                  <p className="titulo">Opciones</p>
                  <NuevaNotebookBtn handler={this.nuevanotebook} />
                  <LoadBtn handler={this.cargarnotebook} />
                  <ConfirmBtn handler={this.guardarnotebookpersonalizada} />
                </li>


              </ul>
            </div>
          </section>
        );
  }


}
