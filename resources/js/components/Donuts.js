import React from 'react';
import EditarDonuts from './EditarDonuts';

class Donuts extends React.Component {
 
  render() {
    return (
      <div className="col border text-center p-2">
       
        <h2 className="border-bottom">Editar Donut</h2>

        { Object.keys(this.props.donut).map(clave => (
            <EditarDonuts 
                key={clave} 
                clave={clave} 
                donut={this.props.donut[clave]}
                actualizarDonuts={this.props.actualizarDonuts}
            ></EditarDonuts>
        ))}

        
      </div>
    );
  }
}

export default Donuts;




// class Donuts {

// 	getSabor(i) {
// 		if (i == 1) return 'img/Donas/donaVainilla.png';
// 		else if (i == 2) return 'img/Donas/donaChocolate.png';
// 		else if (i == 3) return 'img/Donas/donaMixta.png';
// 	}
// }
