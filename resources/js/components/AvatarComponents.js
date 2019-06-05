import React, { Component } from 'react';
import axios from 'axios';

//All of the components available to modify the avatar

export default class AvatarComponents extends Component {

    contstructor (props) {
        this.changeAvatarHair = this.changeAvatarHair.bind (this);
        this.changeAvatarShirt = this.changeAvatarShirt.bind (this);
        this.changeAvatarBeard = this.changeAvatarBeard.bind (this);
    }

    state = {
        allHair: [],
        allShirt: [],
        allBeard: []
    };

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
                                {this.state.allHair.map (hair => (
                                    <button className="btn btn-outline-primary" key={hair.element_var}><img src={window.location.origin + hair.element_source} onClick={() => this.changeAvatarHair(hair.element_var)}/></button>
                                ))}
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
                                {this.state.allShirt.map (shirt => (
                                    <button className="btn btn-outline-danger" key={shirt.element_var}><img src={window.location.origin + shirt.element_source} onClick={() => this.changeAvatarShirt(shirt.element_var)}/></button>
                                ))}
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
                                {this.state.allBeard.map (beard => (
                                    <button className="btn btn-outline-info" key={beard.element_var}><img src={window.location.origin + beard.element_source} onClick={() => this.changeAvatarBeard(beard.element_var)}/></button>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </>
        );
    }

    componentDidMount () {
        try {
            axios.get ('/api/app/loadhair').then (response => {
                this.setState({
                    allHair: response.data
                });
            });
            axios.get ('/api/app/loadshirt').then (response => {
                this.setState({
                    allShirt: response.data
                });
            });
            axios.get ('/api/app/loadbeard').then (response => {
                this.setState({
                    allBeard: response.data
                });
            });
        } 
        catch (event) {
            console.log('Axios Request Failed: ', event);
        }
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