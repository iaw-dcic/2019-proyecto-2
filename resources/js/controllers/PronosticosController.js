import PronosticosModel from '../models/pronosticos/PronosticosModel';

export default class PronosticosController{

    constructor(view){
        this.view = view;
        this.state = this.view.state;
        this.pronosticosModel = new PronosticosModel(this.state.user);
    }

    loadPronosticos(){
        this.pronosticosModel.loadProdes(
            (prodes) => {
                this.pronosticosModel.saveAllProdesOnLocalStorage(prodes);
                this.view.setState({ user: this.state.user, prodes });
            },
            (error) => console.log(error)
        )
    }
}