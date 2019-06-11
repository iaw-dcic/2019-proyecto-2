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
        // $this->call(CargaDeDatos::class);


        //tuve que usar un .sql para cargar los datos porque en heroku fallaba el db:seed

         //path to sql file
         $sql = base_path('/database/seeds/datos.sql');
        
         //collect contents and pass to DB::unprepared
        DB::unprepared(file_get_contents($sql));

    }
}
