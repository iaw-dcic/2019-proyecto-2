<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Burger;

class BurgerController extends Controller
{

    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { 
        $burgers= Burger::all();
        return $burgers->toJson();
    }

     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $burger = new Burger;
        $burger->save();

        return response()->json('Hamburguesa creada!');
    }
}
