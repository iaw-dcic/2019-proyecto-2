<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Prediction;
use App\User;
use Illuminate\Support\Facades\Auth;

class PredictionController extends Controller
{

    public function index()
    {
       $user_id = Auth::user()->id;
       $prediccion= Prediction::where('user_id', $user_id)->get();
      return  response()->json($prediccion);
    }

    public function show($id)
    {
       $prediccion=Prediction::find($id);
       return response()->json($prediccion);
    }

    public function storeCuadro(Request $request){

      $prediction= $datos['prediction'];
      $datos = request()->all();

// aca tengo que crear todos los partidos del pronostico
      $cuartos1= Partido::create([
              'team1_id'=> $datos['cuartos[0]'],
              'team2_id'=> $datos['cuartos[1]'],
              'prediction' =>  $prediction,
              'ronda' => '4',
        ]);
       $cuartos2= Partido::create([
             'team1_id'=> $datos['cuartos[2]'],
             'team2_id'=> $datos['cuartos[3]'],
             'prediction' =>  $prediction,
             'ronda' => '4',
        ]);
         $cuartos3= Partido::create([
              'team1_id'=> $datos['cuartos[4]'],
              'team2_id'=> $datos['cuartos[5]'],
              'prediction' =>  $prediction,
              'ronda' => '4',
        ]);
         $cuartos3= Partido::create([
             'team1_id'=> $datos['cuartos[6]'],
             'team2_id'=> $datos['cuartos[7]'],
             'prediction' =>  $prediction,
             'ronda' => '4',
        ]);
         $semi1= Partido::create([
             'team1_id'=> $datos['semifinal[0]'],
             'team2_id'=> $datos['semifinal[1]'],
             'prediction' =>  $prediction,
              'ronda' => '2',
          ]);
         $semi2= Partido::create([
             'team1_id'=> $datos['semifinal[2]'],
             'team2_id'=> $datos['semifinal[3]'],
             'prediction' =>  $prediction,
              'ronda' => '2',
          ]);
         $final= Partido::create([
               'team1_id'=> $datos['final[0]'],
               'team2_id'=> $datos['final[1]'],
               'prediction' =>  $prediction,
                'ronda' => '1',
          ]);
         return response()->json('Matches created in prediction',200);
  }

    public function store(Request $request){
  //    return(Auth::id());
      $validatedData = $request->validate([
              'name' => 'required',
            ]);

            $project = Prediction::create([
              'name' => $validatedData['name'],
              'user_id' => Auth::id(),
            ]);

            return response()->json('Prediction created!');
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
