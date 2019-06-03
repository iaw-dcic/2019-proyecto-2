<?php
namespace App\Http\Controllers;
use Socialite;
use App\User;
use Auth;
use Illuminate\Http\Request;
class UserController extends Controller
{
  
   public function index()
   {
     $team = User::all();
     return response()->json($team);
   }

  public function user(){
     $user=Auth::id();
    // $user=User::find($id);
     if($user!=null)
        return response()->json($user, 200);
     else
        return response()->json("null", 200);
 }

    public function logout() {
      Auth::logout();
      return response()->json([
          'status' => 'success',
          'message' => 'logout'
      ], 200);
    }


}
