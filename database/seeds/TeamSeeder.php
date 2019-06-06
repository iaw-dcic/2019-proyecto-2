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
            'pais' => 'Arg'
        ]);
        Team::create([
            'name' => 'Cruzeiro',
            'pais' => 'Bra'

        ]);
        Team::create([
            'name' => 'San Lorenzo',
            'pais' => 'Arg'

        ]);
        Team::create([
            'name' => 'Cerro Porteño',
            'pais' => 'Par'

        ]);
        Team::create([
            'name' => 'Liga Quito',
            'pais' => 'Ec'

        ]);
        Team::create([
            'name' => 'Olimpia',
            'pais' => 'Par'

        ]);
        Team::create([
            'name' => 'Paranaense',
            'pais' => 'Bra'

        ]);
        Team::create([
            'name' => 'Boca Juniors',
            'pais' => 'Arg'

        ]);
        Team::create([
            'name' => 'Godoy Cruz',
            'pais' => 'Arg'

        ]);
        Team::create([
            'name' => 'Palmeiras',
            'pais' => 'Bra'

        ]);
        Team::create([
            'name' => 'Gremio',
            'pais' => 'Bra'

        ]);
        Team::create([
            'name' => 'Libertad',
            'pais' => 'Par'

        ]);
        Team::create([
            'name' => 'Emelec',
            'pais' => 'Ec'

        ]);
        Team::create([
            'name' => 'Flamengo',
            'pais' => 'Bra'

        ]);
        Team::create([
            'name' => 'Nacional',
            'pais' => 'Ur'

        ]);
        Team::create([
            'name' => 'Internacional',
            'pais' => 'Bra'

        ]);
    }
}
