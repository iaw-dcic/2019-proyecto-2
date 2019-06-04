<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Equipos;
use \App\Torneos;
use \App\Partidos;

class TorneosController extends Controller
{
    public function pred() {
        $equiposPred = Equipos::all();

        return response()->json($equiposPred);
    }

    public function show() {
        $userId = auth('api')->user()->id;

        $torneos = Torneos::where('user_id', $userId)->get();

        return response()->json($torneos);
    }

    public function save(Request $request) {
        $torneo = new Torneos;
        
        $torneo->user_id    = auth('api')->user()->id;
        $torneo->etapa      = $request->input('data.etapa');
        $torneo->campeon    = $request->input('data.campeon');

        $torneo->save();

        $partido;
        for ($i = 0; $i<=7; $i++) {
            $partido = new Partidos;

            $partido->torneo_id     = $torneo->id;
            $partido->equipo1       = $request->input('data.octavos.'.$i.'.0');
            $partido->equipo2       = $request->input('data.octavos.'.$i.'.1');
            $partido->jugado        = $request->input('data.octavos.'.$i.'.2');
            $partido->estado        = 0;    //Octavos

            $partido->posicion_en_tablero = $i;

            $partido->save();
        }

        for ($i = 0; $i<=3; $i++) {
            $partido = new Partidos;

            $partido->torneo_id     = $torneo->id;
            $partido->equipo1       = $request->input('data.cuartos.'.$i.'.0');
            $partido->equipo2       = $request->input('data.cuartos.'.$i.'.1');
            $partido->jugado        = $request->input('data.cuartos.'.$i.'.2');
            $partido->estado        = 1;    //Cuartos

            $partido->posicion_en_tablero = $i;

            $partido->save();
        }

        for ($i = 0; $i<=1; $i++) {
            $partido = new Partidos;

            $partido->torneo_id     = $torneo->id;
            $partido->equipo1       = $request->input('data.semifinales.'.$i.'.0');
            $partido->equipo2       = $request->input('data.semifinales.'.$i.'.1');
            $partido->jugado        = $request->input('data.semifinales.'.$i.'.2');
            $partido->estado        = 2;    //Cuartos

            $partido->posicion_en_tablero = $i;

            $partido->save();
        }

        $partido = new Partidos;

        $partido->torneo_id = $torneo->id;
        $partido->equipo1   = $request->input('data.final.0');
        $partido->equipo2   = $request->input('data.final.1');
        $partido->jugado    = $request->input('data.final.2');
        $partido->estado    = 3;     //Final

        $partido->posicion_en_tablero = 0;

        $partido->save();

        return response()->json($torneo->id);
    }
}
