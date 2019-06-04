<?php

use Illuminate\Database\Seeder;
use \App\Team;

use Illuminate\Support\Facades\DB;



class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Team::create([
            'name' => 'River Plate',
            'pais' => 'Argentina'
        ]);
        Team::create([
            'name' => 'Cruzeiro',
            'pais' => 'Brasil'

        ]);
        Team::create([
            'name' => 'San Lorenzo',
            'pais' => 'Argentina'

        ]);
        Team::create([
            'name' => 'Cerro Porteño',
            'pais' => 'Paraguay'

        ]);
        Team::create([
            'name' => 'Liga Quito',
            'pais' => 'Ecuador'

        ]);
        Team::create([
            'name' => 'Olimpia',
            'pais' => 'Paraguay'

        ]);
        Team::create([
            'name' => 'Atletico Paranaense',
            'pais' => 'Brasil'

        ]);
        Team::create([
            'name' => 'Boca Juniors',
            'pais' => 'Argentina'

        ]);
        Team::create([
            'name' => 'Godoy Cruz',
            'pais' => 'Argentina'

        ]);
        Team::create([
            'name' => 'Palmeiras',
            'pais' => 'Brasil'

        ]);
        Team::create([
            'name' => 'Gremio',
            'pais' => 'Brasil'

        ]);
        Team::create([
            'name' => 'Libertad',
            'pais' => 'Paraguay'

        ]);
        Team::create([
            'name' => 'Emelec',
            'pais' => 'Ecuador'

        ]);
        Team::create([
            'name' => 'Flamengo',
            'pais' => 'Brasil'

        ]);
        Team::create([
            'name' => 'Nacional',
            'pais' => 'Uruguay'

        ]);
        Team::create([
            'name' => 'Internacional',
            'pais' => 'Brasil'

        ]);
    }
}
