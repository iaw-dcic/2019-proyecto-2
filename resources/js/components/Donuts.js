import React from 'react';
import EditarDonuts from './EditarDonuts';
// import AgregarDonut from './AgregarDonut';

class Donuts extends React.Component {
 
  render() {
    return (
      <div>
       
       {/* <AgregarDonut agregarDonut={this.props.agregarDonut}/> */}

        { Object.keys(this.props.donuts).map(clave => (
            <EditarDonuts 
                key={clave} 
                clave={clave} 
                donut={this.props.donuts[clave]}
                actualizarDonuts={this.props.actualizarDonuts}
            ></EditarDonuts>
        ))}

        
      </div>
    );
  }
}

export default Donuts;
