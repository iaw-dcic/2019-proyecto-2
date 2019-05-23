import React, { Component } from 'react';
import './ComponentCSS/readmeStyle.css'


export default class Readme extends Component{
    render(){
        return (
            <>
                 <h1 className="titulo">Readme</h1>
    
    <div className="general">
        <div className="all-Info">
            <div className="d-flex flex-column justify-content-center Autoria">
                <div className="p-2">Autor: Pablo Guillermo Ceballos Vitale</div>
                <div className="p-2">Universidad Nacional del Sur</div>
                <div className="p-2">Año 2019 </div>
            
            </div>
        </div>
    </div>
    
    <div className="d-flex flex-column">
        <h3> Comentarios y/o aclaraciones </h3>
            <ul>
                <li>Es probable que al lanzar la App desde Heroku, la homepage no cargue los etilos CSS, desconozco las razones por las cuales ocurre esto
                    esto SOLO OCURRE LA PRIMERA VEZ, cuando se vuelve a cargar la homepage, la misma se carga con los estilos CSS como debería.
                         Esto solo ocurre para la homeepage </li>
                <li>La contraseña al crear un usuario debe ser como mínimo de 8 caracteres </li>
                <li>Para los estilos y la presentación se usó el framework de estilos Bootstrap: https://getbootstrap.com/ </li>
                <li>para ciertas estilos de texto se usó Google Fonts: https://fonts.google.com/ </li>
                <li> para manejo de recursos graficos desde react se uso WebPack https://opencollective.com/webpack</li>
                <li> https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm</li>
           
            
            </ul>
    </div>
            </>
        )
    }
}