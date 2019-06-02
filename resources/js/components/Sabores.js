import React from 'react';
import BotonSabor from './BotonSabor'

class Sabores extends  React.Component {

constructor(){
    super()

    this.state={
        sabores:[]
    }
}

componentWillMount(){
    this.loadSabor();
}

loadSabor(){
    fetch('/api/sabores').then(
        (response)=>{
            return response.json();
        }   )
    .then(sabores => {
        this.setState({ sabores : sabores });
    });
}

render() {
    return (
        <div>
            {
                this.state.sabores.map(sabor => 
                    <BotonSabor 
                        sabor = {sabor}
                        actualizarDonuts={this.props.actualizarDonuts}
                    />
                    )
            }
        </div>
    );
}
}
export default Sabores;
