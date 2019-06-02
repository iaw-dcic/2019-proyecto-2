import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Colores from './Colores';
import Modelos from './Modelos';
import Sizes from './Sizes';
import './page.css'

export default class Page extends Component {

    render() {
        return (
          <section id="features">
            <div class="features-inner">
              <div class="features-image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/495197/phone-1.png"/></div>
              <ul class="features-list list-2">
                <li class="features-item">

                  <Colores />
                </li>
                <li class="features-item">
                  <Modelos />
                  </li>
                  <li class="features-item">
                  <Sizes />
                  </li>
            </ul>
          </div>
          </section>
        );
    }

}
