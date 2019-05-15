<?php

use Illuminate\Database\Seeder;
use Grambas\FootballData\FootballData;

class DatabaseSeeder extends Seeder{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(){
        factory(\App\User::class, 5)->create()->each(function(\App\User $user){
            $url = $user->image_url;
            Cloudder::upload($url);
            $result = Cloudder::getResult();
            $image_id = $result['public_id'];
            $image_url = $result['secure_url'];

            $user->image_id = $image_id;
            $user->image_url  =$image_url;
            $user->save();
        });

        $competitions = Football::getLeagues(['plan' => 'TIER_ONE']);

        foreach($competitions as $competition){
            $teams = Football::getLeagueTeams($competition->id);
            $matches = Football::getLeagueMatches($competition->id);

            try{
                Cloudder::upload($competition->emblemUrl);
                $result = Cloudder::getResult();
                $image_id = $result['public_id'];
                $image_url = $result['secure_url'];
            }catch(\Exception $ex){
                $image_id = -1;
                $image_url = "NO_IMAGE";
            }

            factory(\App\Torneo::class, 1)->create([
                'id' => $competition->id,
                'name' => $competition->name,
                'code' => $competition->code,
                'image_url' => $image_url,
                'image_id' => $image_id
            ]);

            foreach($matches as $partido){
                try{
                    factory(\App\Partido::class, 1)->create([
                        'id' => $partido->id,
                        'torneo_id' => $competition->id,
                        'local' => $partido->homeTeam->id,
                        'visitante' => $partido->awayTeam->id,   //Equipo
                        'resultado' => '1-0',
                        'ganador' => $partido->score->winner,
                        'finalizado' => $partido->status,
                        'fecha' => $partido->season->startDate
                    ]);
                }catch(\Exception $ex){
                    continue;
                }
            }

            foreach($teams as $equipo){
                try{
                    Cloudder::upload($equipo->crestUrl);
                    $result = Cloudder::getResult();
                    $image_id = $result['public_id'];
                    $image_url = $result['secure_url'];
                }catch(\Exception $ex){
                    $image_id = -1;
                    $image_url = 'NO_IMAGE';
                }

                try{
                    factory(\App\Equipo::class, 1)->create([
                        'id' => $equipo->id,
                        'name' => $equipo->name,
                        'image_url' => $image_url,
                        'image_id' => $image_id
                    ]);
                }catch(\Exception $ex){
                    continue;
                }
            }
        }
    }
}

/*
Para los eventos tengo que llenar estos datos de forma coherente:

$table->string('ganador_partido');  //Depende de los jugadores
$table->string('equipo_1'); //Depende del pais y la liga
$table->string('equipo_2'); //Depende del país y la liga
$table->string('resultado_partido');    //Depende si termino puede ser empate, equipo_1 o equipo_2
$table->boolean('finalizado')->default(false);  //Depende del tiempo
$table->time('tiempo'); //Solamente si comenzó
*/

/*
Generador de resultados random

$resultados = [];
    for($i=0; $i<=6; $i++)
        for($j=0; $j<=6; $j++)
            array_push($resultados, $i.'-'.$j);
*/

/*
$table->string('prediccion'); //Empate---Ganador1---Ganador2
$table->string('resultado'); // 1-0     //Depende de si el juego termino ('resultado' => $faker->randomElement($resultados),)
$table->boolean('activo')->default(true);   //Depende de si el juego termino
*/
