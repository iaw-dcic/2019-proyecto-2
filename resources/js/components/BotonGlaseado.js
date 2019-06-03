import React from 'react';
import EditarDonut from './EditarDonut'

class BotonGlaseado extends React.Component {

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
                    <EditarDonut
                        donut = {glaseado}
                        name = "glaseado"
                        onClick={() => this.props.onClick(glaseado.id, glaseado.url)}
                    />
                    )
            }
        </div>
    );
}
}
export default BotonGlaseado;
