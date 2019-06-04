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
        let data = document.getElementById('user');
        if(data != null){
            let user = JSON.parse(data.content);
            this.state = { isLoggedIn: true, user };
        }else
            this.state = { isLoggedIn: false, user: null };
    }

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <NavbarComponent user={this.state.user} />
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
                    <PronosticosComponent user={this.state.user}/>
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
