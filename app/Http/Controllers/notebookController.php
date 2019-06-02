<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\notebook;

class notebookController extends Controller
{
    //
    public function index(){
       $notebooks=notebook::all();
       return response()->json($notebooks);
   }
   public function show($id){

       $n=notebook::find($id);
       return response()->json($n);
   }
   public function store(){

       $datos = request()->all();
       $n=notebook::create([
             'modelid' => $datos['modelid'],
             'sizeid' => $datos['sizeid'],
             'colorid' => $datos['colorid'],
             'url' => $datos['url'],
             ]);
     return $n;
   }
   public function destroy($id){
       $n=notebook::find($id);
       $n->delete();
       return response()->json($n);
   }

   public function update(){
       $equipos=Equipo::all();
       return response()->json($equipos);
   }
   public function edit(){
       $equipos=Equipo::all();
       return response()->json($equipos);
   }
}
