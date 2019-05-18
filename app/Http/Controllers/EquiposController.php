<?php

namespace App\Http\Controllers;

use App\Equipo;
use Illuminate\Http\Request;
use App\Partido;

class EquiposController extends Controller{
    public function getEquipo($equipo_id){
        $equipo = Equipo::find($equipo_id);
        if($equipo == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($equipo, 200);
    }

    public function getEquipos(){
        $equipo = Equipo::all();
        if($equipo == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($equipo, 200);
    }

    public function getEquiposPorCampeonato($campeonato_id){
        $ids_equipos = Partido::where(['campeonato_id' => $campeonato_id])->get()->groupBy('local_id')->keys();
        $equipos = [];
        foreach($ids_equipos as $equipo_id)
            array_push($equipos, Equipo::find($equipo_id));
        if($equipos == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($equipos, 200);
    }

    public function getGrupos($campeonato_id){
        $grupos = Partido::where('campeonato_id', $campeonato_id)->get()->groupBy('grupo')->keys();

        if($grupos == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($grupos, 200);
    }
}
