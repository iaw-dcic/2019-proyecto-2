<?php

namespace App\Http\Controllers;

use App\ListaPartido;
use App\Partido;
use Illuminate\Http\Request;

class PartidoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        
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
        $listaPartido = new ListaPartido;
        $listaPartido -> user_id = 1;
        $listaPartido -> save();
        // foreach ($request as $partido) {
        //     $nuevoPartido = new Partido;
        //     $nuevoPartido-> lista_partido_id =  $listaPartido -> $id;
        //     $nuevoPartido-> numero_partido = $partido -> id;
        //     $nuevoPartido-> etapa = $partido -> etapa;
        //     $nuevoPartido-> equipo1 = $partido -> equipo1;
        //     $nuevoPartido-> equipo2 = $partido -> equipo2;
        //     $nuevoPartido-> boton1 = $partido -> boton1;
        //     $nuevoPartido-> boton2 = $partido -> boton2;
        //     $nuevoPartido-> save();
        // }
        return $listaPartido;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Partido  $partido
     * @return \Illuminate\Http\Response
     */
    public function show(Partido $partido)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Partido  $partido
     * @return \Illuminate\Http\Response
     */
    public function edit(Partido $partido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Partido  $partido
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Partido $partido)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Partido  $partido
     * @return \Illuminate\Http\Response
     */
    public function destroy(Partido $partido)
    {
        //
    }
}
