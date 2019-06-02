import React from 'react';
import BotonDecoracion from './BotonDecoracion'

class Decoraciones extends React.Component {

constructor(){
    super()

    this.state={
        decoraciones:[]
    }
}

componentWillMount(){
    this.loadDecoracion();
}

loadDecoracion(){
    fetch('/api/decoraciones').then(
        (response)=>{
            return response.json();
        }   )
    .then(decoraciones => {
        this.setState({ decoraciones : decoraciones });
    });
}

render() {
    return (
        <div>
            {
                this.state.decoraciones.map(decoracion => 
                    <BotonDecoracion
                        decoracion = {decoracion}
                        actualizarDonuts={this.props.actualizarDonuts}
                    />
                    )
            }
        </div>
    );
}
}
export default Decoraciones;
