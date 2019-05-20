<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Partido;
class PartidosController extends Controller
{
    public function getPartidosRonda($ronda){
        $partidos= Partido::where('ronda','=',$ronda)->get();
        $arreglo=array();
        $i=1;
        foreach($partidos as $partido){
           $arreglo[$i++]= array(
               'id' => $partido->id,
                'jugador_uno' => $partido->nombreJugadorUno->nombre,
                'jugador_dos' => $partido->nombreJugadorDos->nombre,
                'resultado'=> $partido->resultado
            );
       
        }
        if($arreglo != null)
             return response()->json($arreglo, 200);
        else
        return abort(404);
    }
}
