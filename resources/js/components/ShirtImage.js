import React, { Component } from 'react';

export default class ShirtImage extends Component {
    render() {
        return (

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="img-fluid" src="/images/remerablanca_adelante.png" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img class="img-fluid" src="/images/remerablanca_atras.png" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        );
    }
}
