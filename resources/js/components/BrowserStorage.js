import { POR_JUGAR, HIGHLIGHT, OFF, NO_GANADOR } from './Torneo'
import { EQUIPO_ND } from './Torneo'
import { OCTAVOS } from './Torneo'

export default class BrowserStorage {
    getOctavos(response) {
        var oct
        
        if (localStorage.octavos) {
            oct = JSON.parse(localStorage.octavos)
            oct.forEach(partido => {
               partido[HIGHLIGHT] = OFF
            });
        } else {
            oct = this.getOctavosFromDB(response)
            localStorage.octavos = JSON.stringify(oct)
        }

        return oct
    }

    getOctavosFromDB(response) {
        var oct = [ ["", "", POR_JUGAR, OFF, NO_GANADOR], 
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],] 

        var i = 0, j = 0
        for (var equipo of response.data) {
            oct[i][j] = equipo.name
            if (j==1) {
                j=0
                i++
            } else
                j++
        }

        return oct
    }

    getCuartos() {
        var cuar

        if (localStorage.cuartos) {
            cuar = JSON.parse(localStorage.cuartos)
            cuar.forEach(partido => {
                partido[HIGHLIGHT] = OFF
             });
        } else {
            cuar = [[EQUIPO_ND, EQUIPO_ND, POR_JUGAR, OFF, NO_GANADOR],
                    [EQUIPO_ND, EQUIPO_ND, POR_JUGAR, OFF, NO_GANADOR],
                    [EQUIPO_ND, EQUIPO_ND, POR_JUGAR, OFF, NO_GANADOR],
                    [EQUIPO_ND, EQUIPO_ND, POR_JUGAR, OFF, NO_GANADOR]]

            localStorage.cuartos = JSON.stringify(cuar)
        }

        return cuar
    }

    getSemis() {
        var semi

        if (localStorage.semifinales) {
            semi = JSON.parse(localStorage.semifinales)
            semi.forEach(partido => {
                partido[HIGHLIGHT] = OFF
             });
        } else {
            semi = [[EQUIPO_ND, EQUIPO_ND, POR_JUGAR, OFF, NO_GANADOR],
                    [EQUIPO_ND, EQUIPO_ND, POR_JUGAR, OFF, NO_GANADOR]]

            localStorage.semifinales = JSON.stringify(semi)
        }

        return semi
    }

    getFinal() {
        var fin
        
        if (localStorage.final) {
            fin = JSON.parse(localStorage.final)
            fin[HIGHLIGHT] = OFF
        } else {
            fin = [EQUIPO_ND, EQUIPO_ND, POR_JUGAR, OFF]

            localStorage.final = JSON.stringify(fin)
        }

        return fin
    }

    getCampeon() {
        if (localStorage.campeon)
            return localStorage.campeon

        localStorage.campeon = EQUIPO_ND
        return EQUIPO_ND
    }

    getEtapa() {
        if (localStorage.etapa) {
            return parseInt(localStorage.etapa, 10)
        }

        localStorage.etapa = OCTAVOS
        return OCTAVOS
    }

    saveOctavos(octavos) {
        localStorage.octavos =  JSON.stringify(octavos)
    }

    saveCuartos(cuartos) {
        localStorage.cuartos = JSON.stringify(cuartos)
    }

    saveSemis(semifinales) {
        localStorage.semifinales = JSON.stringify(semifinales)
    }

    saveFinal(final) {
        localStorage.final = JSON.stringify(final)
    }

    saveCampeon(campeon) {
        localStorage.campeon = campeon
    }

    saveEtapa(etapa) {
        localStorage.etapa = etapa
    }

    borrarMemoria() {
        localStorage.clear()
    }
}