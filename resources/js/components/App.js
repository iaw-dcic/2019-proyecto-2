import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './Index';
import Pronosticos from './Pronosticos';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';

export default class App extends Component{

    constructor(){
        super();
        this.state = {
            user: null
        }
    }

    render(){
        return (
            <BrowserRouter>
                <Navbar />
                <div id="inicio" className="intro route bg-image">
                    <Index/>
                </div>
                <section id="pronosticos" className="pronosticos route">
                    <Pronosticos/>
                </section>
                <section className="bg-image footer route">
                    <div className="overlay-mf"></div>
                    <Footer/>
                </section>

                <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
                <Preloader/>
            </BrowserRouter>
        );
    }

    componentDidMount(){
        this.scroll();
    }

    scroll(){
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });

        $('.back-to-top').click(function(){
            $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
            return false;
        });

        $('.scrolltop-mf').on("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))
