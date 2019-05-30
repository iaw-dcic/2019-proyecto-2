<?php

namespace App\Http\Controllers;
use Socialite;
use App\User;
use App\Pronostico;

use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
class UserController extends Controller
{
   // Metodo encargado de la redireccion a Facebook
   public function redirectToProvider($provider)
   {
       return Socialite::driver($provider)->redirect();
   }
   
   // Metodo encargado de obtener la información del usuario
   public function handleProviderCallback($provider)
   {
       // Obtenemos los datos del usuario
       $social_user = Socialite::driver($provider)->stateless()->user(); 
       // Comprobamos si el usuario ya existe
       if ($user = User::where('email', $social_user->email)->first()) { 
           return $this->authAndRedirect($user); // Login y redirección
       } else {  
           // En caso de que no exista creamos un nuevo usuario con sus datos.
           $user = User::create([
               'name' => $social_user->name,
               'email' => $social_user->email,
               'avatar' => $social_user->avatar,
           ]);

           return $this->authAndRedirect($user); // Login y redirección
       }
   }

   // Login y redirección
   public function authAndRedirect($user)
   {
       Auth::login($user);
        
       return redirect()->to('/home#');
   }
   

   public function addPronostico(){
    $pronostico= Pronostico::create([  'user_id' => '1'  ]   );
        return response()->json($pronostico->id, 201);
   }
   public function ultimoPronostico(){
    $pronostico= Pronostico::select('id')->orderby('created_at','DESC')->first();

    return response()->json($pronostico, 201);
   }

   public function cantidadPronosticos(){
    $user=Auth::user();
    $pronosticos= Pronostico::where('user_id','=',1)->get();
    $arreglo=array();
    $i=0; $count=0;
    foreach($pronosticos as $pronostico){
        $arreglo["items"][$count]= array(
           'pronostico' => $pronostico->id,
        );
        $count ++;
     }
       
    return response()->json($arreglo, 200);
}
   
   public function getuser(){
    $user=auth()->guard('api')->user();
   // $user=User::find(1);
    if($user !=null)
       return response()->json($user, 200);
   
         else
    return response()->json("null", 200);
}
/*public function logout() {
    Auth::logout();

    return response()->json([
        'status' => 'success',
        'message' => 'logout'
    ], 200);
}*/
}
 
