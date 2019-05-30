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
    public function index($user, Request $request)
    {
        //Obtengo el usuario logueado=?
        //dd(User::find($user)->avatars);

        return response()->json([
            'user' => User::find($user),
            'avatars' => User::find($user)->avatars,
            'status' => 'success'
            ], 200);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * RESTFULL: POST ALL
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param int $user
     * @return \Illuminate\Http\Response
     */
    public function store($user, Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * RESTFULL: GET 1
     * 
     * @param  int  $id
     * @param  int $user
     * @return \Illuminate\Http\Response
     */
    public function show($id, $user)
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
     * @param  int $user
     * @return \Illuminate\Http\Response
     */
    public function update($user,Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * RESTFULL: DELETE
     * 
     * @param  int  $id
     * @param  int $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($user, $id)
    {
        //
    }
}
