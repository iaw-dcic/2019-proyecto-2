<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ingredient;

class IngredientController extends Controller
{
    public function index() { 
        $ingredients = Ingredient::all('ingredient','type');
        return $ingredients->toJson();
    }
}
