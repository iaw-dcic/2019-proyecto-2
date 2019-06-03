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
      DB::table('users')->insert([
        'name' => 'Joaquin Montero',
        'email' => 'joaco@joaco.com',
        'password' => 'password',
        ]);
        DB::table('colors')->insert([
          'color' => '#4286f4',
        ]);
        DB::table('colors')->insert([
          'color' => '#000000',
        ]);
        DB::table('colors')->insert([
          'color' => '#ff91fd',
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
        DB::table('notebooks')->insert([
          'sizeid' => '2',
          'modelid' => '1',
          'colorid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '1',
          'modelid' => '2',
          'colorid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '2',
          'modelid' => '2',
          'colorid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '1',
          'modelid' => '3',
          'colorid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '2',
          'modelid' => '3',
          'colorid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        //color2
        DB::table('notebooks')->insert([
          'sizeid' => '1',
          'modelid' => '1',
          'colorid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '2',
          'modelid' => '1',
          'colorid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '1',
          'modelid' => '2',
          'colorid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '2',
          'modelid' => '2',
          'colorid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '1',
          'modelid' => '3',
          'colorid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '2',
          'modelid' => '3',
          'colorid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);

        //color3
        DB::table('notebooks')->insert([
          'sizeid' => '1',
          'modelid' => '1',
          'colorid' => '3',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '2',
          'modelid' => '1',
          'colorid' => '3',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '1',
          'modelid' => '2',
          'colorid' => '3',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '2',
          'modelid' => '2',
          'colorid' => '3',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '1',
          'modelid' => '3',
          'colorid' => '3',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);
        DB::table('notebooks')->insert([
          'sizeid' => '2',
          'modelid' => '3',
          'colorid' => '3',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);

        DB::table('notebookusers')->insert([
          'notebookid' => '3',
          'userid' => '1',
          'stickerurl' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.jpg',
        ]);


    }
}
