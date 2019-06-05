<?php

namespace App\Http\Controllers;

use App\Avatar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\AvatarComponents;

class ExternalSqlController extends Controller {

    public function __construct () {
        $this->middleware ('auth:api');
    }

    public function indexHair () {
        return AvatarComponents::select ('*')->where ('element_type', 'Hair')->get ();
    }

    public function indexShirt () {
        return AvatarComponents::select ('*')->where ('element_type', 'Shirt')->get ();
    }

    public function indexBeard () {
        return AvatarComponents::select ('*')->where ('element_type', 'Beard')->get ();
    }
}