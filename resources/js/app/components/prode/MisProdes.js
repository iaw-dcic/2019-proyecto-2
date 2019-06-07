import {Button} from "react-bootstrap";
import React from "react";

import '../../utils/fonts.css'

export default class MisProdes extends React.Component {

    constructor(props){
        super(props);

        this.armarPanel=this.armarPanel.bind(this);
    }

    armarPanel(){

        let prodesAux = this.props.prodes;

        let Prodes = prodesAux.map((prode) =>
            <Button
                style={fullWidthButton}
                onClick={() => this.props.seleccionar(prode.id,prode.nombre)}
                key={prode.id}>
                {prode.nombre}
                <hr/>
                {prode.fechaCreacion}
            </Button>
        );

        return (
            <>
                { Prodes }
            </>
        )

    }

    render() {

        return <>
            <h3>Mis Prodes</h3>
            <hr/>

            {

                this.props.prodes === null  ?
                    <div className="container text-center p-5">
                        <h5>No tienes prodes</h5>
                    </div>
                    :
                    <>
                        {
                            this.armarPanel()
                        }
                    </>
            }

        </>;
    }
}

const whiteStyle = {
    color : 'white',

}

const whiteHr = {
    borderColor : 'white',
    borderWidth: 1,
}

const fullWidthButton = {
    width: "90%",
    height: 100,
    marginBottom : 10
}