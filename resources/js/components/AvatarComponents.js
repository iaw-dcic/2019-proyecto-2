import React, { Component } from 'react';

//Seleccion de todos los elementos para modificar el avatar

//Crear una table que tenga tipo y direccion del archivo, y poner las 4 filas de abajo con un for

export default class AvatarComponents extends Component {


    /*{this.props.avatarList.map (avatar => (
        <div className="card" key={avatar.avatar_id} id="savedCard"></div>
    ))}*/

    render() {
        return (
            <>
                <div className="accordion md-accordion" id="accordionEx1" role="tablist" aria-multiselectable="true">

                    <div className="card">

                        <div className="card-header" role="tab" id="headingTwo1">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
                                <h5 className="mb-0">
                                    Hair <i className="fas fa-angle-down rotate-icon"></i>
                                </h5>
                            </a>
                        </div>

                        <div id="collapseTwo1" className="collapse" role="tabpanel" aria-labelledby="headingTwo1" data-parent="#accordionEx1">
                            <div className="card-body">
                                <button className="btn btn-outline-primary"><img src={window.location.origin + '/avatar_elements/Hair1.png'} onClick={this.changeAvatarHair ("Hair1.png")}/></button>
                                <button className="btn btn-outline-primary"><img src={window.location.origin + '/avatar_elements/Hair2.png'} onClick={this.changeAvatarHair ("Hair2.png")}/></button>
                                <button className="btn btn-outline-primary"><img src={window.location.origin + '/avatar_elements/Hair3.png'} onClick={this.changeAvatarHair ("Hair3.png")}/></button>
                                <button className="btn btn-outline-primary"><img src={window.location.origin + '/avatar_elements/Hair4.png'} onClick={this.changeAvatarHair ("Hair4.png")}/></button>
                            </div>
                        </div>

                    </div>

                    <div className="card">

                        <div className="card-header" role="tab" id="headingTwo2">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo21" aria-expanded="false" aria-controls="collapseTwo21">
                                <h5 className="mb-0">
                                    Shirts <i className="fas fa-angle-down rotate-icon"></i>
                                </h5>
                            </a>
                        </div>

                        <div id="collapseTwo21" className="collapse" role="tabpanel" aria-labelledby="headingTwo21" data-parent="#accordionEx1">
                            <div className="card-body">
                                <button className="btn btn-outline-danger"><img src={window.location.origin + '/avatar_elements/Shirt1.png'} onClick={this.changeAvatarShirt ("Shirt1.png")}/></button>
                                <button className="btn btn-outline-danger"><img src={window.location.origin + '/avatar_elements/Shirt2.png'} onClick={this.changeAvatarShirt ("Shirt2.png")}/></button>
                                <button className="btn btn-outline-danger"><img src={window.location.origin + '/avatar_elements/Shirt3.png'} onClick={this.changeAvatarShirt ("Shirt3.png")}/></button>
                                <button className="btn btn-outline-danger"><img src={window.location.origin + '/avatar_elements/Shirt4.png'} onClick={this.changeAvatarShirt ("Shirt4.png")}/></button>
                            </div>
                        </div>

                    </div>

                    <div className="card">

                        <div className="card-header" role="tab" id="headingThree31">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseThree31" aria-expanded="false" aria-controls="collapseThree31">
                                <h5 className="mb-0">
                                    Beards <i className="fas fa-angle-down rotate-icon"></i>
                                </h5>
                            </a>
                        </div>

                        <div id="collapseThree31" className="collapse" role="tabpanel" aria-labelledby="headingThree31" data-parent="#accordionEx1">
                            <div className="card-body">
                                <button className="btn btn-outline-info"><img src={window.location.origin + '/avatar_elements/Beard1.png'} onClick={this.changeAvatarBeard ("Beard1.png")}/></button>
                                <button className="btn btn-outline-info"><img src={window.location.origin + '/avatar_elements/Beard2.png'} onClick={this.changeAvatarBeard ("Beard2.png")}/></button>
                                <button className="btn btn-outline-info"><img src={window.location.origin + '/avatar_elements/Beard3.png'} onClick={this.changeAvatarBeard ("Beard3.png")}/></button>
                                <button className="btn btn-outline-info"><img src={window.location.origin + '/avatar_elements/Beard4.png'} onClick={this.changeAvatarBeard ("Beard4.png")}/></button>
                            </div>
                        </div>

                    </div>

                </div>
            </>
        );
    }

    changeAvatarHair = (newHair) => {
        const returningAvatar = {
            hair: newHair,
            shirt: this.props.avatar.shirt,
            beard: this.props.avatar.beard
        };
        this.props.componentChange.bind (returningAvatar);
    }

    changeAvatarShirt = (newShirt) => {
        const returningAvatar = {
            hair: this.props.avatar.hair,
            shirt: newShirt,
            beard: this.props.avatar.beard
        };
        this.props.componentChange.bind (returningAvatar);
    }

    changeAvatarBeard = (newBeard) => {
        const returningAvatar = {
            hair: this.props.avatar.hair,
            shirt: this.props.avatar.shirt,
            beard: newBeard
        };
        this.props.componentChange.bind (returningAvatar);
    }

}