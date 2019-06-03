import Axios from 'axios';
import PronosticosModel from '../models/pronosticos/PronosticosModel';

export default class PronosticoController{

    //Paso la vista para actualizar los datos
    constructor(view){
        this.view = view;
        this.state = this.view.state;
        this.pronosticoModel = new PronosticosModel(this.state.user);

        if(this.state.prode == null)
            this.state.prode = this.pronosticoModel.crearNuevoProde(this.state.user.id);
    }

    init(){
        return this.state.prode;
    }

    saveProde(refreshProde){
        let prode = this.pronosticoModel.getProdeFromLocalStorage(this.state.prode.id);
        this.pronosticoModel.saveProde(prode, 
            (prode) => refreshProde(this.pronosticoModel.transformarDatosDesdeServidor(prode)),
            (error) => console.log(error)
        );
    }

    saveOnLocalStorage(data){
        this.pronosticoModel.saveProdeOnLocalStorage(data);
    }

    resetProde(){
        let prode = this.pronosticoModel.resetPronostico(this.state.prode);
        this.saveOnLocalStorage(prode);
        this.view.setState({ user: this.state.user, prode });
    }
}