import { POR_JUGAR } from './Torneo'
import { EQUIPO_ND } from './Torneo'
import { OCTAVOS } from './Torneo'

export default class BrowserStorage {
    octavos

    construct() {
        this.octavos = this.getOctavosFromDB()
    }
    getOctavos(octavos) {
        var oct
        
        if (sessionStorage.octavos)
            oct = JSON.parse(sessionStorage.octavos)
        else {
            oct = octavos
            sessionStorage.octavos = JSON.stringify(octavos)
        }

        return oct
    }

    getCuartos() {
        var cuar

        if (sessionStorage.cuartos)
            cuar = JSON.parse(sessionStorage.cuartos)
        else {
            cuar = [[EQUIPO_ND, EQUIPO_ND, POR_JUGAR],
                    [EQUIPO_ND, EQUIPO_ND, POR_JUGAR],
                    [EQUIPO_ND, EQUIPO_ND, POR_JUGAR],
                    [EQUIPO_ND, EQUIPO_ND, POR_JUGAR]]

            sessionStorage.cuartos = JSON.stringify(cuar)
        }

        return cuar
    }

    getSemis() {
        var semi

        if (sessionStorage.semifinales)
            semi = JSON.parse(sessionStorage.semifinales)
        else {
            semi = [[EQUIPO_ND, EQUIPO_ND, POR_JUGAR],
                    [EQUIPO_ND, EQUIPO_ND, POR_JUGAR]]

            sessionStorage.semifinales = JSON.stringify(semi)
        }

        return semi
    }

    getFinal() {
        var fin
        
        if (sessionStorage.final)
            fin = JSON.parse(sessionStorage.final)
        else {
            fin = [EQUIPO_ND, EQUIPO_ND, POR_JUGAR]

            sessionStorage.final = JSON.stringify(fin)
        }

        return fin
    }

    getCampeon() {
        if (sessionStorage.campeon)
            return sessionStorage.campeon

        sessionStorage.campeon = EQUIPO_ND
        return EQUIPO_ND
    }

    getEtapa() {
        if (sessionStorage.etapa) {
            return parseInt(sessionStorage.etapa, 10)
        }

        sessionStorage.etapa = OCTAVOS
        return OCTAVOS
    }

    saveOctavos(octavos) {
        sessionStorage.octavos =  JSON.stringify(octavos)
    }

    saveCuartos(cuartos) {
        sessionStorage.cuartos = JSON.stringify(cuartos)
    }

    saveSemis(semifinales) {
        sessionStorage.semifinales = JSON.stringify(semifinales)
    }

    saveFinal(final) {
        sessionStorage.final = JSON.stringify(final)
    }

    saveCampeon(campeon) {
        sessionStorage.campeon = campeon
    }

    saveEtapa(etapa) {
        sessionStorage.etapa = etapa
    }
}