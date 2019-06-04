<?php

namespace App\Http\Controllers;

use App\Remeras;
use Illuminate\Http\Request;

class RemerasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $remera= new Remeras();
        
        $remera->color= $request->color_remera;
        $remera->cuello= $request->cuello_remera;
        $remera->tipo= $request->tipo_remera;
        $remera->id_usuario=2;
        // $remera->id_usuario= auth('api')->user()->id,

        $remera->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Remeras  $remeras
     * @return \Illuminate\Http\Response
     */
    public function show(Remeras $remeras)
    {
       //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Remeras  $remeras
     * @return \Illuminate\Http\Response
     */
    public function edit(Remeras $remeras)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Remeras  $remeras
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $remera = Remeras::find($id);
    
        $remera->color= $request->color_remera;
        $remera->cuello= $request->cuello_remera;
        $remera->tipo= $request->tipo_remera;
        $remera->id_usuario=1;
        //$remera->id_usuario=auth('api')->user()->id,

        $remera->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Remeras  $remeras
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        /*
        $remera = Remeras::findOrFail($id);
        if(auth('api')->user()->id == $remera->id_usuario){
            $remera->delete();
            return response()->json(['result' => 'success']);
        }
        return response()->json(['result' => 'fail']);*/
    }
        
    public function misCreaciones()
    {//
        /* $userId = auth('api')->user()->id;
        $remeras=Remeras::where('user_id', $userId)->get();
        $remeras=Remeras::find(2);

        $arregloRemeras = [];
        foreach ($remeras as $remera) {
            $arreglo[] = ['id' => $remera->id, 'color' => $remera->color,  'tipo' => $remera->tipo, 'cuello' => $remera->cuello];
        }
        return response()->json($arreglo, 200);
        */
    }
}
