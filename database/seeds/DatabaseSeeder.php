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
        $this->call(JugadoresSeeder::class);   
        $this->call(PartidoSeeder::class);  
      }
}
