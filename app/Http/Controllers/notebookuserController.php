<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\notebookuser;
use App\notebook;

class notebookuserController extends Controller
{
  public function index(){
     $notebooks=notebookuser::all();
     return response()->json($notebooks);
 }
 public function show($id){

     $n=notebook::find($id);
     return response()->json($n);
 }
 public function store(){
      $n=null;
      $user=Auth::user();
      if($user==null)
        return "USERNULO";
      else{
        $datos = request()->all();
        $notebook=notebook::where([
          ['modelid','=',$datos['modelid']],
          ['sizeid','=',$datos['sizeid']],
          ['colorid','=',$datos['colorid']],
        ])->get();
        if($notebook==null)
          return "MERCA";
        else{

          $n=notebookuser::create([
                'userid' => $user->id,
                'notebookid' => $notebook[0]->id,
                'stickerurl' => $notebook[0]->url,
            ]);
            return $n;
          }

      }
   return $n;
 }
 public function destroy($id){
     $n=notebookuser::find($id);
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
