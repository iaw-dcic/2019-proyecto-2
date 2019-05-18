<?php

namespace App\Http\Controllers;

use App\Campeonato;

class CampeonatosController extends Controller{

    public function getCampeonatos(){
        $campeonatos = Campeonato::all();
        if($campeonatos == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($campeonatos, 200);
    }

    public function getCampeonato($campeonato_id){
        $campeonato = Campeonato::find($campeonato_id);
        if($campeonato == null)
            return Response()->json(['error' => '404 not found'], 404);
        return Response()->json($campeonato, 200);
    }
}
