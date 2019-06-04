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
        $shirt = $user->addShirt([
            "user_id" => $user->id,
            "color" => "FFFFFF",
            "type" => "tshirt",
            "design_name" => "Your design",
            "decoration" => null,
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
            'decoration' => $request['decoration'],
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

    public function getAllShirts()
    {
        $TshirtsFilepath = public_path() . '/img/shirts/tshirt/';
        $LongsleeveFilepath = public_path() . '/img/shirts/longsleeve/';
        $tshirts = [
            'FFFFFF' => base64_encode(File::get($TshirtsFilepath . 'FFFFFF.png')),
            '1B998B' => base64_encode(File::get($TshirtsFilepath . '1B998B.png')),
            'ED217C' => base64_encode(File::get($TshirtsFilepath . 'ED217C.png')),
            'FF9B71' => base64_encode(File::get($TshirtsFilepath . 'FF9B71.png')),
            '55DDFF' => base64_encode(File::get($TshirtsFilepath . '55DDFF.png')),
        ];
        $longsleeve = array(
            'FFFFFF' => base64_encode(File::get($LongsleeveFilepath . 'FFFFFF.png')),
            '1B998B' => base64_encode(File::get($LongsleeveFilepath . '1B998B.png')),
            'ED217C' => base64_encode(File::get($LongsleeveFilepath . 'ED217C.png')),
            'FF9B71' => base64_encode(File::get($LongsleeveFilepath . 'FF9B71.png')),
            '55DDFF' => base64_encode(File::get($LongsleeveFilepath . '55DDFF.png')),
        );
        return Response::json(array(
            'tshirt' => $tshirts,
            'longsleeve' => $longsleeve
        ));
    }

    public function getShirtImage($type, $color)
    {
        $filepath = public_path() . '/img/shirts/' . $type . '/' . $color . '.png';
        if (file_exists($filepath)) {
            return Response::json(array(
                'content' => base64_encode(File::get($filepath)),
            ));
        }
    }

    public function getAllDecorations()
    {
        $filepath = public_path() . '/img/decorations';
        $count = sizeof(File::files($filepath));
        $decorations = [];
        for ($i = 0; $i < $count; $i++) {
            array_push($decorations, ['id' => $i, 'content' => base64_encode(File::get($filepath . '/' . $i . '.png'))]);
        }
        return Response::json($decorations);
    }

    public function getDecorationImage($id)
    {
        $filepath = public_path() . '/img/decorations/' . $id . '.png';
        if (file_exists($filepath)) {
            return Response::json(array(
                'decoration' => base64_encode(File::get($filepath)),
            ));
        }
    }
}
