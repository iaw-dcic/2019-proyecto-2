import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class NavbarComponent extends Component {

    constructor(props){
        super(props);
        this.api_token = this.props.api_token;
    }

    render() {
        return (
            <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll" to="#inicio">Protonóstico</Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                        {this.mostrarBotones()}
                    </div>
                </div>
            </nav>
        );
    }

    mostrarBotones(){
        if(this.api_token == null){
            return(
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link js-scroll" to="#inicio">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll" href="/login">Ingresar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll" href="/register">Registrar</a>
                    </li>
                </ul>
            );
        }else{
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link js-scroll" to="#inicio">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll" to="#pronosticos">Pronósticos</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll" href="" onClick={this.logout} >Salir</a>
                    </li>
                </ul>
            )
        }
    }

    logout(event){
        axios.post('logout', this.api_token)
            .then(response => window.location.replace("/"))
            .catch(error => console.log(error));
    }

    componentDidMount(){
        var nav = $('nav');
        var navHeight = nav.outerHeight();

        $('.navbar-toggler').on('click', function() {
            if( ! $('#mainNav').hasClass('navbar-reduce')) {
                $('#mainNav').addClass('navbar-reduce');
            }
        });

        $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - navHeight + 5)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll').on("click", function () {
            $('.navbar-collapse').collapse('hide');
        });

        $(window).trigger('scroll');

        $(window).on('scroll', function () {
            var pixels = 50;
            var top = 1200;
            if ($(window).scrollTop() > pixels) {
                $('.navbar-expand-md').addClass('navbar-reduce');
                $('.navbar-expand-md').removeClass('navbar-trans');
            } else {
                $('.navbar-expand-md').addClass('navbar-trans');
                $('.navbar-expand-md').removeClass('navbar-reduce');
            }
            if ($(window).scrollTop() > top) {
                $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
            } else {
                $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
            }
        });

        $('body').scrollspy({
            target: '#mainNav',
            offset: navHeight
        });
    }
}
