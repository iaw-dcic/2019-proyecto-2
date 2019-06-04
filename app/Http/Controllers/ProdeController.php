<?php

namespace App\Http\Controllers;

use App\Prode;
use Illuminate\Http\Request;

class ProdeController extends Controller
{
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
        $campeon = $request->input('data.campeon');
        $prode = new Prode();
        $prode->octavos = $octavos;
        $prode->cuartos = $cuartos;
        $prode->semis = $semis;
        $prode->final = $final;
        $prode->campeon = $campeon;
        $prode->user_id = auth('api')->user()->id; 
        $prode->save();
        $prodes = Prode::where('user_id', auth('api')->user()->id)->select('created_at', 'id')->get();
        return response()->json($prodes);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Prode  $prode
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $prode = Prode::where('id', $id)->get(['octavos', 'cuartos', 'semis', 'final', 'campeon', 'created_at']);
        return response()->json($prode);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Prode  $prode
     * @return \Illuminate\Http\Response
     */
    public function edit(Prode $prode)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Prode  $prode
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $prode=Prode::find($id);
        $octavos = implode(',', $request->input('data.octavos'));
        $cuartos = implode(',', $request->input('data.cuartos'));
        $semis = implode(',', $request->input('data.semis'));
        $final = implode(',', $request->input('data.final'));
        $campeon = $request->input('data.campeon');
        $prode->octavos = $octavos;
        $prode->cuartos = $cuartos;
        $prode->semis = $semis;
        $prode->final = $final;
        $prode->campeon = $campeon;
        $prode->user_id = auth('api')->user()->id; 
        $prode->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Prode  $prode
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
