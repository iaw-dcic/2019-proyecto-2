<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Team;

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

/*
    public function store(Request $request)
    {
        $team = Team::create($request->all());

        return response()->json($team, 201);
    }

    public function update(Request $request, Team $team)
    {
        $team->update($request->all());

        return response()->json($team, 200);
    }

    public function delete(Team $team)
    {
        $team->delete();

        return response()->json(null, 204);
    }
*/
}
