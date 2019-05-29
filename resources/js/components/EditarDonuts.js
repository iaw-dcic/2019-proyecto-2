import React from 'react';

class EditarDonuts extends React.Component {

  handleClick (e) {
     console.log(e.currentTarget.value);
     const donut = { ...this.props.donut };
     donut[e.currentTarget.name] =  e.currentTarget.value;
     this.props.actualizarDonuts(this.props.clave, donut);
  };

  render() {
    return(
      <div>
        <br></br>
        <h4 className="font-weight-light mb-0">Sabor </h4>
        <button  
          type="button" 
          className = "btn"
          name = 'sabor'
          value = '1'
          onClick = {this.handleClick}
        > 
        <img className="donasbotones" src="img/Donas/donaVainilla.png" /><br></br>Vainilla </button>
        
        <button 
          type="button" 
          className = "btn"
          name = 'sabor'
          value = '2'
          onClick = {this.handleClick}
        >
        <img className="donasbotones" src="img/Donas/donaChocolate.png" /> <br></br> Chocolate </button>
      </div>
    );
  }
}

export default EditarDonuts;

// 
//       <button type="button" className="btn"
//         value={this.props.donut.sabor}
//         onClick={this.handleClick}
//         name='sabor'
//         type='text'
//       >
//       <img className="donasbotones" src="img/Donas/donaMixta.png" /><br> Mixta </button>
 
//       <br><br>

//       <h4 className="font-weight-light mb-0">Glaseado </h4>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/glaseadoBlanco.png" /> <br> </button>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/glaseadoChocolate.png" /> <br> </button>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/glaseadoRosa.png" /><br> </button>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/glaseadoCeleste.png" /><br> </button>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/glaseadoNaranja.png" /><br> </button>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/glaseadoVacio.png" /><br> </button>

//       <br><br>

//       <h4 className="font-weight-light mb-0">Decoración </h4>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/chispas1.png" /> <br> </button>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/chispas2.png" /> <br> </button>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/chispas3.png" /><br> </button>
//       <br>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/glaseado1.png" /> <br> </button>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/glaseado2.png" /><br> </button>
//       <button type="button" className="btn"><img className="donasbotones" src="img/Donas/sin.png" /><br> </button> 
