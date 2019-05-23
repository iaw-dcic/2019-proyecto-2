import React, { Component } from 'react';
import "./ComponentCSS/HomeStyle.css"

export default class Home extends Component{
    render(){
        return (
            <>
                <div className="reason text-center">
                    
                    <h3>Bienvenido al creador de Avatares!</h3> 
                
                
                    <div className="subTitle1 reason">
                        <h3>tus Avatares en todo momento</h3>
                        <p>Crea tu avatar de cara a tu medida y guardalo para poder acceder a él cuando quieras, 
                                desde donde quieras 
                        </p> 
                    </div>
                    <div className="subTitle2 reason">
                        <h3>Cientos de estilos diferentes</h3>
                        <p>crea el avatar de tus sueños gracias a la extensa libreria
                            de estilos disponibles para las partes del avatar
                        </p>
                    </div>
                    <div className="subTitle3 reason">
                        <h3>1 Botón, inmensas posibilidades</h3>
                        <p>Crea o edita tu avatar con tan solo presionar
                            1 botón y deja que la aplicación te guie durante el proceso</p>
                    </div>
                    
                </div>
            </>
        ) 
    }
}