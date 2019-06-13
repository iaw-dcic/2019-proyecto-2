<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Result; 
use App\Http\Resources\Result as ResultResource; 

class ResultsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Obtengo los resultados
        $results = Result::all();

        // Lo devuelvo como un recurso
        return ResultResource::collection($results);
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
        $result = $request -> isMethod('put') ? Result::findOrFail ($request->result_id) : new Result;
    
        $result->result = $request->input('result');

        if($result->save())
            return new ResultResource($result);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Busco el resultado
        $result = Result::find($id);

        // Lo devuelvo como un recurso
        return new ResultResource($result); 

    }    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Busco el resultado
        $result = Result::find($id);

        if($result->delete())
            return new ResultResource($result); 

    }
}
