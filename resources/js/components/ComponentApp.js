import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./css/componentApp.css";
import AvatarView from './AvatarView'
import AvatarComponents from './AvatarComponents'
import ElementSelect from './ElementSelect'
//import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
/*
<Collapse>
    <CollapseHeader>
        <h3>Option 1</h3>
    </CollapseHeader>
    <CollapseBody>
        <div><p>fdsafdsa</p></div>
    </CollapseBody>
</Collapse>
*/

//en el saveChanges llamo al axios para que le diga al controlador que metodo usar
//tengo que usar un setstate para que, lo que trae el avatarcomponents, lo guarde en el avatar actual aca, y eso se refleja automaticamente en el avatarview

export default class ComponentApp extends Component {

    state = { 
        avatarActual: {"element1":"test","element2":"test","element3":"test"},//this.props.avatar.elemento1
        avataresTotales: []
    };

    render () {
        return (
            <>
                <div className="d-flex justify-content-center" id="topFlex">
                    <div className="col-md-9" id="editor">
                        <div className="mx-auto">
                            Aca es donde se muestra el editor (Panel grande)
                            <AvatarView avatar={this.state.avatarActual} />
                        </div>
                    </div>
                    <div className="col-md-3" id="options">
                        
                    </div>
                </div>
                <div className="d-flex justify-content-center" id="bottomFlex">
                    <div className="col-md-9" id="previous">
                        Aca se muestra los avatares creados previamente

                    </div>
                    <div className="col-md-3" id="save">
                        <button className="btn btn-primary" onClick={this.saveChanges}>
                            Save Avatar
                        </button>
                        <button className="btn btn-primary" onClick={this.returnToDefault}>
                            Save Avatar
                        </button>
                    </div>
                </div>
            </>
        );
    }

    saveChanges = () => {
        this.setState(state => ({
            //avatarActual: state.items.concat (item) llamar al controlador, update o create
        }));
    }

    returnToDefault = () => {
        
    }

}