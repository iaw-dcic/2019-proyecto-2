import React, { Component } from 'react';

export default class PanelStampa extends Component {

    render() {
        return (
            <div class="row">
                <h3 class="my-4">Elegir estampa</h3>
                <div class="row">
                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                        <img class="img-fluid" src="images/design1.jpg" alt="" width="50" height="70"/>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img class="img-fluid" src="images/design2.png" alt="" width="50" height="70"/>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img class="img-fluid" src="images/design3.png" alt="" width="50" height="70"/>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img class="img-fluid" src="images/design4.png" alt="" width="50" height="70"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}