<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Auth;
use App\Partido;
use App\Equipo;
use App\Torneo;
use App\User;
use Auth;
use Response;
use DB;

class PronosticoController extends Controller

{
     


    public function __construct()
    {
        $this->middleware('auth:api');
    }
/*
    public function crear_pronostico(){
    		console.log("GET CREAR_PRONOSTICO");
	        $user=Auth::user();
    		     if (!is_null($user))
            		return view('crear_pronostico');
         		else
            		return view('auth/login');

    }
*/
    
     public function crear_pronostico_BD(Request $request){
     		
        $user=Auth::user();
        $data = $request->all();
        $equipos = $data['equipos'];
        $ganador1 = $data['ganador1']+1;
        $ganador2 = $data['ganador2']+1;
        $ganador3 = $data['ganador3']+1;
        $ganador4 = $data['ganador4']+1;
        $ganador5 = $data['ganador5']+1;
        $ganador6 = $data['ganador6']+1;
        $ganador7 = $data['ganador7']+1;

        $torneo= new Torneo();
        $torneo->user_id=$user->id;
        $torneo->save();

        $partido1= new Partido();
        $partido1->id_equipo_local=1;
        $partido1->id_equipo_visitante=2;
        $partido1->id_equipo_ganador=$ganador1;
        $partido1->id_torneo=$torneo->id;
        $partido1->save();

        $partido2= new Partido();
        $partido2->id_equipo_local=3;
        $partido2->id_equipo_visitante=4;
        $partido2->id_equipo_ganador=$ganador2;
        $partido2->id_torneo=$torneo->id;
        $partido2->save();

        $partido3= new Partido();
        $partido3->id_equipo_local=5;
        $partido3->id_equipo_visitante=6;
        $partido3->id_equipo_ganador=$ganador3;
        $partido3->id_torneo=$torneo->id;
        $partido3->save();

        $partido4= new Partido();
        $partido4->id_equipo_local=7;
        $partido4->id_equipo_visitante=8;
        $partido4->id_equipo_ganador=$ganador4;
        $partido4->id_torneo=$torneo->id;
        $partido4->save();

        $semis1= new Partido();
        $semis1->id_equipo_local=$ganador1;
        $semis1->id_equipo_visitante=$ganador2;
        $semis1->id_equipo_ganador=$ganador5;
        $semis1->id_torneo=$torneo->id;
        $semis1->save();

        $semis2= new Partido();
        $semis2->id_equipo_local=$ganador3;
        $semis2->id_equipo_visitante=$ganador4;
        $semis2->id_equipo_ganador=$ganador6;
        $semis2->id_torneo=$torneo->id;
        $semis2->save();

        $final= new Partido();
        $final->id_equipo_local=$ganador5;
        $final->id_equipo_visitante=$ganador6;
        $final->id_equipo_ganador=$ganador7;
        $final->id_torneo=$torneo->id;
        $final->save();

        try {

            return Response()->json([$data]);
        } catch (\Exception $e) {
            abort(500);
        }
        
    }


     public function get_equipos()
    {
       
       
        $teams = Equipo::all();
        

        $arr = [];
        foreach ($teams as $team) {
            $arr[] = $team->nombre;
        }
        return Response::json($arr);
    }

    public function get_pronosticos(){
        $user=Auth::user();
        $predicciones=Torneo::where([ ['user_id', '=', $user->id] ])->get();
        return $predicciones->toJson();

    }

    public function eliminar_pronostico($id ){
        $user=Auth::user();
        $t= Torneo::where([ ['user_id', '=', $user->id] ])->get();
        $arr = $t[$id];

        if($arr->user_id==$user->id){
            $partidos=Torneo::where([ ['id', '=', $arr->id] ])->delete();
        }
        $res=Torneo::where([ ['id', '=', $user->id] ])->get();
        return Response::json($res);
    }

    public function get_pronostico($id ){
        $user=Auth::user();
        $t= Torneo::where([ ['user_id', '=', $user->id] ])->get();
        $arr = $t[$id];
        $partidos=Partido::where([ ['id_torneo', '=', $arr->id] ])->get();


        $arr = [];
        foreach ($partidos as $partido) {
            $arr[] = $partido->id_equipo_ganador;
        }
        return Response::json($arr);

        
        
    }

    public function editar_pronostico(Request $request){
            
        $user=Auth::user();
        $data = $request->all();
        $equipos = $data['equipos'];
        $ganador1 = $data['ganador1']+1;
        $ganador2 = $data['ganador2']+1;
        $ganador3 = $data['ganador3']+1;
        $ganador4 = $data['ganador4']+1;
        $ganador5 = $data['ganador5']+1;
        $ganador6 = $data['ganador6']+1;
        $ganador7 = $data['ganador7']+1;
        $modificar= $data['mod'];

        $t= Torneo::where([ ['user_id', '=', $user->id] ])->get();
        $torneo = $t[$modificar];
       
         $partidos=Partido::where([ ['id_torneo', '=', $torneo->id] ])->get();




        $partido1= $partidos[0];
        $partido1->id_equipo_ganador=$ganador1;
        $partido1->save();

        $partido2= $partidos[1];
        $partido2->id_equipo_ganador=$ganador2;
        $partido2->save();

        $partido3= $partidos[2];
        $partido3->id_equipo_ganador=$ganador3;
        $partido3->save();

        $partido4= $partidos[3];
        $partido4->id_equipo_ganador=$ganador4;
        $partido4->save();

        $semis1= $partidos[4];
        $semis1->id_equipo_local=$ganador1;
        $semis1->id_equipo_visitante=$ganador2;
        $semis1->id_equipo_ganador=$ganador5;
        $semis1->save();

        $semis2= $partidos[5];
        $semis2->id_equipo_local=$ganador3;
        $semis2->id_equipo_visitante=$ganador4;
        $semis2->id_equipo_ganador=$ganador6;
        $semis2->save();

        $final= $partidos[6];
        $final->id_equipo_local=$ganador5;
        $final->id_equipo_visitante=$ganador6;
        $final->id_equipo_ganador=$ganador7;
        $final->save();
        try {

            return Response()->json([$data]);
        } catch (\Exception $e) {
            abort(500);
        }
        
    }




    


}
