<?php

namespace App\Http\Controllers;

use App\Bracket;
use App\Matchup;
use App\Team;
use App\Campeon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class BracketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $teams = Team::all();
        // $arr = [];
        // $i = 0;
        // foreach ($teams as $team) {
        //     $arr[$i] = ['0' => $team->name, '1'=> $team->icon];
        //     $i++;
        // }
        // return response()->json($arr);
        $brackets = Bracket::all();
        return response()->json($brackets);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $partidos = $request->input('data.partidos');
        $cuartos = $partidos[1];
        if (is_array($cuartos) || is_object($cuartos)){
            $i=0;
            foreach ($cuartos as $partido) {
                if($partido[0][0]!="" && $partido[0][1]!=""){
                    $m= Matchup::where('user_id', auth('api')->user()->id)->where('bracket_id', $request->input('data.bracket_actual')*10+1)->where('match_no', $i)->where('phase', 'quarter')->delete();
                    $m = new Matchup();
                    $m->user_id=auth('api')->user()->id;
                    $m->bracket_id=$request->input('data.bracket_actual')*10+1;
                    $m->match_no=$i;
                    $m->team1=$partido[0][3];
                    $m->team2=$partido[1][3];
                    $m->result=$partido[2][3];
                    $m->phase='quarter';
                    $m->save();
                }
                $i++;
            }}
        $semis = $partidos[2];
        if (is_array($semis) || is_object($semis)){
            $i=0;
            foreach ($semis as $partido) {
                if($partido[0][0]!="" && $partido[0][1]!=""){
                    $m= Matchup::where('user_id',auth('api')->user()->id)->where('bracket_id', $request->input('data.bracket_actual')*10+1)->where('match_no', $i)->where('phase', 'semis')->delete();
                    $m = new Matchup();
                    $m->user_id=auth('api')->user()->id;
                    $m->bracket_id=$request->input('data.bracket_actual')*10+1;
                    $m->match_no=$i;
                    $m->team1=$partido[0][3];
                    $m->team2=$partido[1][3];
                    $m->result=$partido[2][3];
                    $m->phase='semis';
                    $m->save();
                }
                $i++;
            }}
        $final = $partidos[3];
        if (is_array($final) || is_object($final)){
            $i=0;
            foreach ($final as $partido) {
                if($partido[0][0]!="" && $partido[0][1]!=""){
                    $m= Matchup::where('user_id', auth('api')->user()->id)->where('bracket_id', $request->input('data.bracket_actual')*10+1)->where('match_no', $i)->where('phase', 'final')->delete();
                    $m = new Matchup();
                    $m->user_id=auth('api')->user()->id;
                    $m->bracket_id=$request->input('data.bracket_actual')*10+1;
                    $m->match_no=$i;
                    $m->team1=$partido[0][3];
                    $m->team2=$partido[1][3];
                    $m->result=$partido[2][3];
                    $m->phase='final';
                    $m->save();
                }
                $i++;
            }}
        $campeon = $request->input('data.champ');
        if($campeon!=""){
            $c = new Campeon();
            $c->bracket_id=$request->input('data.bracket_actual')*10+1;
            $c->user_id=auth('api')->user()->id;
            $c->team_id=$campeon[3];
            $c->save();
        }
        return $request->input('data');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bracket  $bracket
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $arr = [];
        if (!Auth::guest()){
            $matchs = Matchup::where('bracket_id', $id)->where('user_id', auth('api')->user()->id);
            $arr[0] = $matchs->get();
            $arr[1] = Campeon::where('bracket_id', $id)->where('user_id', auth('api')->user()->id)->first();
        }
        return response()->json($arr);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bracket  $bracket
     * @return \Illuminate\Http\Response
     */
    public function edit(Bracket $bracket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bracket  $bracket
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bracket $bracket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bracket  $bracket
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        Matchup::where('user_id', auth('api')->user()->id)->where('bracket_id', $id*10+1)->delete();
    }
}
