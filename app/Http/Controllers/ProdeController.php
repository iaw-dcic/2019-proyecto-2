<?php

namespace App\Http\Controllers;

use App\Models\Prode;

//TODO LO QUE SEA PROPIO TENEMOS QUE LLAMARLO SIEMPRE CON APP
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProdeController extends Controller
{
    /**
     * Se encarga de listar todos los prodes del usuario autenticado.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = auth('api')->user()->id;
        $prodes = Prode::where('user_id', $id);
        return response()->json([
            "ok" => true,
            "data" => $prodes,
            "user_id" => auth('api')->user()->id,
        ]);
    }
    public function indexUsuario($id)
    {
        $prodes = Prode::where('user_id', $id)->get();
        return response()->json([
            "ok" => true,
            "data" => $prodes,
        ]);
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

        $name = $request->name;
        $cuartos = implode(',', $request->cuartos);
        $semis = implode(',', $request->semis);
        $final = implode(',', $request->final);
        $campeon = implode(',', $request->campeon);

        $prode = new Prode;
        $prode->name = $name;
        $id = 0;
        if (Auth::check()) {
            $id = auth('api')->user()->id;
            $prode->user_id = $id;
        }
        $prode->cuartos = $cuartos;
        $prode->semis = $semis;
        $prode->final = $final;
        $prode->campeon = $campeon;

        // $prode->user_id = auth('api')->user()->id;

        $prode->save();
        return response()->json([

            "ok" => true,
            "message" => "Tu prode ha sido guardado exitosamente",
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $prode = Prode::where('id', $id)->first();
        return response()->json([
            "ok" => true,
            "data" => $prode,
        ]);
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
        $cuartos = implode(',', $request->cuartos);
        $semis = implode(',', $request->semis);
        $final = implode(',', $request->final);
        $campeon = implode(',', $request->campeon);
        $prode = Prode::find($id);
        $prode->cuartos = $cuartos;
        $prode->semis = $semis;
        $prode->final = $final;
        $prode->campeon = $campeon;
        $prode->save();
        return response()->json([
            "ok" => true,
            "message" => "Tu prode ha sido actualizado correctamente",
        ]);
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
        return response()->json([
            "ok" => true,
            "message" => "Tu prode ha sido eliminado",
        ]);
    }
}
