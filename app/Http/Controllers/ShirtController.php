<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use File;
use Illuminate\Support\Facades\Response;
use App\Shirt;
use App\User;
use App\Http\Resources\Shirt as ShirtResource;

class ShirtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        //$shirts = $user->shirts;
        //return $shirts;
        return ShirtResource::collection($user->shirts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(User $user)
    {
        //abort_if(auth()->id() !== $user->id, 403); //en caso de que el cliente modifique el POST manualmente
        $shirt = $user->addShirt([
            "user_id" => $user->id,
            "color" => "FFFFFF",
            "type" => "tshirt",
            "design_name" => "Your design"
        ]);
        return new ShirtResource($shirt);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $shirt = Shirt::findOrFail($id);
        return new ShirtResource($shirt);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Shirt $shirt, Request $request)
    {
        $shirt->update([
            'design_name' => $request['design_name'],
            'color' => $request['color'],
            'type' => $request['type'],
        ]);
        return new ShirtResource($shirt);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Shirt $shirt)
    {
        $shirt->delete();
        return new ShirtResource($shirt);
    }

    public function getStaticImage($type, $color)
    {
        $filepath = public_path() . '/img/shirts/' . $type . '/' . $color . '.png';
        if (file_exists($filepath)) {
            return Response::json(array(
                'content' => base64_encode(File::get($filepath))

            ));
        }
    }
}
