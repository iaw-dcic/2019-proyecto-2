<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Partido;
use DB;
use Response;

class PartidosController extends Controller
{
    public function getPartidosRonda($ronda){
        $partidos= Partido::where('ronda','=',$ronda)->get();
        $arreglo=array();
        $i=0;
        foreach($partidos as $partido){
           $arreglo["items"][$i++]= array(
               'id' => $partido->id,
                'jugador_uno' =>  array(
                    'id' =>$partido->nombreJugadorUno->id,
                    'nombre'=> $partido->nombreJugadorUno->nombre,
                    'abrev' => $partido->nombreJugadorUno->abreviado),
                'jugador_dos' =>  array(
                    'id' =>$partido->nombreJugadorDos->id,
                     'nombre'=> $partido->nombreJugadorDos->nombre,
                      'abrev' => $partido->nombreJugadorDos->abreviado),
                'resultado'=> $partido->resultado,
                'junonombre'=>$partido->nombreJugadorUno->nombre,
                'jdosnombre'=>$partido->nombreJugadorDos->nombre
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
                   'jug_uno_primer' => array(
                    'id' =>$partidos[$j]->nombreJugadorUno->id,
                    'nombre'=> $partidos[$j]->nombreJugadorUno->nombre,
                    'abrev' => $partidos[$j]->nombreJugadorUno->abreviado),
                   
                    'resultado_primer'=>  $partidos[$j]->resultado,
                   
                    'jug_dos_primer' => array(
                        'id' =>$partidos[$j]->nombreJugadorDos->id,
                         'nombre'=> $partidos[$j]->nombreJugadorDos->nombre,
                          'abrev' => $partidos[$j]->nombreJugadorDos->abreviado,
                    ),
               
               
                    'id_segundo' => $partidos[$i]->id,
                  
                    'jug_uno_seg' => array(
                     'id' =>$partidos[$i]->nombreJugadorUno->id,
                     'nombre'=> $partidos[$i]->nombreJugadorUno->nombre,
                     'abrev' => $partidos[$i]->nombreJugadorUno->abreviado),
                    
                     'resultado_primer'=>  $partidos[$i]->resultado,
                    
                     'jug_dos_seg' => array(
                         'id' =>$partidos[$i]->nombreJugadorDos->id,
                          'nombre'=> $partidos[$i]->nombreJugadorDos->nombre,
                           'abrev' => $partidos[$i]->nombreJugadorDos->abreviado,
                     ),
            );
           $count++; 
         
        }
        if($arreglo != null)
             return response()->json($arreglo, 200);
        else
        return abort(404);
    }

    
    public function getPartidosPronostico($ronda,$pronostico){
        $partidos= Partido::where('pronostico','=',$pronostico)->where('ronda', '=', $ronda)->get();
        $arreglo=array();
        $i=0;
        foreach($partidos as $partido){
           $arreglo["items"][$i++]= array(
               'id' => $partido->id,
                'jugador_uno' => 
                array(
                   'id' =>$partido->nombreJugadorUno->id,
                     'nombre'=>$partido->nombreJugadorUno->nombre,
                    'abrev' => $partido->nombreJugadorUno->abreviado),
                'jugador_dos' =>  
                array(
                   'id' =>$partido->nombreJugadorDos->id,
                  'nombre'=> $partido->nombreJugadorDos->nombre,
                      'abrev' => $partido->nombreJugadorDos->abreviado),
                'resultado'=> $partido->resultado,
                 'ronda' => $partido->ronda,
            );
       
        }
        if($arreglo != null)
             return response()->json($arreglo, 200);
        else
            return response()->json("no hay", 404);
    }
     


public  function store(Request $request){
    try {
        DB::beginTransaction();
        $pronostico= $request->get('pronostico');
        $partido= Partido::create([
            'pronostico' =>  $pronostico,
          'jugador_uno_id'=> $request->get('c0j1'),
           'jugador_dos_id'=> $request->get('c0j2'),
            'ronda' => '4',
            ]   
           );
        $partido1= Partido::create([
            'pronostico' =>  $pronostico,
           'jugador_uno_id'=> $request->get('c1j1'),
           'jugador_dos_id'=> $request->get('c1j2'),
            'ronda' => '4',
            ]   
           );
           $partido2= Partido::create([
            'pronostico' =>  $pronostico,
           'jugador_uno_id'=> $request->get('c2j1'),
           'jugador_dos_id'=> $request->get('c2j2'),
            'ronda' => '4',
            ]   
           );
           $partido3= Partido::create([
            'pronostico' =>  $pronostico,
           'jugador_uno_id'=> $request->get('c3j1'),
           'jugador_dos_id'=> $request->get('c3j2'),
            'ronda' => '4',
            ]   
           );
           $partido4= Partido::create([
            'pronostico' =>  $pronostico,
           'jugador_uno_id'=> $request->get('s1j1'),
           'jugador_dos_id'=> $request->get('s1j2'),
            'ronda' => '2',
            ]   
           );
           $partido4= Partido::create([
            'pronostico' =>  $pronostico,
           'jugador_uno_id'=> $request->get('s2j1'),
           'jugador_dos_id'=> $request->get('s2j2'),
            'ronda' => '2',
            ]   
           );
           $partido5= Partido::create([
            'pronostico' =>  $pronostico,
           'jugador_uno_id'=> $request->get('f1'),
           'jugador_dos_id'=> $request->get('f2'),
            'ronda' => '1',
            ]   
           );
           $partido5= Partido::create([
            'pronostico' =>  $pronostico,
           'jugador_uno_id'=> $request->get('campeon'),
            'ronda' => '0',
            ]   
           );
           DB::commit();
           return response()->json('Ok',200);
       } catch (\Exception $e) {

           DB::rollback();
           abort(500);
       }
   
    
        return response()->json($partido, 201);
    }

}