<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PartidosController extends Controller
{
    public function getPartidos($ronda, $id){
        $partidos = Partido::where('id_pronostico', '=', $id)->get();
        $arreglo = array();
        $i = 0;

        foreach($partidos as $partido){
            $seleccionA = Seleccion::find($partido->codigo_sel_A);
            $seleccionB = Seleccion::find($partido->codigo_sel_B);
            $arreglo['items'][$i++]= array(
                'id' => $partido->id,
                'seleccion_A' => array(
                    'name' => $seleccionA->name,
                    'codigo' => $seleccionA->codigo,
                    'goles' => $partido->goles_A
                ),
                'seleccion_B' => array(
                    'name' => $seleccionB->name,
                    'codigo' => $seleccionB->codigo,
                    'goles' => $partido->goles_B
                ),
                'ingreso_goles' => $partido->ingreso_goles

            );
        }
    return response()->json($arreglo, 200);

    }
}
