<?php

namespace App\Http\Controllers;

use App\Equipo;
use App\Partido;
use App\Prode;
use App\User;

class EquiposController extends Controller{
    public function getEquipos($user_id){
        /*
        if(Auth::user()->id != $user_id)
            return Response()->json(['error' => '401 Unauthorized'], 401);
        $user = Auth::user();
        */
        $equipos = Equipo::all();
        if($equipos == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($equipos, 200);
    }

    public function getEquipo($user_id, $team_id){
        /*
        if(Auth::user()->id != $user_id)
            return Response()->json(['error' => '401 Unauthorized'], 401);
        $user = Auth::user();
        */
        $equipo = Equipo::find($team_id);
        
        if($equipo == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($equipo, 200);
    }
}
