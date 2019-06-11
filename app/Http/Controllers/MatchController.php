<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Match;
use App\Prediction;
use App\User;
use App\Team;
class MatchController extends Controller
{


  public function index($ronda)
  {
     $partidos= Match::where('ronda','=',$ronda)->get();


     return response()->json($partidos);
  }



/*
   public function index($ronda){

       $partidos= Match::where('ronda','=',$ronda)->get();
       $arreglo=array();
       $i=0;
       foreach($partidos as $partido){
          $arreglo[$i++]= array(
              'id' => $partido->id,
              'team1_id'=>$partido->team1_id->id,
              'team2_id' => $partido->team2_id->id,
              'nombre'=> $partido->team2_id->name
              'result'=> $partido->result,
      );
  }

  return response()->json($arreglo,200);

   }
   */
/*
   public function index($ronda){

       $partidos= Match::where('ronda','=',$ronda)->get();
       $arreglo=[];

      for ($i = 0; $i < 16; $i++) {
          $arreglo[$i]->id = $partidos[$i]->id;
            $arreglo[$i]->id = $partidos[$i]->id;
              $arreglo[$i]->id = $partidos[$i]->id;
                $arreglo[$i]->id = $partidos[$i]->id;

      }
   //   return response()->json($teamsToReturn);

      return response()->json($arreglo,200);

  }
*/
   public function show(Match $match)
   {
       return $match;
   }

   public function store(Request $request, Pronostico $pronostico)
   {
       $partido= Match::create([
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
