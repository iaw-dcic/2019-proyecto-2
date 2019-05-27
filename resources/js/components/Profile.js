import React, { Component } from 'react'

import "./../css/Profile.css"

export default class Profile extends Component {
    render() {
        return (
            <div className="masthead">
                <div className="container">
                    <div className="bs-example">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img width="400" src="https://img-cdn.hipertextual.com/files/2019/03/hipertextual-whatsapp-permitira-realizar-busqueda-inversa-imagenes-recibidas-combatir-fake-news-2019852284.jpg?strip=all&lossy=1&quality=70&ssl=1" alt="First Slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img width="400" src="https://img-cdn.hipertextual.com/files/2019/03/hipertextual-whatsapp-permitira-realizar-busqueda-inversa-imagenes-recibidas-combatir-fake-news-2019852284.jpg?strip=all&lossy=1&quality=70&ssl=1" alt="Second Slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img width="400" src="https://img-cdn.hipertextual.com/files/2019/03/hipertextual-whatsapp-permitira-realizar-busqueda-inversa-imagenes-recibidas-combatir-fake-news-2019852284.jpg?strip=all&lossy=1&quality=70&ssl=1" alt="Third Slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>                        

                    <div className="align-items-center justify-content-center text-center">
                        <a href="/mylab" className="btn btn-success">New avatar</a>
                    </div>

                </div>
            </div>
        );
    }
}
