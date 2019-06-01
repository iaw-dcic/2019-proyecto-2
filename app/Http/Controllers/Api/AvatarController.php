<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Avatar;
use App\User;

class AvatarController extends Controller
{
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
        // Obtengo el bearer token que envie en el header
        $api_token = $request->bearerToken();

        // Obtengo el user
        $user = auth()->user();        

        // Comparo si coinciden los tokens
        if($api_token != $user->api_token){
            // Si no coinciden los tokens
            $datos = [
                'status' => 'failed',
                'data' => [],
            ];
        }
        else{
            // Coinciden los tokens
            $datos = [
                'status' => 'success',
                'data' => [
                    'user' => $user,
                    'avatars' =>  $user->avatars,
                ]
            ];
        }
        return response()->json($datos, 200);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * RESTFULL: POST ALL
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         // Obtengo el bearer token que envie en el header
         $api_token = $request->bearerToken();

         // Obtengo el user
         $user = auth()->user();        
 
         // Comparo si coinciden los tokens
         if($api_token != $user->api_token){
             // Si no coinciden los tokens
             $json = [
                 'status' => 'failed',
             ];
             return response()->json($datos, 401);
         }
         else{
            // Coinciden los tokens
            // Valido la entrada
            $datos = $request->validate([
                'nombre' => 'string|max:64',
            ]);

            // Creo nuevo avatar
            $avatar = new Avatar;
            $avatar->name = $datos['nombre'];
            
            // Guardo avatar
            $user->avatars()->save($avatar);
             
            $json = [
                'status' => 'success',
                'data' => [
                    'avatar' => $avatar,
                ]
            ];
            return response()->json($json, 200);
         }
    }

    /**
     * Display the specified resource.
     *
     * RESTFULL: GET 1
     * 
     * @param  int  $id
     * @param  int  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id, $user)
    {
        return response()->json([
            'user' => User::find($user),
            'item' => User::find($user)->avatars()->find($id), //puede acortarse
            'status' => 'success',
        ],200);
    }


    /**
     * Update the specified resource in storage.
     *
     * RESTFULL: PATCH
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @param  int  $user
     * @return \Illuminate\Http\Response
     */
    public function update($user, $id, Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * RESTFULL: DELETE
     * 
     * @param  int  $id
     * @param  int  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($user, $id)
    {
        //
    }
}
