import React from 'react';
import BotonGlaseado from './BotonGlaseado'

class Glaseados extends React.Component {

constructor(){
    super()

    this.state={
        glaseados:[]
    }
}

componentWillMount(){
    this.loadGlaseado();
}

loadGlaseado(){
    fetch('/api/glaseados').then(
        (response)=>{
            return response.json();
        }   )
    .then(glaseados => {
        this.setState({ glaseados : glaseados });
    });
}

render() {
    return (
        <div>
            {
                this.state.glaseados.map(glaseado => 
                    <BotonGlaseado
                        glaseado = {glaseado}
                        actualizarDonuts={this.props.actualizarDonuts}
                    />
                    )
            }
        </div>
    );
}
}
export default Glaseados;
