<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Equipos;

class TorneosController extends Controller
{
    public function pred() {
        $equiposPred = Equipos::all();

        return response()->json($equiposPred);
    }

    public function show() {
        $userId = auth('api')->user();
        dd($userId);

        $torneos = Torneos::where('user_id', $userId)->get();

        return response()->json($torneos);
    }
}
