import React, { Component } from 'react';

export default class ShirtImage extends Component {
    render() {
        return (

            <section class="pricing py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card mb-5 mb-lg-0">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
                                    <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                                    <hr></hr>
                                    <ul class="fa-ul">
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited Private Projects</li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain</li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
                                    </ul>
                                    <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
                                </div>
                            </div>
                        </div>
          
                        <div class="col-lg-4">
                            <div class="card mb-5 mb-lg-0">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">Remera</h5>
                                    <hr></hr>
                                   
                                    <img class="img-fluid" height="410" src="/images/remeras/remerablanca.png" class="d-block w-100" alt="..."></img>
                                    
                                    <a href="#" class="btn btn-block btn-secondary text-uppercase">Guardar</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
                                    <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
                                    <hr></hr>
                                    <ul class="fa-ul">
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong></li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
                                    </ul>
                                    <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
