<?php

namespace App\Http\Controllers;

use App\Partido;
use App\Equipo;
use App\Campeonato;

class PartidosController extends Controller{

    public function getPartidos(){
        $partidos = Partido::all();
        foreach($partidos as $partido)
            $partido = $this->crearPartido($partido);

        if($partidos == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($partidos, 200);
    }

    public function getPartido($partido_id){
        $partido = Partido::find($partido_id);
        $partido = $this->crearPartido($partido);
        if($partido == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($partido, 200);
    }

    public function getPartidosPorCampeonato($campeonato_id){
        $partidos = Partido::where(['campeonato_id' => $campeonato_id])->get();
        foreach($partidos as $partido)
            $partido = $this->crearPartido($partido);
        if($partidos == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($partidos, 200);
    }

    public function getPartidoPorCampeonato($campeonato_id, $match_id){
        $partido = Partido::where(['id' => $match_id, 'campeonato_id' => $campeonato_id])->get()->first();
        $partido = $this->crearPartido($partido);
        if($partido == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($partido, 200);
    }

    public function getPartidosPorGrupo($campeonato_id){
        $grupos = Partido::where(['campeonato_id' => $campeonato_id])->get()->groupBy('grupo');
        foreach($grupos as $grupo)
            foreach($grupo as $partido)
                $partido = $this->crearPartido($partido);
        if($grupos == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($grupos, 200);
    }

    private function crearPartido($partido){
        $local_id = $partido->local_id;
        $visitante_id = $partido->visitante_id;
        $campeonato_id = $partido->campeonato_id;
        $partido->campeonato = Campeonato::find($campeonato_id);
        $partido->local = Equipo::find($local_id);
        $partido->visitante = Equipo::find($visitante_id);
        if($partido->ganador == "HOME_TEAM")
            $partido->ganador = $partido->local->id;
        else if($partido->ganador == "AWAY_TEAM")
            $partido->ganador = $partido->visitante->id;
        else
            $partido->ganador = "Empate";
        array_pull($partido, 'campeonato_id');
        array_pull($partido, 'local_id');
        array_pull($partido, 'visitante_id');
        return $partido;
    }
}
