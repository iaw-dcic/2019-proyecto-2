<?php

namespace App\Http\Controllers;

use App\Prode;
use Illuminate\Http\Request;

class ProdeController extends Controller{

    public function __construct(){
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Prode  $prode
     * @return \Illuminate\Http\Response
     */
    public function show(Prode $prode){
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Prode  $prode
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Prode $prode){
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Prode  $prode
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prode $prode){
        //
    }
}
