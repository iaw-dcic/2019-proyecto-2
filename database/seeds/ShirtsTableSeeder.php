<?php

use Illuminate\Database\Seeder;

class ShirtsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory('App\Shirt', 10) -> create();
    }
}
