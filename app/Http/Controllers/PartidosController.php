<?php

namespace App\Http\Controllers;

use App\Partido;
use App\Equipo;
use App\Prode;
use App\User;
use Auth;
use Illuminate\Http\Request;

class PartidosController extends Controller{

    public function getPartidos(){
        $partidos = Partido::all();
        foreach($partidos as $partido)
            $partido = $this->crearPartido($partido);
        if($partidos == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($partidos, 200);
    }

    public function getPartido($math_id){
        $partido = Partido::find($match_id);
        $partido = $this->crearPartido($partido);
        if($partido == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($partido, 200);
    }

    public function getPartidosPorGrupos($prode_id){
        $user = Auth()->user();
        $prode = $user->getProdes()->find($prode_id);
        $grupos = $prode->getPartidos()->get()->groupBy('fase');
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
        $partido->local = Equipo::find($local_id);
        $partido->visitante = Equipo::find($visitante_id);
        if($partido->ganador == "local")
            $partido->ganador = $partido->local->id;
        else if($partido->ganador == "visitante")
            $partido->ganador = $partido->visitante->id;
        else if(!$partido->ganador == "empate")
            $partido->ganador = null;
        array_pull($partido, 'local_id');
        array_pull($partido, 'visitante_id');
        array_pull($partido, 'pivot');
        return $partido;
    }
}
