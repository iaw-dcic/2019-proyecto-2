<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Equipo;
use App\Prode;
use App\User;
use Illuminate\Support\Facades\Auth;

class TeamController extends Controller
{
    public function getOctavos()
    {
        $octavosToRet = [];
        $octavos = Equipo::select('name')->get();
        
        for ($i = 0; $i < 16; $i++) {
            $octavosToRet[$i] = $octavos[$i]->name;    
        }
        return response()->json($octavosToRet);
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
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $octavos = implode(',', $request->input('data.octavos'));
        $cuartos = implode(',', $request->input('data.cuartos'));
        $semis = implode(',', $request->input('data.semis'));
        $final = implode(',', $request->input('data.final'));
        $champ = $request->input('data.champ');
        $prode = new Prode;
        $prode->octavos = $octavos;
        $prode->cuartos = $cuartos;
        $prode->semis = $semis;
        $prode->final = $final;
        $prode->champ = $champ;
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
        $prode = Prode::where('id', $id)->get(['octavos', 'cuartos', 'semis', 'final', 'champ', 'created_at']);
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
        $octavos = implode(',', $request->input('data.octavos'));
        $cuartos = implode(',', $request->input('data.cuartos'));
        $semis = implode(',', $request->input('data.semis'));
        $final = implode(',', $request->input('data.final'));
        $champ = $request->input('data.champ');
        $prode = Prode::find($id);
        $prode->octavos = $octavos;
        $prode->cuartos = $cuartos;
        $prode->semis = $semis;
        $prode->final = $final;
        $prode->champ = $champ;
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
        $prode = Prode::find($id);
        $prode->delete();
        $prodes = Prode::where('user_id', auth('api')->user()->id)->select('created_at', 'id')->get();
        return response()->json($prodes);
    }
}