import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexComponent from './IndexComponent';
import PronosticosComponent from './PronosticosComponent';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';
import PreloaderComponent from './PreloaderComponent';

export default class App extends Component{

    constructor(){
        super();

        //Obtengo el usuario de los metadatos
        let api_token = document.querySelector('meta[name="api-token"]');
        if(api_token != null)
            this.state = { isLoggedIn: true, api_token: api_token.content };
        else
            this.state = { isLoggedIn: false, api_token: null }
    }

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <NavbarComponent api_token={this.state.api_token} />
                        <div id="inicio" className="intro route bg-image">
                            <IndexComponent/>
                        </div>
                        <Route exact path="/home">
                            { this.getPronosticos() }
                        </Route>
                        <section className="bg-image footer route">
                            <div className="overlay-mf"></div>
                            <FooterComponent/>
                        </section>

                        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
                        <PreloaderComponent/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }

    componentDidMount(){
        this.scroll();
    }

    getPronosticos(){
        if(this.state.isLoggedIn){
            return (
                <section id="pronosticos" className="pronosticos route mb-4">
                    <PronosticosComponent api_token={this.state.api_token}/>
                </section>
            );
        }
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
