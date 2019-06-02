import React, { Component } from 'react';

//Seleccion de todos los elementos para modificar el avatar

export default class AvatarComponents extends Component {

    contstructor (props) {
        this.changeAvatarHair = this.changeAvatarHair.bind (this);
        this.changeAvatarShirt = this.changeAvatarShirt.bind (this);
        this.changeAvatarBeard = this.changeAvatarBeard.bind (this);
    }

    render () {
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
                                {this.createElements ('hair')}
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
                                {this.createElements ('shirt')}
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
                                {this.createElements ('beard')}
                            </div>
                        </div>

                    </div>

                </div>
            </>
        );
    }

    createElements = (type) => {
        let table = [];

        switch (type) {
            case ('hair'): {
                for (let I = 1; I <= 4; I++) {
                    table.push (<button className="btn btn-outline-primary" key={'Hair' + I}><img src={window.location.origin + '/avatar_elements/Hair' + I + '.png'} onClick={() => this.changeAvatarHair('Hair' + I)}/></button>)
                }
                break;
            }
            
            case ('shirt'): {
                for (let I = 1; I <= 4; I++) {
                    table.push (<button className="btn btn-outline-danger" key={'Shirt' + I}><img src={window.location.origin + '/avatar_elements/Shirt' + I + '.png'} onClick={() => this.changeAvatarShirt('Shirt' + I)}/></button>)
                }
                break;
            }

            case ('beard'): {
                for (let I = 1; I <= 4; I++) {
                    table.push (<button className="btn btn-outline-info" key={'Beard' + I}><img src={window.location.origin + '/avatar_elements/Beard' + I + '.png'} onClick={() => this.changeAvatarBeard('Beard' + I)}/></button>)
                }
                break;
            }
        }

        return table;
    }

    changeAvatarHair (newHair) {
        const returningAvatar = {
            hair: newHair,
            shirt: this.props.avatar.shirt,
            beard: this.props.avatar.beard,
        };
        this.props.componentChange (returningAvatar);
    }

    changeAvatarShirt (newShirt) {
        const returningAvatar = {
            hair: this.props.avatar.hair,
            shirt: newShirt,
            beard: this.props.avatar.beard,
        };
        this.props.componentChange (returningAvatar);
    }

    changeAvatarBeard (newBeard) {
        const returningAvatar = {
            hair: this.props.avatar.hair,
            shirt: this.props.avatar.shirt,
            beard: newBeard,
        };
        this.props.componentChange (returningAvatar);
    }

}