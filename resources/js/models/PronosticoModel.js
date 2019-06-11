var Axios = require('axios');

export default class PronosticoModel{

    constructor(api_token){
        this.api_token = api_token;
        this.fases = {'octavos': 0, 'cuartos': 1, 'semis': 2, 'final': 3, 'tercer_puesto': 3};
        //this.setTokens();
    }

    setTokens(){
        let token = document.head.querySelector('meta[name="csrf-token"]').content;
        let api_token = document.head.querySelector('meta[name="api-token"]').content;

        Axios.defaults.headers.common = {
            'X-CSRF-TOKEN': token,
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': 'Bearer ' + api_token,
        };
    }

    async loadProdes(){
        this.setTokens();
        let response = await Axios.get(`/api/prodes`);
        localStorage.clear();
        return response.data.map(prode => this.transformarDatosDesdeServidor(prode));
    }

    async saveProde(prode){
        this.setTokens();
        let pronostico = this.transformarDatosHaciaServidor(prode);
        let response = await Axios.post(`/api/prodes`, pronostico);
        console.log(response);
        let prodeDB = this.transformarDatosDesdeServidor(response.data);
        return prodeDB;
    }

    async createProde(){
        this.setTokens();
        let response = await Axios.get('/api/create_prode');
        let id = response.data;
        let prode = await this.resetProde({ id, teams: null, results: null });
        return prode;
    }

    async resetProde(prode){
        let teams = prode.teams != null ? prode.teams : await this.getEquipos();
        let results = prode.results != null ? this.resetResults(prode.results) : [[[],[],[],[]]];
        return { id: prode.id, teams, results};
    }

    async getEquipos(){
        this.setTokens();
        let response = await Axios.get('/api/teams');
        let equipos = response.data;
        let partidos = [];
        for(let i=0; i<equipos.length; i+=2)
            partidos.push([equipos[i].nombre, equipos[i+1].nombre, equipos[i].id, equipos[i+1].id])
        return partidos;
    }

    async deleteProde(prode){
        this.setTokens();
        let response = await Axios.delete(`/api/prodes/${prode.id}`);
        console.log(response.data);
        return response.data.resultado;
    }

    resetResults(results){
        return [results[0].map((result) => {
            return result.map((partido) => {
                return [null, null, partido[2]];
            });
        })];
    }

    removeFromLocalStorage(prode){
        let prodes = JSON.parse(localStorage.getItem('lista_prodes'));
        let indice = this.getIndice(prodes, prode.id);
        prodes.splice(indice, 1);
        localStorage.setItem('lista_prodes', JSON.stringify(prodes));
    }

    getProdeFromLocalStorage(id){
        let prodes = JSON.parse(localStorage.getItem('lista_prodes'));
        let indice = this.getIndice(prodes, id);
        let prode = prodes[indice];
        return prode;
    }

    saveAllProdesOnLocalStorage(prodes){
        localStorage.setItem('lista_prodes', JSON.stringify(prodes));
    }

    saveProdeOnLocalStorage(prode){
        let prodes = JSON.parse(localStorage.getItem('lista_prodes'));
        let indice = this.getIndice(prodes, prode.id);
        if(indice != -1)
            prodes[indice] = prode;
        else
            prodes.push(prode);
        localStorage.setItem('lista_prodes', JSON.stringify(prodes));
    }

    getIndice(prodes, id){
        let i = -1;
        prodes.find((prode, index) => {
            if(prode.id == id)
                i = index;
        });
        return i;
    }

    getMaxIndice(){
        let prodes = JSON.parse(localStorage.getItem('lista_prodes'));
        if(prodes == [])
            return -1;
        else{
            let indices = prodes.map(prode => prode.id);
            let max = Math.max(indices);
            return max;
        }
    }

    transformarDatosDesdeServidor(prode){
        let { id, partidos } = prode;
        let newProde = { id, results: [[],[],[],[]], teams: []};
        partidos.map((partido, i) => {
            let local = partido.local.nombre;
            let local_id = partido.local.id;
            let visitante = partido.visitante.nombre;
            let visitante_id = partido.visitante.id;
            let partido_id = partido.id;
            let goles_local = partido.goles_local;
            let goles_visitante = partido.goles_visitante;
            if(i < 8) newProde.teams.push([local, visitante, local_id, visitante_id]); // el indice menor a 8 para obtener solo los primeros 16 equipos
            newProde.results[this.fases[partido.fase]].push([goles_local, goles_visitante, partido_id]);
        });
        newProde.results = [newProde.results];
        return newProde;
    }

    transformarDatosHaciaServidor(prode){
        let teams = prode.teams;
        let results = prode.results.flat(2);

        let prode_nuevo = {id: prode.id, partidos: []};
        let posiciones = {8: 0, 9: 2, 10: 4, 11: 6, 12: 8, 13: 10, 14: 12, 15: 12};

        results.forEach((result, indice) => {
            let id = result[2];
            let local = null, visitante = null, local_id = null, visitante_id = null;
            let ganador = null, perdedor = null;

            if(result[0] == null || result[1] == null) return;

            let resultado_local = result[0] , resultado_visitante = result[1];

            if(teams[indice] != null){
                //Los octavos los puedo tener directamente
                local = teams[indice][0];
                visitante = teams[indice][1];
                local_id = teams[indice][2];
                visitante_id = teams[indice][3];

            }else if(indice == 15){
                try{
                    let partido_1 = prode_nuevo.partidos[posiciones[indice]].resultado;
                    let partido_2 = prode_nuevo.partidos[posiciones[indice]+1].resultado;

                    local = partido_1.perdedor.equipo;
                    visitante = partido_2.perdedor.equipo;
                    local_id = partido_1.perdedor.id;
                    visitante_id = partido_2.perdedor.id;
                }catch(exception){
                    return;
                }
            }else{
                //El resto se obtiene a partir de los ganadores de las etapas anteriores
                try{
                    let partido_1 = prode_nuevo.partidos[posiciones[indice]].resultado;
                    let partido_2 = prode_nuevo.partidos[posiciones[indice]+1].resultado;

                    local = partido_1.ganador.equipo;
                    visitante = partido_2.ganador.equipo;
                    local_id = partido_1.ganador.id;
                    visitante_id = partido_2.ganador.id;
                }catch(exception){
                    return;
                }
            }

            if(resultado_local > resultado_visitante){
                ganador = {id: local_id, equipo: local};
                perdedor = {id: visitante_id, equipo: visitante};
            }else if(resultado_visitante > resultado_local){
                ganador = {id: visitante_id, equipo: visitante};
                perdedor = {id: local_id, equipo: local};
            }else{
                ganador = {id: null, equipo: null};
                perdedor = {id: null, equipo: null};
            }

            prode_nuevo.partidos.push({
                id: id ? id : null,
                fase: this.getFase(indice),
                local: { local_id, local },
                visitante: { visitante_id, visitante },
                resultado: { ganador, perdedor, resultado_local, resultado_visitante }
            });
        });
        return prode_nuevo;
    }

    getFase(indice){
        switch (true) {
            case indice < 8:
                return 'octavos';
            case indice >= 8 && indice < 12:
                return 'cuartos';
            case indice >= 12 && indice < 14:
                return 'semis';
            case indice == 14:
                return 'final';
            case indice == 15:
                return 'tercer_puesto';
            default:
                break;
        }
    }
}
