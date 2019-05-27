import React, { Component } from 'react'

import "./../css/Lab.css"

export default class Dashboard extends Component {
    render() {
        return (
            <div className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div id="card-body" className="card-body">
                                    <div id="content-avatar">
                                        <img id="body" src="storage/bodies/1.png"/>
                                        <img id="eyes" src="storage/eyes/1.png"/>
                                        <img id="nose" src="storage/noses/1.png"/>
                                        <img id="mouth" src="storage/mouths/3.png"/>
                                        <img id="hair" src="storage/hairs/1.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card options-avatar">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <input type="text" className="form-control" placeholder="Avatar name"/>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="previous round buttons-options">&#8249;</a>
                                        <label className="text">BODY</label>
                                        <a href="#" className="next round buttons-options">&#8250;</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="previous round buttons-options">&#8249;</a>
                                        <label className="text">EYES</label>
                                        <a href="#" className="next round buttons-options">&#8250;</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="previous round buttons-options">&#8249;</a>
                                        <label className="text">HAIR</label>
                                        <a href="#" className="next round buttons-options">&#8250;</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="previous round buttons-options">&#8249;</a>
                                        <label className="text">NOSE</label>
                                        <a href="#" className="next round buttons-options">&#8250;</a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#" className="previous round buttons-options">&#8249;</a>
                                        <label className="text">MOUTH</label>
                                        <a href="#" className="next round buttons-options">&#8250;</a>
                                    </li>
                                    <li className="list-group-item">
                                        <button className="btn btn-success">Create</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
