import PronosticoModel from '../models/PronosticoModel';

export default class PronosticosController{

    constructor(user){
        this.user = user;
        this.pronosticosModel = new PronosticoModel(this.user);
    }

    async loadProdes(){
        let prodes = await this.pronosticosModel.loadProdes()
        this.pronosticosModel.saveAllProdesOnLocalStorage(prodes);
        return prodes;
    }

    async createProde(){
        let prode = await this.pronosticosModel.createProde(this.user.id);
        this.pronosticosModel.saveProdeOnLocalStorage(prode);
        return prode;
    }
}