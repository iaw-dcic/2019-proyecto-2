<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Team;
use App\Prode;
use App\User;
use Illuminate\Support\Facades\Auth;
class TeamController extends Controller
{
    public function getTeams()
    {
        $teamsToReturn = [];
        $teams = Team::select('name')->get();
        
        for ($i = 0; $i < 16; $i++) {
            $teamsToReturn[$i] = $teams[$i]->name;    
        }   
        return response()->json($teamsToReturn);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prodes = Prode::where('user_id', auth('api')->user()->id)->select('created_at', 'id')->get();
        return response()->json($prodes);
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
    /**prodes
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $teams = implode(',', $request->input('data.teams'));
        $quarTeams = implode(',', $request->input('data.quarTeams'));
        $semiTeams = implode(',', $request->input('data.semiTeams'));
        $finalTeams = implode(',', $request->input('data.finalTeams'));
        $championTeam = $request->input('data.championTeam');
        $prode = new Prode;
        $prode->teams = $teams;
        $prode->quarTeams = $quarTeams;
        $prode->semiTeams = $semiTeams;
        $prode->finalTeams = $finalTeams;
        $prode->championTeam = $championTeam;
        $prode->user_id = auth('api')->user()->id;
        $prode->save();
        $prodes = Prode::where('user_id', auth('api')->user()->id)->select('created_at', 'id')->get();
        return response()->json($prodes);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
        $prode = Prode::where('id', $id)->get(['teams', 'quarTeams', 'semiTeams', 'finalTeams', 'championTeam', 'created_at']);
        return response()->json($prode);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $equipos = implode(',', $request->input('data.teams'));
        $cuartos = implode(',', $request->input('data.quarTeams'));
        $semis = implode(',', $request->input('data.semiTeams'));
        $final = implode(',', $request->input('data.finalTeams'));
        $campeon = $request->input('data.championTeam');
        $prode = Prode::find($id);
        $prode->teams = $equipos;
        $prode->quarTeams = $cuartos;
        $prode->semiTeams = $semis;
        $prode->finalTeams = $final;
        $prode->championTeam = $campeon;
        $prode->save();
        return response()->json($semis);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}