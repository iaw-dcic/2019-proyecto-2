<?php

use Illuminate\Database\Seeder;
use Grambas\FootballData\FootballData;
use App\Equipo;
use App\Partido;
use App\User;
use App\Prode;
use Tymon\JWTAuth\Facades\JWTAuth;

class DatabaseSeeder extends Seeder{
    /**
     * Seed the application's database.
     * @return void
     */
    public function run(){
        $equipos = array(['Francia','FR'], ['Argentina', 'AR'],
                        ['Uruguay', 'UY'], ['Portugal', 'PT'],
                        ['Brasil', 'BR'], ['Mexico', 'MX'],
                        ['Bélgica', 'BE'], ['Japón', 'JP'],
                        ['España', 'ES'], ['Rusia', 'RU'],
                        ['Croacia', 'CR'], ['Dinamarca', 'DK'],
                        ['Suecia', 'SE'], ['Suiza', 'CH'],
                        ['Colombia', 'CO'], ['Inglaterra', 'GB']);

        factory(\App\User::class, 1)->create([
            'name' => 'Dylan Barbona',
            'username' => 'dylanbarbona',
            'auth_token' => JWTAuth::attempt( ['email'=>'dylanbarbona97@gmail.com', 'password'=>'27069706636/f']),
            'image_url' => 'NO_IMAGE',
            'image_id' => 'NO_IMAGE',
            'email' => 'dylanbarbona97@gmail.com',
            'password' => \Hash::make('27069706636/f'),
        ]);

        foreach($equipos as $equipo){
            $url = 'https://www.countryflags.io/'.$equipo[1].'/flat/64.png';
            Cloudder::upload($url);
            $result = Cloudder::getResult();
            $image_id = $result['public_id'];
            $image_url = $result['secure_url'];

            factory(\App\Equipo::class, 1)->create([
                'nombre' => $equipo[0],
                'code' => $equipo[1],
                'image_url' => $image_url,
                'image_id' => $image_id,
            ]);
        }

        factory(\App\Prode::class, 2)->create()->each(function (Prode $prode){
            $prode->getUsers()->attach(1);
        });

        //Los primeros 16 son los que se envian por defecto
        for($i=1; $i<=16; $i+=2){
            factory(\App\Partido::class, 1)->create([
                'local_id' => $i,
                'visitante_id' => $i+1,
                'goles_local' => null,
                'goles_visitante' => null,
                'fase' => 'octavos'
            ])->each(function (Partido $partido){
                $partido->getProdes()->attach(1);
            });
        }

        for($i=1; $i<=16; $i+=2){
            factory(\App\Partido::class, 1)->create([
                'local_id' => $i,
                'visitante_id' => $i+1,
                'goles_local' => null,
                'goles_visitante' => null,
                'fase' => 'octavos'
            ])->each(function (Partido $partido){
                $partido->getProdes()->attach(2);
            });
        }
    }
}
