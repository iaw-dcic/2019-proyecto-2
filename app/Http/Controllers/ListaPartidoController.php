<?php

namespace App\Http\Controllers;

use App\ListaPartido;
use App\Partido;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ListaPartidoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllPartidos()
    {
        if(!Auth::check()){
            return [];
        }
        $user_id = Auth::user()->id;
        return User::all()->find($user_id)->listaPartidos()->get();
    }

    public function getLista($id)
    {
        return ListaPartido::all()->find($id)->partidos()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $listaPartido = new ListaPartido;
        $listaPartido -> user_id = Auth::user()->id;
        $listaPartido -> save();
        foreach ($request->all() as $partido) {
            $nuevoPartido = new Partido;
            $nuevoPartido-> lista_partido_id = $listaPartido->id;
            $nuevoPartido-> etapa = $partido["etapa"];
            $nuevoPartido-> equipo1 = $partido["equipo1"];
            $nuevoPartido-> equipo2 = $partido["equipo2"];
            $nuevoPartido-> boton1 = $partido["boton1"];
            $nuevoPartido-> boton2 = $partido["boton2"];
            $nuevoPartido-> resultado1 = $partido["resultado1"];
            $nuevoPartido-> resultado2 = $partido["resultado2"];
            $nuevoPartido-> numero_partido = $partido["numero_partido"];
            $nuevoPartido-> save();
        }  
        return $request->all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ListaPartido  $listaPartido
     * @return \Illuminate\Http\Response
     */
    public function show(ListaPartido $listaPartido)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ListaPartido  $listaPartido
     * @return \Illuminate\Http\Response
     */
    public function edit(ListaPartido $listaPartido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ListaPartido  $listaPartido
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $idPartido = $request["idPartido"];
        $partidos = $request["partidos"];
        $partidosActualizar = ListaPartido::all()->find($idPartido)->partidos()->get();

        foreach ($partidosActualizar as $partido) {
            $id = $partido->numero_partido;
            $partido-> etapa = $partidos[$id]["etapa"];
            $partido-> equipo1 = $partidos[$id]["equipo1"];
            $partido-> equipo2 = $partidos[$id]["equipo2"];
            $partido-> boton1 = $partidos[$id]["boton1"];
            $partido-> boton2 = $partidos[$id]["boton2"];
            $partido-> resultado1 = $partidos[$id]["resultado1"];
            $partido-> resultado2 = $partidos[$id]["resultado2"];
            $partido-> save();
        }
        return $partidosActualizar;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ListaPartido  $listaPartido
     * @return \Illuminate\Http\Response
     */
    public function destroy(ListaPartido $listaPartido)
    {
        //
    }
}
