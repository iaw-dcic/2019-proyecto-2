<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('teams')->insert(['name' => 'River', 'alias'=>'riverplate']);
        DB::table('teams')->insert(['name' => 'Cruzeiro', 'alias'=>'cruzeiro']);
        DB::table('teams')->insert(['name' => 'Liga de Quito', 'alias'=>'ligaquito']);
        DB::table('teams')->insert(['name' => 'Olimpia', 'alias'=>'olimpia']);
        DB::table('teams')->insert(['name' => 'Nacional', 'alias'=>'nacional']);
        DB::table('teams')->insert(['name' => 'Internacional', 'alias'=>'internacional']);
        DB::table('teams')->insert(['name' => 'Paranaense', 'alias'=>'paranaense']);
        DB::table('teams')->insert(['name' => 'Boca', 'alias'=>'bocajuniors']);
        DB::table('teams')->insert(['name' => 'Godoy Cruz', 'alias'=>'godoycruz']);
        DB::table('teams')->insert(['name' => 'Palmeiras', 'alias'=>'palmeiras']);
        DB::table('teams')->insert(['name' => 'San Lorenzo', 'alias'=>'sanlorenzo']);
        DB::table('teams')->insert(['name' => 'Cerro Porteño', 'alias'=>'cerroporteno']);
        DB::table('teams')->insert(['name' => 'Emelec', 'alias'=>'emelec']);
        DB::table('teams')->insert(['name' => 'Flamengo', 'alias'=>'flamengo']);
        DB::table('teams')->insert(['name' => 'Gremio', 'alias'=>'gremio']);
        DB::table('teams')->insert(['name' => 'Libertad', 'alias'=>'libertadp']);
    }
}
