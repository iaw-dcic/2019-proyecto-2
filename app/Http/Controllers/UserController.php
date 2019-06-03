<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $this->middleware('auth');
        $userLog=Auth::user();
        if($userLog->id != $id)
            abort(403, 'Usuario no autorizado');
        $user = User::find($id);
        return view('/auth/perfil')->with(['user' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $this->middleware('auth');
        $userLog=Auth::user();
        if($userLog->id != $id)
            abort(403, 'Usuario no autorizado');
        $user=User::find($id);
        return view('/auth/perfilEditor')->with('user',$user);
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
        $this->middleware('auth');
        $user=Auth::user();
        if($user->id != $id)
            abort(403, 'Usuario no autorizado');
        //Setea los default.
        $nomDefault=$user->name;
        $apelDefault=$user->lastname;
        //Auxiliares para chequear el email.
        $emailB=true;
        $mailUsados = DB::select('select email from users where id != :id ', ['id'=> $id]);
        $emailNuevo=$request->email;
        //Name
        if($request->name==null){
            $user->name=$nomDefault;
        }
        else{
            $user->name=$request->name;
        }
        //Lastname
        if($request->lastname==null){
            $user->lastname=$apelDefault;
        }
        else{
            $user->lastname=$request->lastname;
        }
        //Mail
        foreach ($mailUsados as $email)
        {
            if(strcmp($email->email, $emailNuevo) === 0)
                    $emailB=false;
        }
        if($emailB==true)
        {
            $user->email=$request->email;
            $user->save();
        }
        
        return view('/auth/perfil')->with('user',$user);
    }
}
