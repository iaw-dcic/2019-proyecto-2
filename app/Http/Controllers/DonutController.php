<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Donut;

class DonutController extends Controller
{
    public function index()
    {
        $donuts = Donut::all();
        return $donuts->toJson();
    }
 
    public function show($id)
    {
        $donut = Donut::find($id);
        return $donut;
    }
 
    public function store()
    {
        $user=Auth::user();
        
        $data=request()->all();

        $donut = Donut::create([
            'user_id'=>$user->id,
            'sabor_id'=>$data['sabor_id'],
            'glaseado_id'=>$data['glaseado_id'],
            'decorado_id'=>$data['decorado_id'],
        ]);
 
        return response()->json($donut, 201);
    }
 
    public function update($id)
    {
        $donut = Donut::find($id);
        $data = request()->all();
        $donut->update([
            'sabor_id'=>$data['sabor_id'],
            'glaseado_id'=>$data['glaseado_id'],
            'decorado_id'=>$data['decorado_id'],
        ]);
 
        return response()->json($donut, 200);
    }
 
    public function delete($id)
    {
        $donut = Donut::find($id);        
        $donut->delete();
 
        return response()->json(null, 204);
    }
}
