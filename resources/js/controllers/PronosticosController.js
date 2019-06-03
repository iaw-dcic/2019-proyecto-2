import PronosticoModel from '../models/PronosticoModel';

export default class PronosticosController{

    constructor(view){
        this.view = view;
        this.state = this.view.state;
        this.pronosticosModel = new PronosticoModel(this.state.user);
    }

    loadPronosticos(){
        this.pronosticosModel.loadProdes()
            .then(prodes => {
                this.pronosticosModel.saveAllProdesOnLocalStorage(prodes);
                this.view.setState({ user: this.state.user, prodes });
            })
            .catch((error) => console.log(error));
    }
}