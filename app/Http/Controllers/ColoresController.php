<?php

namespace App\Http\Controllers;

use App\Colores;
use Illuminate\Http\Request;

class ColoresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $colores = Colores::all('nombre','id');
        return $colores->toJson();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Colores  $colores
     * @return \Illuminate\Http\Response
     */
    public function show(Colores $colores)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Colores  $colores
     * @return \Illuminate\Http\Response
     */
    public function edit(Colores $colores)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Colores  $colores
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Colores $colores)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Colores  $colores
     * @return \Illuminate\Http\Response
     */
    public function destroy(Colores $colores)
    {
        //
    }
}
