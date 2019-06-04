<?php

namespace App\Http\Controllers;

use App\Avatar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Auth;

class AvatarsController extends Controller {

    public function __construct () {
        $this->middleware ('auth:api');
    }

    public function index () {
        return auth ('api')->user ()->avatars;
    }
    
    public function store (Request $request) {
        $attributes = array (
            'avatar_name' => 'required',
            'hair' => 'required',
            'shirt' => 'required',
            'beard' => 'required'
        );
        $validator = Validator::make ($request->all (), $attributes);

        if ($validator->fails ()) {
            return response ()->json ('Error While Saving');
        }

        else {
            $avatar = new Avatar;
            $avatar->avatar_name = $request->avatar_name;
            $avatar->owner = auth ('api')->user ()->name;
            $avatar->hair = $request->hair;
            $avatar->shirt = $request->shirt;
            $avatar->beard = $request->beard;
            $avatar->save();

            return response ()->json ($avatar->avatar_id);
        }
    }
    
    public function update (Request $request, Avatar $avatar) {
        $avatar->update (request (['avatar_name', 'hair', 'shirt', 'beard']));

        return response ()->json ('Update Succesful');
    }
}