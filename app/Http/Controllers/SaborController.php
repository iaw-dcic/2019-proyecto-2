<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sabor;

class SaborController extends Controller
{
    public function index()
    {
        $sabores = Sabor::all();
        return $sabores->toJson();
    }
}
