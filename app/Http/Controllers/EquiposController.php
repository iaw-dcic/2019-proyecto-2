<?php

namespace App\Http\Controllers;

use App\Equipo;
use App\Partido;
use App\Prode;
use App\User;
use Auth;

class EquiposController extends Controller{

    public function __construct(){
        $this->middleware('auth');
    }

    public function getEquipos(){
        $equipos = Equipo::all();
        if($equipos == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($equipos, 200);
    }

    public function getEquipo($team_id){
        $equipo = Equipo::find($team_id);
        if($equipo == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($equipo, 200);
    }
}
