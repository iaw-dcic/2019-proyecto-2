import React from 'react';
import EditarDonut from './EditarDonut'

class BotonDecoracion extends React.Component {

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
                <EditarDonut
                    donut = {decoracion}
                    name = "decoracion"
                    onClick={() => this.props.onClick(decoracion.id,decoracion.url)}
                />
                )
            }
        </div>
    );
}
}
export default BotonDecoracion;
