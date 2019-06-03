
import React, { Component } from 'react';
import './footer.css';
export default class Footer extends Component {
    render() {
        return <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 id="footer-h" className="text-uppercase">Footer </h5>
                        <p id="footer-p">Esta página fue hecha como proyecto de IAW para la Universidad Nacional del Sur.</p>
                    </div>


                    <hr className="clearfix w-100 d-md-none pb-3"></hr>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <ul className="list-footer">
                            <li>
                                <a href="/home">Volver a Inicio</a>
                            </li>
                            <li>
                                <a href="/readme">Readme</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2019:Copyright
      <a href="https://github.com/LuArceredillo" id="github">https://github.com/LuArceredillo </a>
            </div>


        </footer>
    }


}