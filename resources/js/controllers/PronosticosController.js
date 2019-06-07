import PronosticoModel from '../models/PronosticoModel';

export default class PronosticosController{

    constructor(api_token){
        this.api_token = api_token;
        this.pronosticosModel = new PronosticoModel(this.api_token);
    }

    async loadProdes(){
        let prodes = await this.pronosticosModel.loadProdes()
        this.pronosticosModel.saveAllProdesOnLocalStorage(prodes);
        return prodes;
    }

    async createProde(){
        let prode = await this.pronosticosModel.createProde(this.api_token);
        this.pronosticosModel.saveProdeOnLocalStorage(prode);
        return prode;
    }
}