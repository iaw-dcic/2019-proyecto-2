<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Team;
//TODO LO QUE SEA PROPIO TENEMOS QUE LLAMARLO SIEMPRE CON APP
use Illuminate\Support\Facades\Auth;
use App\User;

class TeamController extends Controller
{

    /**
     * Va a mandar un json con todos los equipos
     */
     public function index(){

        $teams = Team::all();
        return response()->json([
            "ok" => true,
            "data" => $teams,
        ]);
     }

     public function show($id){
        $team = Team::where('id',$id)->first();
        return response()->json([
            "ok" => true,
            "data" => $team
        ]);

     }
     public function user(){
         return response()->json([
            "ok" => true,
            "data"=> auth('api')->user()->id
         ]);
     }
}
