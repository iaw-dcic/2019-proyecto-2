import React, { Component } from 'react';

//Seleccion de todos los elementos para modificar el avatar

export default class AvatarComponents extends Component {

    render() {
        return (
            <>
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <div><b>Option 1</b></div>
                    <div><b>Option 2</b></div>
                    <div><b>Option 3</b></div>
                </div>
            </>
        );
    }

}