export default class ImageDonut{

    getGlaseadoURL(id){
        let image;
            switch(id){
                case 1: {image='img/Donas/glaseadoBlanco.png'; break;}
                case 2: {image='img/Donas/glaseadoChocolate.png'; break;}
                case 3: {image='img/Donas/glaseadoRosa.png'; break;}
                case 4: {image='img/Donas/glaseadoCeleste.png'; break;}
                case 5: {image='img/Donas/glaseadoNaranja.png'; break;}
                              
                default: {image='img/Donas/glaseadoVacio2.png'; break;}
            }
              
        return image;
    }

    getSaborURL(id){
        let image;
            switch(id){
                case 1: {image='img/Donas/donaVainilla.png'; break;}
                case 2: {image='img/Donas/donaChocolate.png'; break;}
                case 3: {image='img/Donas/donaMixta.png'; break;}                              
                default: {image='img/Donas/decoracionVacio.png'; break;}
            }
              
        return image;
    }

    getDecoracionURL(id){
        let image;
            switch(id){
                case 1: {image='img/Donas/chispas1.png'; break;}
                case 2: {image='img/Donas/chispas2.png'; break;}
                case 3: {image='img/Donas/chispas3.png'; break;}
                case 4: {image='img/Donas/glaseado1.png'; break;}
                case 5: {image='img/Donas/glaseado2.png'; break;}
                              
                default: {image='img/Donas/decoracionVacio.png'; break;}
            }
              
        return image;
    }
      
}