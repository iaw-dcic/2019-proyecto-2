<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //path to sql file
        $sql = base_path('/database/seeds/seed.sql');

        //collect contents and pass to DB::unprepared
        DB::unprepared(file_get_contents($sql));

    }
}
