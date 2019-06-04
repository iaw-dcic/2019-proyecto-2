<?php

namespace App\Http\Controllers;
use Socialite;
use App\User;
use App\Pronostico;
use Illuminate\Support\Str;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
class UserController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
        $this->middleware('auth:api');
    }

  

   // Login y redirección
   public function authAndRedirect($user)
   {
       Auth::login($user);
        
       return redirect()->to('/home#');
   }
   

   public function addPronostico(){
    $user=auth('api')->user();
    $pronostico= Pronostico::create([  'user_id' => $user->id  ]   );
        return response()->json($pronostico->id, 201);
   }

   public function ultimoPronostico(){
    $user=auth('api')->user();
    $pronostico= Pronostico::select('id')->where('user_id','=',$user->id)
    ->orderby('created_at','DESC')->first();

    return response()->json($pronostico, 201);
   }

   public function cantidadPronosticos(){
    $user=auth('api')->user();
    $pronosticos= Pronostico::where('user_id','=',$user->id)->get();
    $arreglo=array();
    $i=0; $count=0;
    foreach($pronosticos as $pronostico){
        $arreglo["items"][$count]= array(
           'pronostico' => $pronostico->id,
        );
        $count ++;
     }
    if($arreglo !=null)
         return response()->json($arreglo, 200);
    else{
        $arreglo["items"][0]=array(
            'pronostico' => '',
         );
         return response()->json($arreglo, 201);
    }
   
}
   
   public function getuser(){
    $user=auth()->guard('api')->user();
   // $user=User::find(1);
    if($user !=null)
       return response()->json($user, 200);
   
         else
    return response()->json("null", 200);
}
 
}
 
