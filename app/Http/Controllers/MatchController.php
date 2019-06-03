<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Match;

class MatchController extends Controller
{
/*

  public function index()
     {
         $match = Match::all();
         return response()->json($match);
     }
*/

   public function index($ronda){
       $partidos= Match::where('ronda', $ronda)->get();
      return response()->json($partidos, 200);
   }

   public function show(Match $match)
   {
       return $match;
   }

   public function store(Request $request, Pronostico $pronostico)
   {
       $partido= Partido::create([
             'team1_id'=> $request->get('team1'),
             'team1_id'=> $request->get('team1'),
             'ronda' => $request->get('ronda'),
             'lista' => $pronostico->id
            ]
        );

   }

   public function update(Request $request, Match $match)
   {
       $match->update($request->all());

       return response()->json($match, 200);
   }

   public function delete(Match $match)
   {
       $match->delete();

       return response()->json(null, 204);
   }

}
