import { POR_JUGAR, NO_GANADOR, GANADOR, OFF } from './Torneo'
import { EQUIPO_ND } from './Torneo'
import { EQUIPO1 } from './Torneo'
import { EQUIPO2 } from './Torneo'
import { ESTADO } from './Torneo'


export default class TraductorJSON {
    traducirOctavos(octavosJson) {
        var oct = [ ["", "", POR_JUGAR, OFF, NO_GANADOR], 
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],] 

        var i = 0
        for (var partido of octavosJson) {
            oct[i][EQUIPO1] = partido.equipo1 ? partido.equipo1:EQUIPO_ND
            oct[i][EQUIPO2] = partido.equipo2 ? partido.equipo2:EQUIPO_ND
            oct[i][ESTADO]  = partido.jugado
            oct[i][GANADOR] = partido.ganador

            i++
        }

        return oct
    }

    traducirCuartos(cuartosJson) {
        var cuart = [ ["", "", POR_JUGAR, OFF, NO_GANADOR], 
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],] 

        var i = 0
        for (var partido of cuartosJson) {
            cuart[i][EQUIPO1] = partido.equipo1 ? partido.equipo1:EQUIPO_ND
            cuart[i][EQUIPO2] = partido.equipo2 ? partido.equipo2:EQUIPO_ND
            cuart[i][ESTADO]  = partido.jugado
            cuart[i][GANADOR] = partido.ganador

            i++
        }

        return cuart
    }

    traducirSemifinales(semifinalesJson) {
        var semi = [ ["", "", POR_JUGAR, OFF, NO_GANADOR], 
                    ["", "", POR_JUGAR, OFF, NO_GANADOR],] 

        var i = 0
        for (var partido of semifinalesJson) {
            semi[i][EQUIPO1] = partido.equipo1 ? partido.equipo1:EQUIPO_ND
            semi[i][EQUIPO2] = partido.equipo2 ? partido.equipo2:EQUIPO_ND
            semi[i][ESTADO]  = partido.jugado
            semi[i][GANADOR] = partido.ganador

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