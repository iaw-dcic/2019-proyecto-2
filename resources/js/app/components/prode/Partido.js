import React from 'react';
import {Button, ButtonGroup } from 'react-bootstrap';

class Partido extends React.Component {

    constructor(props){
        super(props);

        this.selectGanador=this.selectGanador.bind(this);

        this.handleButtonPress = this.handleButtonPress.bind(this)
        this.handleButtonRelease = this.handleButtonRelease.bind(this)

    }

    selectGanador(equipo) {
        this.props.ganador(this.props.partido.nro_partido,this.props.partido.nro_proximoPartido,equipo)
    }

    handleButtonPress (equipo) {
        this.buttonPressTimer = setTimeout(() => alert(equipo), 1500);
    }

    handleButtonRelease () {
        clearTimeout(this.buttonPressTimer);
    }

    render() {
        return (
            <div className="shadow bg-white rounded">

                <ButtonGroup vertical>

                    <Button variant="dark"
                            style={buttonStyle}
                            onClick={() => { this.selectGanador(this.props.partido.equipo1)}}>
                        {this.props.partido.equipo1}
                    </Button>

                    <Button variant="secondary"
                            style={buttonStyle}
                            onClick={() => { this.selectGanador(this.props.partido.equipo2)}}>
                        {this.props.partido.equipo2}
                    </Button>

                </ButtonGroup>
            </div>
        )
    }
}

const buttonStyle = {
    width: 180 ,
    height : 35,
    borderRadius:0,
}

export default Partido;
