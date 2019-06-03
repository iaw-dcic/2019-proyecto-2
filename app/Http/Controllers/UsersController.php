<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use JWTFactory;
use Auth;
use JWTAuth;

class UsersController extends Controller{

    public function index(){
        //
    }

    public function store(Request $request){
        //
    }

    public function show($id){
        //
    }

    public function update(Request $request, $id){
        //
    }

    public function destroy($id){
        //
    }

    private function getToken($email, $password){
        $token = null;
        try {
            if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => [$email, $password],
                    'token'=>$token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }

    public function register(Request $request){ 
        $password = $request->data['password'];
        $username = $request->data['username'];
        $email = $request->data['email'];
        $name = $request->data['name'];
        $payload = [
            'password'=>\Hash::make($password),
            'username' => $username,
            'email'=>$email,
            'name'=>$name,
            'auth_token'=> ''
        ];
        $user = new User($payload);
        if ($user->save()){
            $token = $this->getToken($email, $password); // generate user token
            if (!is_string($token))
                return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            $user = User::where('email', $email)->get()->first();
            $user->auth_token = $token; // update user token
            $user->save();   
            $response = ['success'=>true, 'data'=>['name'=>$user->name,'id'=>$user->id,'email'=>$email,'auth_token'=>$token]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];   
        return response()->json($response, 201);
    }

    public function login(Request $request){
        $password = $request->data['password'];
        $email = $request->data['email'];

        $user = User::where('email', $email)->get()->first();

        if ($user && \Hash::check($password, $user->password)){
            $token = JWTAuth::attempt(['email'=>$email, 'password'=>$password]);
            $user->auth_token = $token;
            $user->save();
            $response = ['success'=>true, 'data'=>['id'=>$user->id,'auth_token'=>$user->auth_token,'name'=>$user->name, 'email'=>$user->email]];           
        }
        else
          $response = ['success'=>false, 'data'=>'Record doesnt exists'];
        return response()->json($response, 201);
    }

    public function logout(Request $request){
        $this->validate($request, [
            'auth_token' => 'required'
        ]);
 
        try {
            JWTAuth::invalidate($request->auth_token);
            Auth::logout();
 
            return response()->json([
                'success' => true,
                'message' => 'User logged out successfully'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the user cannot be logged out'
            ], 500);
        }
    }
 
    public function getAuthUser(Request $request){
        $this->validate($request, [
            'token' => 'required'
        ]);
 
        $user = JWTAuth::authenticate($request->token);
        return response()->json(['user' => $user]);
    }
}
