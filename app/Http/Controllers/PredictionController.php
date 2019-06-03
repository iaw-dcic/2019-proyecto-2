<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Prediction;

class PredictionController extends Controller
{

    public function index()
    {
      $predicciones=Prediction::all();
      return response()->json($predicciones);
    }

    public function show($id)
    {
       $prediccion=Prediction::find($id);
       return response()->json($prediccion);
    }

    public function store(Request $request){
      $validatedData = $request->validate([
              'name' => 'required',
            ]);

            $project = Prediction::create([
              'name' => $validatedData['name'],
              'user_id' => 1, //rancio 
            ]);

            return response()->json('Pronostico created!');
    }

    public function update(Request $request, Prediction $prediction)
    {
        $prediction->update($request->all());
        return response()->json($prediction, 200);
    }


    public function delete(Prediction $prediction)
    {
      $prediccion=Prediction::find($id);
      $prediccion->delete();
      return response()->json($prediccion);
    }

}
