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
            'id' => 1,
            'name' => 'River Plate',
            'pais' => 'Arg'
        ]);
        Team::create([
            'id' => 2,

            'name' => 'Cruzeiro',
            'pais' => 'Bra'

        ]);
        Team::create([
            'id' => 3,

            'name' => 'San Lorenzo',
            'pais' => 'Arg'

        ]);
        Team::create([
            'id' => 4,

            'name' => 'Cerro Porteño',
            'pais' => 'Par'

        ]);
        Team::create([
            'id' => 5,

            'name' => 'Liga Quito',
            'pais' => 'Ec'

        ]);
        Team::create([
            'id' => 6,

            'name' => 'Olimpia',
            'pais' => 'Par'

        ]);
        Team::create([
            'id' => 7,

            'name' => 'Paranaense',
            'pais' => 'Bra'

        ]);
        Team::create([
            'id' => 8,

            'name' => 'Boca Juniors',
            'pais' => 'Arg'

        ]);
        Team::create([
            'id' => 9,

            'name' => 'Godoy Cruz',
            'pais' => 'Arg'

        ]);
        Team::create([
            'id' => 10,

            'name' => 'Palmeiras',
            'pais' => 'Bra'

        ]);
        Team::create([
            'id' => 11,

            'name' => 'Gremio',
            'pais' => 'Bra'

        ]);
        Team::create([
            'id' => 12,

            'name' => 'Libertad',
            'pais' => 'Par'

        ]);
        Team::create([
            'id' => 13,

            'name' => 'Emelec',
            'pais' => 'Ec'

        ]);
        Team::create([
            'id' => 14,

            'name' => 'Flamengo',
            'pais' => 'Bra'

        ]);
        Team::create([
            'id' => 15,

            'name' => 'Nacional',
            'pais' => 'Ur'

        ]);
        Team::create([
            'id' => 16,

            'name' => 'Internacional',
            'pais' => 'Bra'

        ]);
    }
}
