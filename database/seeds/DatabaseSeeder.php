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
        //cargo los datos iniciales de mi BD
         $this->call(CargaDeDatos::class);
    }
}
