import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Colores from './Colores';
import Modelos from './Modelos';
import Sizes from './Sizes';
import ConfirmBtn from './ConfirmBtn';
import NotebookPanel from './NotebookPanel'
import './page.css'

export default class Page extends Component {
  constructor(){
    super()
    this.state={
      userid:null,
      modelid:1,
      sizeid:1,
      colorid:1,
      url:"https://demo.nopcommerce.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg",
    }
    this.colorhandler = this.colorhandler.bind(this)
    this.modelohandler = this.modelohandler.bind(this)
    this.sizehandler = this.sizehandler.bind(this)
    this.test = this.test.bind(this)
    this.updatepanel = this.updatepanel.bind(this)
    this.guardarnotebookpersonalizada = this.guardarnotebookpersonalizada.bind(this)
    this.notebookPanelElement = React.createRef()
  }
  updatepanel(){

    this.notebookPanelElement.current.changeurl(this.state.url)
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
    this.updatepanel()

  }
  modelohandler(someValue) {
    this.setState({
      modelid: someValue
    })
  }
  sizehandler(someValue) {
    this.setState({
      sizeid: someValue
    })
  }
  test(){
    alert('holu')
  }
  render() {
        return (
          <section id="features">
            <div className="features-inner">
              <NotebookPanel ref={this.notebookPanelElement}/>
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
