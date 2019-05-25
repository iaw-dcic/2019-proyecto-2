<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Partido;
class PartidosController extends Controller
{
    public function getPartidosRonda($ronda){
        $partidos= Partido::where('ronda','=',$ronda)->get();
        $arreglo=array();
        $i=0;
        foreach($partidos as $partido){
           $arreglo["items"][$i++]= array(
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
    
    public function partidos_de_a_dos($ronda){
        $partidos= Partido::where('ronda','=',$ronda)->get();
        $arreglo=array();
        $i=0; $count=0;
        for($i; $i<$partidos->count()-1; $i++){
            $j= $i++;
            $arreglo["items"][$count]= array(
               'id_primer' => $partidos[$j]->id,
                'jugador_uno_primer' =>  $partidos[$j]->nombreJugadorUno->nombre,
                'jugador_dos_primer' =>  $partidos[$j]->nombreJugadorDos->nombre,
                'juno_primer_abre' =>  $partidos[$j]->nombreJugadorUno->abreviado,
                'jdos_primer_abre' =>  $partidos[$j]->nombreJugadorDos->abreviado,
                'resultado_primer'=>  $partidos[$j]->resultado,
               
               'id_segundo' =>  $partidos[$i]->id,
                'jugador_uno_segundo' =>  $partidos[$i]->nombreJugadorUno->nombre,
                'jugador_dos_segundo' => $partidos[$i]->nombreJugadorDos->nombre,
                'juno_segundo_abre' =>  $partidos[$i]->nombreJugadorUno->abreviado,
                'jdos_segundo_abre' =>  $partidos[$i]->nombreJugadorDos->abreviado,
                'resultado_segundo'=> $partidos[$i]->resultado
            );
           $count++; 
         
        }
        if($arreglo != null)
             return response()->json($arreglo, 200);
        else
        return abort(404);
    }
}
