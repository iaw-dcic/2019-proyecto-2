import React, { Component } from 'react';

export default class PanelColores extends Component {

    render() {

        return (
            <div class = "row">
                <h3 class="my-4">Elegir color</h3>
                <div class="row">
                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                        <img class="img-fluid" src="images/negra.jpg" alt="" width="50" height="70"/>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img class="img-fluid" src="images/blanca.jpg" alt="" width="50" height="70"/>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img class="img-fluid" src="images/violeta.jpg" alt="" width="50" height="70"/>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img class="img-fluid" src="images/azul.jpg" alt="" width="50" height="70"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
