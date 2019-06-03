import React from 'react';
import EditarDonut from './EditarDonut'

class BotonSabor extends  React.Component {

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
                    <EditarDonut
                        donut = {sabor}
                        name = "sabor"
                        onClick={() => this.props.onClick(sabor.id, sabor.url)}
                    />
                    )
            }
        </div>
    );
}
}
export default BotonSabor;
