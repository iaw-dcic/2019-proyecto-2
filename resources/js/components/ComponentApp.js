import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./css/componentApp.css";

export default class ComponentApp extends Component {

    render () {
        return (
            <>
                <div className="d-flex justify-content-center" id="topFlex">
                    <div className="p-2 bd-highlight" id="editor">
                        <div className="mx-auto">
                            Aca es donde se muestra el editor (Panel grande)
                        </div>
                    </div>
                    <div className="p-2 bd-highlight" id="options">
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <div><b>Option 1</b></div>
                            <div><b>Option 2</b></div>
                            <div><b>Option 3</b></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center" id="bottomFlex">
                    <div className="p-2 bd-highlight" id="save">
                        <button className="btn btn-primary" onClick="">
                            Save Avatar
                        </button>
                    </div>
                    <div className="p-2 bd-highlight" id="previous">
                        Aca se muestra los avatares creados previamente
                    </div>
                </div>
            </>
        );
    }

}