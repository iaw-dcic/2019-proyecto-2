<?php

namespace App\Http\Controllers;

use App\PosicionesCampeonato;
use App\Equipo;
use App\Campeonato;

class PosicionesCampeonatosController extends Controller{
    public function getPuntajesPorEquipos($campeonato_id){
        $posiciones = PosicionesCampeonato::where('campeonato_id', $campeonato_id)->get();
        foreach($posiciones as $posicion)
            $posicion = $this->crearPosicion($posicion);
        if($posiciones == null || count($posiciones) == 0)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($posiciones, 200);
    }

    public function getPuntajesPorGrupos($campeonato_id){
        $puntajes_por_grupos = PosicionesCampeonato::where('campeonato_id', $campeonato_id)->get()->groupBy('grupo');
        foreach($puntajes_por_grupos as $grupos)
            foreach($grupos as $posicion)
                $posicion = $this->crearPosicion($posicion);
        if($puntajes_por_grupos == null || count($puntajes_por_grupos) == 0)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($puntajes_por_grupos, 200);
    }

    public function getPuntajesDeEquipo($campeonato_id, $equipo_id){
        $posiciones = PosicionesCampeonato::where(['campeonato_id' => $campeonato_id, 'equipo_id' => $equipo_id])->get();
        foreach($posiciones as $posicion)
            $posicion = $this->crearPosicion($posicion);
        if($posiciones == null || count($posiciones) == 0)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($posiciones, 200);
    }

    private function crearPosicion($posicion){
        $equipo_id = $posicion->equipo_id;
        $campeonato_id = $posicion->campeonato_id;
        $posicion->equipo = Equipo::find($equipo_id);
        $posicion->campeonato = Campeonato::find($campeonato_id);
        array_pull($posicion, 'equipo_id');
        array_pull($posicion, 'campeonato_id');
    }
}
