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
            $partido->ganador       = $request->input('data.octavos.'.$i.'.4');

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
            $partido->ganador       = $request->input('data.cuartos.'.$i.'.4');

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
            $partido->ganador       = $request->input('data.semifinales.'.$i.'.4');

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

    public function getTorneo($torneoId) {
        $torneo = Torneos::where('id', $torneoId)->first();

        $octavos = Partidos::where('torneo_id', $torneo->id)
                            ->where('estado', 0)
                            ->get();
        
        $cuartos = Partidos::where('torneo_id', $torneo->id)
                            ->where('estado', 1)
                            ->get();

        $semifinales = Partidos::where('torneo_id', $torneo->id)
                            ->where('estado', 2)
                            ->get();

        $final = Partidos::where('torneo_id', $torneo->id)
                            ->where('estado', 3)
                            ->get();
        
        $ret = [$torneo, $octavos, $cuartos, $semifinales, $final];

        return response()->json($ret);
    }

    public function updateTorneo(Request $request, $torneoId) {
        $torneo = Torneos::where('id', $torneoId)->first();

        $torneo->etapa      = $request->input('data.etapa');
        $torneo->campeon    = $request->input('data.campeon');

        $torneo->save();

        $partidos = Partidos::where('torneo_id', $torneo->id)
                            ->where('estado', 0)
                            ->get();
        $i = 0;
        foreach ($partidos as $p) {
            $p->equipo1       = $request->input('data.octavos.'.$i.'.0');
            $p->equipo2       = $request->input('data.octavos.'.$i.'.1');
            $p->jugado        = $request->input('data.octavos.'.$i.'.2');
            $p->ganador       = $request->input('data.octavos.'.$i.'.4');

            $p->save();
            $i++;
        }

        $partidos = Partidos::where('torneo_id', $torneo->id)
                            ->where('estado', 1)
                            ->get();
        $i = 0;
        foreach ($partidos as $p) {
            $p->equipo1       = $request->input('data.cuartos.'.$i.'.0');
            $p->equipo2       = $request->input('data.cuartos.'.$i.'.1');
            $p->jugado        = $request->input('data.cuartos.'.$i.'.2');
            $p->ganador       = $request->input('data.cuartos.'.$i.'.4');

            $p->save();
            $i++;
        }

        $partidos = Partidos::where('torneo_id', $torneo->id)
                            ->where('estado', 2)
                            ->get();
        $i = 0;
        foreach ($partidos as $p) {
            $p->equipo1       = $request->input('data.semifinales.'.$i.'.0');
            $p->equipo2       = $request->input('data.semifinales.'.$i.'.1');
            $p->jugado        = $request->input('data.semifinales.'.$i.'.2');
            $p->ganador       = $request->input('data.semifinales.'.$i.'.4');

            $p->save();
            $i++;
        }

        $partido = Partidos::where('torneo_id', $torneoId)
                            ->where('estado', 3)
                            ->first();
        
        $partido->equipo1   = $request->input('data.final.0');
        $partido->equipo2   = $request->input('data.final.1');
        $partido->jugado    = $request->input('data.final.2');

        $partido->save();

        return response()->json('OK');
    }

    public function deleteTorneo($torneoId) {
        $torneo = Torneos::where('id', $torneoId)->first();

        $torneo->delete();

        return response()->json('OK');
    }
}
