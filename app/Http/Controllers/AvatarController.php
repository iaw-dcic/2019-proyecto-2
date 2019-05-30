<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Avatar;
use App\User;

class AvatarController extends Controller
{
    /*
    public function __construct(){

        $this->middleware('auth');

    }
    */

    /**
     * Display a listing of the resource.
     *
     * RESTFULL: GET ALL
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //Obtengo el usuario logueado
        $user=auth()->user();

        dd(auth()->user());
        dd($request);
        

        return response()->json([
            'user' => $user,
            'avatars' => $user->avatars,
            'status' => 'success'
            ], 200);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * RESTFULL: POST ALL
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function store(User $user, Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * RESTFULL: GET 1
     * 
     * @param  int  $id
     * @param \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function show($id, User $user)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * RESTFULL: PATCH
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @param \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(User $user,Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * RESTFULL: DELETE
     * 
     * @param  int  $id
     * @param \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, $id)
    {
        //
    }
}
