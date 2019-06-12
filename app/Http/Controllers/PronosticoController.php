<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Partido;
use App\Equipo;
use App\Torneo;
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
/*    
     public function crear_pronostico_BD(Request $request){
     		{
      
        $data = $request->all();
        $equipos = $data['equipos'];
        $ganador1 = $data['ganador1'];
        $ganador2 = $data['ganador2'];
        $ganador3 = $data['ganador3'];
        $ganador4 = $data['ganador4'];
        $ganador5 = $data['ganador5'];
        $ganador6 = $data['ganador6'];
        $ganador7 = $data['ganador7'];
        try {

            return Response()->json([$data]);
        } catch (\Exception $e) {
            abort(500);
        }
    }
*/
  /*
     public function equipos()
    {

            console.log("GET EQUIPOS");
        $arr= array["A"];
        
        return Response::json($arr);
    }
    
  */

     public function equipos()
    {
      console.log('EQUIPOS');
      $team = Equipo::select('name')->get();
      $devolver=[];
      for($i=0; $i<8; $i++){
        $devolver[$i]= $team[$i]->name;
}
        return response()->json($devolver);
}

    


}
