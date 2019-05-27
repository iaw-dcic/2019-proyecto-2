<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ingredient;

class IngredientController extends Controller
{
    public function index() { 
        $ingredients = Ingredient::all('name');
        return $ingredients->toJson();
    }

    public function show($id)
    { }

    public function store(Request $request)
      {
        $validatedData = $request->validate(['name' => 'required']);

        $ingredient = Ingredient::create([
          'name' => $validatedData['name'],
          'burger_id' => $request->burger_id,
        ]);

        return $ingredient->toJson();
      }

   
}
