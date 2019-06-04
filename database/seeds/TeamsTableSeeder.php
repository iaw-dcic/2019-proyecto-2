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
            'name' => "River Plate"
        ]);
        DB::table('teams')->insert([
            'name' => "Cruzeiro"
        ]);
        DB::table('teams')->insert([
            'name' => "San Lorenzo"
        ]);
        DB::table('teams')->insert([
            'name' => "Cerro Porteño"
        ]);
        DB::table('teams')->insert([
            'name' => "Liga de Quito"
        ]);
        DB::table('teams')->insert([
            'name' => "Olimpia"
        ]);
        DB::table('teams')->insert([
            'name' => "Paranaense"
        ]);
        DB::table('teams')->insert([
            'name' => "Boca Juniors"
        ]);
        DB::table('teams')->insert([
            'name' => "Godoy Cruz"
        ]);
        DB::table('teams')->insert([
            'name' => "Palmeiras"
        ]);
        DB::table('teams')->insert([
            'name' => "Gremio"
        ]);
        DB::table('teams')->insert([
            'name' => "Libertad"
        ]);
        DB::table('teams')->insert([
            'name' => "Emelec"
        ]);
        DB::table('teams')->insert([
            'name' => "Flamengo"
        ]);
        DB::table('teams')->insert([
            'name' => "Nacional"
        ]);
        DB::table('teams')->insert([
            'name' => "Internacional"
        ]);
    }
}
