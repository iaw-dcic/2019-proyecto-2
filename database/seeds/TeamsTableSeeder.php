<?php

use Illuminate\Database\Seeder;

class TeamsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('teams')->insert([
            'name' => 'River Plate',
            'country' => 'Argentina',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Cruzeiro',
            'country' => 'Brasil',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Godoy Cruz',
            'country' => 'Argentina',
            'flag' => 'null',
        ]);
        
        DB::table('teams')->insert([
            'name' => 'Palmeiras',
            'country' => 'Brasil',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'LDU Quito',
            'country' => 'Ecuador',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Olimpia',
            'country' => 'Paraguay',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'San Lorenzo',
            'country' => 'Argentina',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Cerro Porteño',
            'country' => 'Paraguay',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Nacional',
            'country' => 'Uruguay',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Internacional',
            'country' => 'Brasil',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Emelec',
            'country' => 'Ecuador',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Flamengo',
            'country' => 'Brasil',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Athletico Paranaense',
            'country' => 'Brasil',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Boca Juniors',
            'country' => 'Argentina',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Gremio',
            'country' => 'Brasil',
            'flag' => 'null',
        ]);

        DB::table('teams')->insert([
            'name' => 'Libertad',
            'country' => 'Ecuador',
            'flag' => 'null',
        ]);
    }
}
