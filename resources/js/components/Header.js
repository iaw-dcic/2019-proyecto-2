import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        
        return (
            <header className="hero">
            <div className="hero-wrap">
             <p className="intro" id="intro">-Conmebol-</p>
                 <h1 id="headline">Libertadores</h1>
                 <p className="year"><i className="fa fa-star"></i> 2019 <i className="fa fa-star"></i></p>
                 <img src="https://www.directv.com.ar/Shared/Images/deportes/copa-libertadores/Copa-libertadores.png" alt="Copa Libertadores Logo"/>
    
           </div>
            </header>       
        );
    }
}

