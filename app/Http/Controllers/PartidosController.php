<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Partido; 
use App\Pronostico;
use DB;
use Response;

class PartidosController extends Controller
{
    public function getPartidosRonda($ronda){
        try {
            DB::beginTransaction();
             $partidos= Partido::where('ronda','=',$ronda)->get();
             $arreglo=array();
             $i=0;
             foreach($partidos as $partido){
                $arreglo["items"][$i++]= array(
                    'id' => $partido->id,
                     'jugador_uno' =>  array(
                         'id' =>$partido->nombreJugadorUno->id,
                         'nombre'=> $partido->nombreJugadorUno->nombre,
                         'pais'=>$partido->nombreJugadorUno->pais,
                          'abrev' => $partido->nombreJugadorUno->abreviado),
                          
                    'jugador_dos' =>  array(
                        'id' =>$partido->nombreJugadorDos->id,
                        'nombre'=> $partido->nombreJugadorDos->nombre,
                        'pais'=>$partido->nombreJugadorDos->pais,
                        'abrev' => $partido->nombreJugadorDos->abreviado)
                        ,
                     'resultado'=> $partido->resultado,
                    'junonombre'=>$partido->nombreJugadorUno->nombre,
                'jdosnombre'=>$partido->nombreJugadorDos->nombre
            );
        }
           DB::commit();
        return response()->json($arreglo,200);
    } catch (\Exception $e) {

        DB::rollback();
        abort(500);
    }

        // if($arreglo != null)
        //      return response()->json($arreglo, 200);
        // else
        //     return abort(404);
    }
    
    public function octavos($i){
        try {
            DB::beginTransaction();
             $partidos= Partido::where('ronda','=',8)->get();
             $arreglo=array();
             $i=0;
         $partido=$partidos[$i];
                $arreglo["items"][$i++]= array(
                    'id' => $partido->id,
                     'jugador_uno' =>  array(
                         'id' =>$partido->nombreJugadorUno->id,
                         'nombre'=> $partido->nombreJugadorUno->nombre,
                         'pais'=>$partido->nombreJugadorUno->pais,
                          'abrev' => $partido->nombreJugadorUno->abreviado),
                          
                    'jugador_dos' =>  array(
                        'id' =>$partido->nombreJugadorDos->id,
                        'nombre'=> $partido->nombreJugadorDos->nombre,
                        'pais'=>$partido->nombreJugadorDos->pais,
                        'abrev' => $partido->nombreJugadorDos->abreviado)
                        ,
                     'resultado'=> $partido->resultado,
                    'junonombre'=>$partido->nombreJugadorUno->nombre,
                'jdosnombre'=>$partido->nombreJugadorDos->nombre
            );
        
           DB::commit();
        return response()->json($arreglo,200);
    } catch (\Exception $e) {

        DB::rollback();
        abort(500);
    }
    }

    
    public function getPartidosPronostico($ronda,$pronostico){
        try {
            DB::beginTransaction();
        $partidos= Partido::where('pronostico','=',$pronostico)->where('ronda', '=', $ronda)->get();
        $arreglo=array();
        $i=0;
        if($ronda == 0){
            $arreglo["items"][$i++]= array(
                'id' => $partidos[0]->id,
                 'jugador_uno' => 
                 array(
                    'id' =>$partidos[0]->nombreJugadorUno->id,
                    'pais'=>$partidos[0]->nombreJugadorUno->pais,
                      'nombre'=>$partidos[0]->nombreJugadorUno->nombre,
                     'abrev' => $partidos[0]->nombreJugadorUno->abreviado));
        } else{
        foreach($partidos as $partido){
           $arreglo["items"][$i++]= array(
               'id' => $partido->id,
                'jugador_uno' => 
                array(
                   'id' =>$partido->nombreJugadorUno->id,
                   'pais'=>$partido->nombreJugadorUno->pais,
                     'nombre'=>$partido->nombreJugadorUno->nombre,
                    'abrev' => $partido->nombreJugadorUno->abreviado),
                'jugador_dos' =>  
                array(
                   'id' =>$partido->nombreJugadorDos->id,
                  'nombre'=> $partido->nombreJugadorDos->nombre,
                  'pais'=>$partido->nombreJugadorDos->pais,
                      'abrev' => $partido->nombreJugadorDos->abreviado),
                'resultado'=> $partido->resultado,
                 'ronda' => $partido->ronda,
            );
       
        }}
        DB::commit();
        return response()->json($arreglo,200);
    } catch (\Exception $e) {

        DB::rollback();
        abort(500);
    }
        // if($arreglo != null)
        //      return response()->json($arreglo, 200);
        // else
        //     return response()->json("no hay", 404);
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

public function eliminarPronostico(Request $request){
    try {
        DB::beginTransaction();     
   Partido::where('id','=',$request->get('c0'))->delete();
   Partido::where('id','=',$request->get('c1'))->delete();
   Partido::where('id','=',$request->get('c2'))->delete();
   Partido::where('id','=',$request->get('c3'))->delete();
   Partido::where('id','=',$request->get('s1'))->delete();
   Partido::where('id','=',$request->get('s2'))->delete();
   Partido::where('id','=',$request->get('f'))->delete();
   Partido::where('id','=',$request->get('campeon'))->delete();
   Pronostico::where('id','=',$request->get('pronostico'))->delete();
   DB::commit();
   return response()->json('Ok',200);
}   catch (\Exception $e) {

      DB::rollback();
     abort(500);
}
}

public function actualizar(Request $request){
    
    try{
        DB::beginTransaction();
        $c0= $request->get('c0');
        $id= $c0['id'];
        $jugador_uno=$c0['jugador_uno'];
        $jugador_dos=$c0['jugador_dos'];
        $partido= Partido::find($id);
        if($partido != null)
        $partido->update([
            'jugador_uno_id' =>$jugador_uno['id'],
            'jugador_dos_id' =>$jugador_dos['id'],
        ]);

        $c1= $request->get('c1');
        $id= $c1['id'];
        $jugador_uno=$c1['jugador_uno'];
        $jugador_dos=$c1['jugador_dos'];
        $partido= Partido::find($id);  
        if($partido != null)   
        $partido->update([
            'jugador_uno_id' =>$jugador_uno['id'],
            'jugador_dos_id' =>$jugador_dos['id'],
        ]);
        
        $c2= $request->get('c2');
        $id= $c2['id'];
        $jugador_uno=$c2['jugador_uno'];
        $jugador_dos=$c2['jugador_dos'];
        $partido= Partido::find($id);  
        if($partido != null)
        $partido->update([
            'jugador_uno_id' =>$jugador_uno['id'],
        '   jugador_dos_id' =>$jugador_dos['id'],
        ]);

        $c3= $request->get('c3');
        $id= $c3['id'];
        $jugador_uno=$c3['jugador_uno'];
        $jugador_dos=$c3['jugador_dos'];
        
        $partido= Partido::find($id);
        if($partido != null)
        $partido->update([
            'jugador_uno_id' =>$jugador_uno['id'],
            'jugador_dos_id' =>$jugador_dos['id'],
        ]);

        $s1= $request->get('s1');
        $id= $s1['id'];
        $jugador_uno=$s1['jugador_uno'];
        $jugador_dos=$s1['jugador_dos'];
        $partido= Partido::find($id);
        if($partido != null)
        $partido->update([
             'jugador_uno_id' =>$jugador_uno['id'],
            'jugador_dos_id' =>$jugador_dos['id'],
        ]);

        $s2= $request->get('s2');
        $id= $s2['id'];
        $jugador_uno=$s2['jugador_uno'];
        $jugador_dos=$s2['jugador_dos'];
        $partido= Partido::find($id);
        if($partido != null)
        $partido->update([
             'jugador_uno_id' =>$jugador_uno['id'],
            'jugador_dos_id' =>$jugador_dos['id'],
        ]);

        $f= $request->get('f');
        $id= $f['id'];
        $jugador_uno=$f['jugador_uno'];
        $jugador_dos=$f['jugador_dos'];
        $partido= Partido::find($id);
        if($partido != null)
        $partido->update([
             'jugador_uno_id' =>$jugador_uno['id'],
            'jugador_dos_id' =>$jugador_dos['id'],
        ]);

        $campeon= $request->get('campeon');
        $id= $campeon['id'];
        $jugador_uno=$campeon['jugador_uno'];
        $partido= Partido::find($id);
        if($partido != null)
        $partido->update([
             'jugador_uno_id' =>$jugador_uno['id']
        ]);
        DB::commit();
    return response()->json($partido,200);
      }  catch (\Exception $e) {
        
        DB::rollback();
        return response()->json($e,500);
       
    }
}
}

 