<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Burger;
use App\Ingredient;
use Auth;


class BurgerController extends Controller
{
 
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { 
        $user_id = auth()->id();
        $burgers= Burger::all()->where('user_id',$user_id);

        $burgerTemplate = array(
            "res"=> 0,
            "pollo"=> 0,
            "queso" => 0,
            "bacon" => 0,
            "lechuga" => 0,
            "tomate" => 0,
        );

        $response=array();

        foreach ($burgers as $burger){

            $burgerIngredients= $burger->ingredients()->get();

            foreach ($burgerIngredients as $ingredient) {

                    $type = $ingredient->type;
                    $burgerTemplate[$type] = $burgerTemplate[$type] + 1;
                
            }

            $response[] = $burgerTemplate;

            $burgerTemplate = array(
                "res"=> 0,
                "pollo"=> 0,
                "queso" => 0,
                "bacon" => 0,
                "lechuga" => 0,
                "tomate" => 0,
            );

        }

        return json_encode($response);
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
        $burger->user_id= auth()->id();
        $burger->save();

        $ingredientsArray= [];
        $allIngredients = Ingredient::all('type');

        foreach ($request->ingredients as $ing) {       
            if ($allIngredients->contains("type",$ing)) {
              array_push($ingredientsArray,$ing);
            } 
        }

        //Attach ingredient only if doesnt already exists
        foreach ($ingredientsArray as $ing) {
            if (!$burger->ingredients->contains($ing)) {
                $ingredientToAdd= Ingredient::where('type',$ing)->first();
                $burger->ingredients()->attach($ingredientToAdd);
            }
        }
   
        return response()->json('Hamburguesa creada!');
    }
}
