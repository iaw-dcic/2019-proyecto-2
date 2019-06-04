import Axios from 'axios';
import PronosticoModel from '../models/PronosticoModel';

export default class PronosticoController{

    //Paso la vista para actualizar los datos
    constructor(user){
        this.user = user;
        this.pronosticoModel = new PronosticoModel(this.user);
    }

    async saveProde(prode){
        let prodeDB = await this.pronosticoModel.saveProde(prode); 
        //this.saveOnLocalStorage(prodeDB);
        return prodeDB;
    }
    
    async resetProde(prode){
        let newProde = await this.pronosticoModel.resetProde(prode);
        this.saveOnLocalStorage(newProde);
        return newProde;
    }

    async deleteProde(prode){
        console.log(prode);
    }

    saveOnLocalStorage(prode){
        this.pronosticoModel.saveProdeOnLocalStorage(prode);
    }

    getFromLocalStorage(prode_id){
        return this.pronosticoModel.getProdeFromLocalStorage(prode_id);
    }
}