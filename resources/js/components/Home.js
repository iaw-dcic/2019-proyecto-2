import React, { Component } from 'react';
import Listar from '../pages/teams/Listar';


class Home extends Component {


    render() {
        let mensaje;
        if (document.querySelector('meta[name="api-token"]')== null){
            mensaje =
            <div className="container">
            <div className="card bg-light mb-3" >
                <div className="card-body">
                    <p className="card-text">Para poder guardar sus prodes y consultarlos por favor inicie sesión si tiene usuario registrado o registrese si aún no lo hizo.</p>
                    <p className="card-text">Haga click en el equipo que usted considera que ganará ese partido.</p>
                </div>
            </div>
            </div>;
        }else
            mensaje =
            <div className="container">

            <a className="btn btn-light" href="/misProdes">Ver mis prodes guardados</a>



            </div>;

        return (
            <div className="row text-center">


                {mensaje}
                <div className="col-xl">


                    <Listar />

                    <br />
                    <br />
                    <br />
                    <br />
                </div>



            </div>


        );

    }
}
export default Home;
