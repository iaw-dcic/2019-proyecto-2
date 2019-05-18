<?php

use Illuminate\Database\Seeder;
use Grambas\FootballData\FootballData;

class DatabaseSeeder extends Seeder{
    /**
     * Seed the application's database.
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

        $competition = Football::getLeague(2000);

        $teams = Football::getLeagueTeams($competition['id']);
        $matches = Football::getLeagueMatches($competition['id']);
        $standings = Football::getLeagueStandings($competition['id']);

        try{
            Cloudder::upload($competition['emblemUrl']);
            $result = Cloudder::getResult();
            $image_id = $result['public_id'];
            $image_url = $result['secure_url'];
        }catch(\Exception $ex){
            $image_id = -1;
            $image_url = "NO_IMAGE_COMPETITION";
        }

        factory(\App\Campeonato::class, 1)->create([
            'id' => $competition['id'],
            'nombre' => $competition['name'],
            'image_url' => $image_url,
            'image_id' => $image_id
        ]);

        foreach($matches as $partido){
            factory(\App\Partido::class, 1)->create([
                'id' => $partido->id,
                'campeonato_id' => $competition['id'],
                'grupo' => $partido->group,
                'local_id' => $partido->homeTeam->id,
                'visitante_id' => $partido->awayTeam->id,   //Equipo
                'goles_local' => ($partido->score->fullTime->homeTeam + $partido->score->halfTime->homeTeam + $partido->score->extraTime->homeTeam),
                'goles_visitante' => ($partido->score->fullTime->awayTeam + $partido->score->halfTime->awayTeam + $partido->score->extraTime->awayTeam),
                'resultado' => ($partido->score->fullTime->homeTeam + $partido->score->halfTime->homeTeam + $partido->score->extraTime->homeTeam).'-'.($partido->score->fullTime->awayTeam + $partido->score->halfTime->awayTeam + $partido->score->extraTime->awayTeam),
                'ganador' => $partido->score->winner,
                'finalizado' => $partido->status,
                'fecha' => $partido->season->startDate
            ]);
        }
        foreach($teams as $equipo){
            try{
                Cloudder::upload($equipo->crestUrl);
                $result = Cloudder::getResult();
                $image_id = $result['public_id'];
                $image_url = $result['secure_url'];
            }catch(\Exception $ex){
                $image_id = -1;
                $image_url = 'NO_IMAGE_EQUIPO';
            }

            factory(\App\Equipo::class, 1)->create([
                'id' => $equipo->id,
                'nombre' => $equipo->name,
                'image_url' => $image_url,
                'image_id' => $image_id,
                'club_colors' => $equipo->clubColors
            ]);
        }

        foreach($standings as $grupos){
            if($grupos->type != "TOTAL")
                    continue;
            foreach($grupos->table as $table){
                factory(\App\PosicionesCampeonato::class, 1)->create([
                    'posicion' => $table->position,
                    'grupo' => $grupos->group,
                    'campeonato_id' => $competition['id'],
                    'equipo_id' => $table->team->id,
                    'partidos_jugados' => $table->playedGames,
                    'partidos_ganados' => $table->won,
                    'partidos_empatados' => $table->draw,
                    'partidos_perdidos' => $table->lost,
                    'puntos' => $table->points,
                    'goles_a_favor' => $table->goalsFor,
                    'goles_en_contra' => $table->goalsAgainst,
                    'diferencia_de_goles' => $table->goalDifference,
                ]);
            }
        }
    }
}
