<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Avatar;
use App\Body;
use App\Eye;
use App\Hair;
use App\Mouth;
use App\Nose;

class AvatarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $avatars = Avatar::where('user_id',$user->id)->get();
        foreach($avatars as $avatar){
            $avatar->body = Body::where('id', $avatar->body_id)->get()->first();
            $avatar->eyes = Eye::where('id', $avatar->eyes_id)->get()->first();
            $avatar->hair = Hair::where('id', $avatar->hair_id)->get()->first();
            $avatar->mouth = Mouth::where('id', $avatar->mouth_id)->get()->first();
            $avatar->nose = Nose::where('id', $avatar->nose_id)->get()->first();
        }
        return $avatars;
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
        $user = Auth::user();
        return Avatar::create([
            'user_id' => $user->id,
            'name' => $request->name,
            'body_id' => $request->body_id, 
            'hair_id' => $request->hair_id, 
            'eyes_id' => $request->eyes_id, 
            'nose_id' => $request->nose_id, 
            'mouth_id' => $request->mouth_id,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $avatar = Avatar::where('id', $id)->get()->first();
        $avatar->body = Body::where('id', $avatar->body_id)->get()->first();
        $avatar->eyes = Eye::where('id', $avatar->eyes_id)->get()->first();
        $avatar->hair = Hair::where('id', $avatar->hair_id)->get()->first();
        $avatar->mouth = Mouth::where('id', $avatar->mouth_id)->get()->first();
        $avatar->nose = Nose::where('id', $avatar->nose_id)->get()->first();
        return $avatar;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $avatar = Avatar::where('id', $id)->get()->first();
        $avatar->update([
            'name' => $request->name,
            'body_id' => $request->body_id, 
            'hair_id' => $request->hair_id, 
            'eyes_id' => $request->eyes_id, 
            'nose_id' => $request->nose_id, 
            'mouth_id' => $request->mouth_id,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $avatar = Avatar::where('id', $id)->get()->first();
        $avatar->delete();
        return($this->index());
    }
}
