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
          'color' => '#b7b7b7',
        ]);

        DB::table('colors')->insert([
          'color' => '#9cc98b',
        ]);
        DB::table('colors')->insert([
          'color' => '#ff8ee8',
        ]);
        DB::table('colors')->insert([
          'color' => '#4286f4',
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
        //macbookgris
        DB::table('notebooks')->insert([
          'modelid' => '1',
          'colorid' => '1',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/macbookgris13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '1',
          'colorid' => '1',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/macbookgris15.webp',
        ]);
        //macbookverde
        DB::table('notebooks')->insert([
          'modelid' => '1',
          'colorid' => '2',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/macbookverde13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '1',
          'colorid' => '2',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/macbookverde15.webp',
        ]);
        //macbookrosa
        DB::table('notebooks')->insert([
          'modelid' => '1',
          'colorid' => '3',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/macbookrosa13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '1',
          'colorid' => '3',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/macbookrosa15.webp',
        ]);
        //macbook azul
        DB::table('notebooks')->insert([
          'modelid' => '1',
          'colorid' => '4',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/macbookazul13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '1',
          'colorid' => '4',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/macbookazul15.webp',
        ]);



        //dellgris
        DB::table('notebooks')->insert([
          'modelid' => '2',
          'colorid' => '1',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/dellxpsgris13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '2',
          'colorid' => '1',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/dellxpsris15.webp',
        ]);
        //dellverde
        DB::table('notebooks')->insert([
          'modelid' => '2',
          'colorid' => '2',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/dellxpsverde13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '2',
          'colorid' => '2',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/dellxpsverde15.webp',
        ]);
        //dellrosa
        DB::table('notebooks')->insert([
          'modelid' => '2',
          'colorid' => '3',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/dellxpsrosa13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '2',
          'colorid' => '3',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/dellxpsrosa15.webp',
        ]);
        //dell azul
        DB::table('notebooks')->insert([
          'modelid' => '2',
          'colorid' => '4',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/dellxpsazul13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '2',
          'colorid' => '4',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/dellxpsazul15.webp',
        ]);

        //lenovogris
        DB::table('notebooks')->insert([
          'modelid' => '3',
          'colorid' => '1',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/lenovogris13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '3',
          'colorid' => '1',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/lenovogris15.webp',
        ]);
        //lenovoverde
        DB::table('notebooks')->insert([
          'modelid' => '3',
          'colorid' => '2',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/lenovoverde13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '3',
          'colorid' => '2',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/lenovoverde15.webp',
        ]);
        //lenovorosa
        DB::table('notebooks')->insert([
          'modelid' => '3',
          'colorid' => '3',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/lenovorosa13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '3',
          'colorid' => '3',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/lenovorosa15.webp',
        ]);
        //lenovo azul
        DB::table('notebooks')->insert([
          'modelid' => '3',
          'colorid' => '4',
          'sizeid' => '1',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/lenovoazul13.webp',
        ]);
        DB::table('notebooks')->insert([
          'modelid' => '3',
          'colorid' => '4',
          'sizeid' => '2',
          'url' => 'https://iawbucket.s3.amazonaws.com/Iaw/lenovoazul15.webp',
        ]);

        DB::table('notebookusers')->insert([
          'notebookid' => '3',
          'userid' => '1',
          'stickerurl' => 'https://iawbucket.s3.amazonaws.com/Iaw/pumas.webp',
        ]);


    }
}
