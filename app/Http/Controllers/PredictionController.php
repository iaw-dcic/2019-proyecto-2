<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Prediction;
use App\User;
use App\Match;
use App\Team;
class PredictionController extends Controller
{

    public function indice()
    {
      $user=Auth::user();
             $predictions=Prediction::where([
                 ['user_id', '=', $user->id]
             ])->get();
             return $predictions->toJson();

    }

    public function nombre($id) //obtengo los partidos del pronostico
    {
      $prediccion= Prediction::where('id', $id)->first();
      $nombre= $prediccion->name;

       return response()->json($nombre, 201);
    }

    public function show($id) //obtengo los partidos del pronostico
    {
       $prediccion=Prediction::find($id);
       $nombre=  $prediccion->get('name');

       $partidos= Match::where('prediction', $prediccion->id)->get(['team1_id', 'team2_id']);;

       return response()->json($partidos, 201);
    }

    public function addPronostico(Request $request){ //creo el pronostico
      $validatedData = $request->validate([
          'name' => 'required',
        ]);

        $user=Auth::user();
        $pronostico= new Prediction();
        $pronostico->name= $validatedData['name'];
        $pronostico->user_id=$user->id;

        $pronostico->save();

            return response()->json($pronostico->id, 201);
       }

    public function storeCuadro(Request $request){ //guardo los partidos en el pronostico

      $cuartos1= Match::create([
              'team1_id'=> $request->get('cuartos0'),
              'team2_id'=>$request->get('cuartos1'),
              'prediction' =>  $request->get('pronostico'),
              'ronda' => '4',
        ]);
       $cuartos2= Match::create([
             'team1_id'=> $request->get('cuartos2'),
             'team2_id'=> $request->get('cuartos3'),
             'prediction' => $request->get('pronostico'),
             'ronda' => '4',
        ]);
         $cuartos3= Match::create([
              'team1_id'=> $request->get('cuartos4'),
              'team2_id'=> $request->get('cuartos5'),
              'prediction' => $request->get('pronostico'),
              'ronda' => '4',
        ]);
         $cuartos4= Match::create([
             'team1_id'=> $request->get('cuartos6'),
             'team2_id'=> $request->get('cuartos7'),
             'prediction' =>  $request->get('pronostico'),
             'ronda' => '4',
        ]);
         $semi1= Match::create([
             'team1_id'=> $request->get('semifinal0'),
             'team2_id'=> $request->get('semifinal1'),
             'prediction' =>    $request->get('pronostico'),
              'ronda' => '2',
          ]);
         $semi2= Match::create([
             'team1_id'=> $request->get('semifinal2'),
             'team2_id'=> $request->get('semifinal3'),
             'prediction' =>    $request->get('pronostico'),
              'ronda' => '2',
          ]);
         $final= Match::create([
               'team1_id'=> $request->get('final0'),
               'team2_id'=> $request->get('final1'),
               'prediction' =>   $request->get('pronostico'),
                'ronda' => '1',
          ]);
          $ganador= Match::create([
                'team1_id'=> $request->get('ganador'),
                'team2_id'=> $request->get('ganador'),
                'prediction' =>    $request->get('pronostico'),
                 'ronda' => '0',
           ]);

         return response()->json('se agregaron los dopartios');
  }

    public function update(Request $request,  $id)
    {
        $prediction=Prediction::find($id);
        $data=request()->all();
        $partidos= Match::where('prediction', $prediction->id)->get();

        $prediction->update([
          'name' => $request->get('name'),
        ]);

        $partidos[0]->update([
            'team1_id'=> $request->get('cuartos0'),
            'team2_id'=> $request->get('cuartos1'),
        ]);

        $partidos[0]->save();
//        $prediction->save();

        $partidos[1]->update([
            'team1_id'=>$request->get('cuartos2'),
            'team2_id'=>$request->get('cuartos3'),
        ]);

        $partidos[1]->save();
//        $prediction->save();

        $partidos[2]->update([
            'team1_id'=>$request->get('cuartos4'),
            'team2_id'=>$request->get('cuartos5'),
        ]);

        $partidos[2]->save();
  //      $prediction->save();

        $partidos[3]->update([
            'team1_id'=>$request->get('cuartos6'),
            'team2_id'=>$request->get('cuartos7'),
        ]);

        $partidos[3]->save();
    //    $prediction->save();

        $partidos[4]->update([
            'team1_id'=>$request->get('semifinal0'),
            'team2_id'=>$request->get('semifinal1'),
        ]);

        $partidos[4]->save();
//        $prediction->save();

        $partidos[5]->update([
            'team1_id'=>$request->get('semifinal2'),
            'team2_id'=>$request->get('semifinal3'),
        ]);

        $partidos[5]->save();
  //      $prediction->save();

        $partidos[6]->update([
            'team1_id'=>$request->get('final0'),
            'team2_id'=>$request->get('final1'),
        ]);

        $partidos[6]->save();
  //          $prediction->save();

        $partidos[7]->update([
            'team1_id'=>$request->get('ganador'),
            'team2_id'=>$request->get('ganador'),
        ]);

        $partidos[7]->save();
        $prediction->save();

        return response()->json($partidos, 200);
    }


    public function delete(Prediction $prediction)
    {
      $prediccion=Prediction::find($id);
      $prediccion->delete();
      return response()->json($prediccion);
    }

}
