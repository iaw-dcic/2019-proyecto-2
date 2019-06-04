<?php

namespace App\Http\Controllers;

use App\Cuello;
use Illuminate\Http\Request;

class CuelloController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cuello = Cuello::all('nombre','id');
        return $cuello->toJson();
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
     * @param  \App\Cuello  $cuello
     * @return \Illuminate\Http\Response
     */
    public function show(Cuello $cuello)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Cuello  $cuello
     * @return \Illuminate\Http\Response
     */
    public function edit(Cuello $cuello)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Cuello  $cuello
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cuello $cuello)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Cuello  $cuello
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cuello $cuello)
    {
        //
    }
}
