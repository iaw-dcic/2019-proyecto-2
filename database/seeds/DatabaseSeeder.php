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
        DB::table('colors')->insert([
          'color' => 'black',
        ]);
        DB::table('colors')->insert([
          'color' => 'red',
        ]);
        DB::table('colors')->insert([
          'color' => 'green',
        ]);
        DB::table('colors')->insert([
          'color' => 'pink',
        ]);

        DB::table('sizes')->insert([
          'size' => '13',
        ]);
        DB::table('sizes')->insert([
          'size' => '15',
        ]);

        DB::table('modelos')->insert([
          'modelo' => 'apple',
        ]);
        DB::table('modelos')->insert([
          'modelo' => 'dell',
        ]);
        DB::table('modelos')->insert([
          'modelo' => 'lenovo',
        ]);

        DB::table('notebooks')->insert([
          'sizeid' => '1',
          'modelid' => '1',
          'colorid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
    }
}
