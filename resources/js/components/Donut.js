import React from 'react';

class Donut extends React.Component {

    render() {
        const { sabor } = this.props.donut;
        const { glaseado } = this.props.donut;
        const { decoracion } = this.props.donut;

        return (
                <div className="col fondo">
                    <img src={ sabor } className="chico" />
                    <img src={ glaseado } className="chico" />
                    <img src={ decoracion } className="chico" />
                </div>  
                 );

        }
}

export default Donut;


 // switch (sabor){
        //     case 'Vainilla': return (  <img src="img/Donas/donaVainilla.png" className="medio" /> );
        //     case 'Chocolate':  return (  <img src="img/Donas/donaChocolate.png" className="medio" /> );
        //     case 'Mixta':  return (  <img src="img/Donas/donaMixta.png" className="medio" /> );
        //     case 'Vacia':  return (  <img src="img/Donas/dona.png" className="medio" /> );
        // }

        // switch (glaseado){
        //     case 'Blanco': return (  <img src="img/Donas/glaseadoBlanco.png" className="medio" /> );
        //     case 'Chocolate': return (  <img src="img/Donas/glaseadoChocolate.png" className="medio" /> );
        //     case 'Celeste': return (  <img src="img/Donas/glaseadoCeleste.png" className="medio" /> );
        //     case 'Rosa': return (  <img src="img/Donas/glaseadoRosa.png" className="medio" /> );
        //     case 'Naranja': return (  <img src="img/Donas/glaseadoNaranja.png" className="medio" /> );
        //     case 'VacioGlaseado':  return (  <img src="img/Donas/glaseadoVacio2.png" className="medio" /> );
        // }
        
        // switch (decoracion){
        //     case 'Chispas1':return (  <img src="img/Donas/chispas1.png" className="medio" /> );
        //     case 'Chispas2': return (  <img src="img/Donas/chispas2.png" className="medio" /> );
        //     case 'Chispas3': return (  <img src="img/Donas/chispas3.png" className="medio" /> );
        //     case 'Glaseado1': return (  <img src="img/Donas/glaseado1.png" className="medio" /> );
        //     case 'Glaseado2': return (  <img src="img/Donas/glaseado2.png" className="medio" /> );
        //     case 'VacioDecoracion':  return (  <img src="img/Donas/decoracionVacio.png" className="medio" /> );
        // }

  