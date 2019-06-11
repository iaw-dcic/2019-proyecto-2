<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Team;

class TeamController extends Controller
{

    /**
     * Va a mandar un json con todos los equipos
     */
     public function index(){

        $teams = Team::all();
        return response()->json([
            "ok" => true,
            "data" => $teams
        ]);
     }

     public function show($id){
        $team = Team::where('id',$id)->first();
        return response()->json([
            "ok" => true,
            "data" => $team
        ]);

     }
}
