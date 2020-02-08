<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Team;
use App\User;
use App\Match;
class TeamController extends Controller
{
//EL usuario solo podrá ver la lista de equipos y cada equipo en detalle, no puede eliminar ni insertar ni editar.
    public function index()
    {
      $team = Team::all();
        return response()->json($team);
   }

    public function show(Team $team)
    {
      $team=Team::find($id);
      return response()->json($team);
    }
}
