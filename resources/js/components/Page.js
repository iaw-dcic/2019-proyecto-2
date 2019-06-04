import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Colores from './Colores';
import Modelos from './Modelos';
import Sizes from './Sizes';
import ConfirmBtn from './ConfirmBtn';
import './page.css'

export default class Page extends Component {
  constructor(){
    super()
    this.state={
      userid:null,
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

  }
  componentWillMount(){
    if(localStorage.hasOwnProperty('colorid')){
      this.setState({
        colorid: localStorage.getItem('colorid'),
        modelid: localStorage.getItem('modelid'),
        sizeid: localStorage.getItem('sizeid'),
        url: localStorage.getItem('url'),
      })
    }else{
      this.setState({
        colorid: 1,
        modelid: 1,
        sizeid: 1,
      })
    }
  }
  updatepanel(){
    const s="/api/v1/notebook/get/"+this.state.modelid+"/"+this.state.colorid+"/"+this.state.sizeid;

    fetch(s).then(
         (response)=>{
             return response.json();
         }   )
     .then(estado => {
       this.setState({
         url: estado[0].url,

       })

     });

  }
  guardarnotebookpersonalizada(){
    console.log('pewpew');

      const s="modelid="+this.state.modelid+"&sizeid="+this.state.sizeid+"&colorid="+this.state.colorid;

      fetch('/api/v1/notebookuser', {
        method: 'post',
        headers: new Headers({
           'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
         }),
        body: s,
      });

  }
  colorhandler(someValue) {
    this.setState({
      colorid: someValue
    })
    this.savestate()
    this.updatepanel()


  }
  savestate(){
    localStorage.setItem('modelid',this.state.modelid)
    localStorage.setItem('colorid',this.state.colorid)
    localStorage.setItem('sizeid',this.state.sizeid)
    localStorage.setItem('url',this.state.url)
  }
  modelohandler(someValue) {
    this.setState({
      modelid: someValue
    })
    this.savestate()
    this.updatepanel()

  }
  sizehandler(someValue) {
    this.setState({
      sizeid: someValue
    })
    this.savestate()
    this.updatepanel()

  }
  test(){
    alert('holu')
  }
  render() {
        return (
          <section id="features">
            <div className="features-inner">
              <div className="features-image">
                <img width="360" height="288" src={this.state.url}/>
              </div>

              <ul className="features-list list-2">

                <li className="features-item">
                  <Colores handler={this.colorhandler}/>
                </li>

                <li className="features-item">
                  <Modelos handler={this.modelohandler}/>
                </li>

                <li className="features-item">
                  <Sizes handler={this.sizehandler}/>
                </li>

                <li>
                  <ConfirmBtn handler={this.guardarnotebookpersonalizada}/>
                </li>
              </ul>
            </div>
          </section>
        );
  }


}
