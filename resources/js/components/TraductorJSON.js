import { POR_JUGAR } from './Torneo'
import { EQUIPO_ND } from './Torneo'
import { EQUIPO1 } from './Torneo'
import { EQUIPO2 } from './Torneo'
import { ESTADO } from './Torneo'


export default class TraductorJSON {
    traducirOctavos(octavosJson) {
        var oct = [ ["", "", POR_JUGAR], 
                    ["", "", POR_JUGAR],
                    ["", "", POR_JUGAR],
                    ["", "", POR_JUGAR],
                    ["", "", POR_JUGAR],
                    ["", "", POR_JUGAR],
                    ["", "", POR_JUGAR],
                    ["", "", POR_JUGAR],] 

        var i = 0
        for (var partido of octavosJson) {
            oct[i][EQUIPO1] = partido.equipo1 ? partido.equipo1:EQUIPO_ND
            oct[i][EQUIPO2] = partido.equipo2 ? partido.equipo2:EQUIPO_ND
            oct[i][ESTADO]  = partido.jugado

            i++
        }

        return oct
    }

    traducirCuartos(cuartosJson) {
        var cuart = [ ["", "", POR_JUGAR], 
                    ["", "", POR_JUGAR],
                    ["", "", POR_JUGAR],
                    ["", "", POR_JUGAR],] 

        var i = 0
        for (var partido of cuartosJson) {
            cuart[i][EQUIPO1] = partido.equipo1 ? partido.equipo1:EQUIPO_ND
            cuart[i][EQUIPO2] = partido.equipo2 ? partido.equipo2:EQUIPO_ND
            cuart[i][ESTADO]  = partido.jugado

            i++
        }

        return cuart
    }

    traducirSemifinales(semifinalesJson) {
        var semi = [ ["", "", POR_JUGAR], 
                    ["", "", POR_JUGAR],] 

        var i = 0
        for (var partido of semifinalesJson) {
            semi[i][EQUIPO1] = partido.equipo1 ? partido.equipo1:EQUIPO_ND
            semi[i][EQUIPO2] = partido.equipo2 ? partido.equipo2:EQUIPO_ND
            semi[i][ESTADO]  = partido.jugado

            i++
        }

        return semi
    }

    traducirFinal(finalJson) {
        return [finalJson[0].equipo1 ? finalJson[0].equipo1:EQUIPO_ND, 
                finalJson[0].equipo2 ? finalJson[0].equipo2:EQUIPO_ND, 
                finalJson[0].jugado]
    }
}