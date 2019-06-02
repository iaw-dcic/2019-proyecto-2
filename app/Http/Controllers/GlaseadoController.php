<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Glaseado;

class GlaseadoController extends Controller
{
    public function index()
    {
        $glaseados = Glaseado::all();
        return $glaseados->toJson();
    }
}
