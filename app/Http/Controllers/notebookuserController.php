<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\notebookuser;
use App\notebook;
use App\User;

class notebookuserController extends Controller
{
  public function index(){
    $headertoken = request()->header('authentication');
    $user =User::where([['api_token','=',$headertoken]])->get()->first();
    $notebooks=notebookuser::where([['userid','=',$user->id]])->get();
     return response()->json($notebooks);
 }
 public function show($id){

     $n=notebook::find($id);
     return response()->json($n);
 }
 public function store(){
      $n=null;
      $headertoken = request()->header('authentication');
      $user =User::where([['api_token','=',$headertoken]])->get()->first();

      if($user==null)
        return "Invalid Api Token";
      else{
        $datos = request()->all();
        $notebook=notebook::where([
          ['modelid','=',$datos['modelid']],
          ['sizeid','=',$datos['sizeid']],
          ['colorid','=',$datos['colorid']],
        ])->get();
        if($notebook==null)
          return "Invalid Parameters";
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
    $headertoken = request()->header('authentication');
    $user =User::where([['api_token','=',$headertoken]])->get()->first();
    $n=notebookuser::find($id);
    if($n->userid==$user->id){
      $n->delete();
      return $n;
    }else {
      return "Unauthorized";
    }
    return response()->json($n);
 }

 public function update($id){
   $n=null;
   $headertoken = request()->header('authentication');
   $user =User::where([['api_token','=',$headertoken]])->get()->first();

   if($user==null)
     return "Invalid Api Token";
   else{
     $datos = request()->all();
     $notebook=notebook::where([
       ['modelid','=',$datos['modelid']],
       ['sizeid','=',$datos['sizeid']],
       ['colorid','=',$datos['colorid']],
     ])->get()->first();
     if($notebook==null)
       return "Invalid Parameters";
     else{

       $n=notebookuser::find($id);
       if($n->userid==$user->id){
         $n->userid=$user->id;
         $n->notebookid=$notebook->id;
         $n->stickerurl=$notebook->url;
         $n->save();
         return $n;
       }else {
         return "Unauthorized";
       }

       }

   }
   return $n;
 }
 public function edit(){
     $equipos=Equipo::all();
     return response()->json($equipos);
 }
}
