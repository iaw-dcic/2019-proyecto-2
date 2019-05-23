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
        $this->call(PrimeraRondaSeeder::class);  
        $this->call(SegundaRondaSeeder::class);  
        $this->call(OctavosSeeder::class);  
      }
}
