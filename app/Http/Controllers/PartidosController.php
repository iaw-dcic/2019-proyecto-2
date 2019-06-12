<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Pronostico;
use App\Partido;
use App\Seleccion;

class PartidosController extends Controller
{
    public function getPartidos($ronda, $id){
        $partidos = Partido::where('pronostico_id', '=', $id)->where('ronda', '=', $ronda)->get();
        $arreglo = array();
        $i = 0;

        foreach($partidos as $partido){
            $cSeleccionA = Seleccion::where('codigo', '=', $partido->codigo_sel_A)->get();
            $cSeleccionB = Seleccion::where('codigo', '=', $partido->codigo_sel_B)->get();
            $arreglo['items'][$i++]= array(
                'id' => $partido->id,
                'seleccion_A' => array(
                    'name' => $cSeleccionA[0]->name,
                    'codigo' => $cSeleccionA[0]->codigo,
                    'goles' => $partido->goles_A
                ),
                'seleccion_B' => array(
                    'name' => $cSeleccionB[0]->name,
                    'codigo' => $cSeleccionB[0]->codigo,
                    'goles' => $partido->goles_B
                ),
                'ingreso_goles' => $partido->ingreso_goles

            );
        }
    return response()->json($arreglo, 200);

    }
}
