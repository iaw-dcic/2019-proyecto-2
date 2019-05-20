<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ingredient;

class IngredientController extends Controller
{
    public function index() { 
        $ingredients = Ingredient::all('name','selectedIngredient');
        return $ingredients->toJson();
    }

    public function show($id)
    { }

   
}
