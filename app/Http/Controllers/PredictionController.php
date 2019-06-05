<?php

namespace App\Http\Controllers;

use App\Prediction;
use Illuminate\Http\Request;
use Auth;

class PredictionController extends Controller
{

    public function __construct()
    {

        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $predictions = $request->user()->prediction()->get();

        return $predictions;
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
        $prediction = New Prediction();

        $prediction->name = $request->name;
        $prediction->user_id = $request->user()->id;

        if ($prediction->save()) {
            return response()->json($prediction, 201);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Prediction  $prediction
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $prediction = Prediction::where('id', $id)->first();

        return $prediction->match()->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Prediction  $prediction
     * @return \Illuminate\Http\Response
     */
    public function edit(Prediction $prediction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Prediction  $prediction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Prediction $prediction)
    {
        $prediccion = Prediction::find($prediction);

        $prediccion->name = $request->name;
        $prediccion->user_id = Auth::user()->id;

        if ($prediccion->save()) {
            return response()->json($prediccion, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Prediction  $prediction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if (Prediction::where('id', $request->id)->delete()) {
            return response()->json(null, 204);
        }
    }
}
