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
      DB::table('cases_color')->insert([
        'id_color' => '1',
        'id_case' => '1',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-coral.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '11',
        'id_case' => '1',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-amarillo.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '21',
        'id_case' => '1',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-verde.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '31',
        'id_case' => '1',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-teal.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '41',
        'id_case' => '1',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-blue.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '51',
        'id_case' => '1',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-indigo.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '61',
        'id_case' => '1',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-blanco.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '1',
        'id_case' => '11',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-coral.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '11',
        'id_case' => '11',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-amarillo.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '21',
        'id_case' => '11',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-verde.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '31',
        'id_case' => '11',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-teal.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '41',
        'id_case' => '11',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-blue.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '51',
        'id_case' => '11',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-indigo.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '61',
        'id_case' => '11',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-blanco.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '1',
        'id_case' => '21',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-coral.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '11',
        'id_case' => '21',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-amarillo.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '21',
        'id_case' => '21',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-verde.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '31',
        'id_case' => '21',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-teal.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '41',
        'id_case' => '21',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-blue.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '51',
        'id_case' => '21',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-indigo.png',
      ]);

      DB::table('cases_color')->insert([
        'id_color' => '61',
        'id_case' => '21',
        'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-blanco.png',
      ]);
    }
}
