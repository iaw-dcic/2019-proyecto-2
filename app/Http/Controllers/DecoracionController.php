<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Decoracion;

class DecoracionController extends Controller
{
    public function index()
    {
        $decoracion = Decoracion::all();
        return $decoracion->toJson();
    }
}