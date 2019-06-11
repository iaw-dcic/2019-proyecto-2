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
            'name' => 'orange',
          ]);

          DB::table('colors')->insert([
            'name' => 'amber',
          ]);

          DB::table('colors')->insert([
            'name' => 'lime',
          ]);

          DB::table('colors')->insert([
            'name' => 'teal',
          ]);

          DB::table('colors')->insert([
            'name' => 'blue',
          ]);

          DB::table('colors')->insert([
            'name' => 'indigo',
          ]);

          DB::table('colors')->insert([
            'name' => 'white',
          ]);

          DB::table('cases')->insert([
            'name' => 'iPhone 7-8',
          ]);

          DB::table('cases')->insert([
            'name' => 'iPhone X',
          ]);

          DB::table('cases')->insert([
            'name' => 'iPhone XR',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '1',
            'id_case' => '1',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-coral.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '2',
            'id_case' => '1',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-amarillo.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '3',
            'id_case' => '1',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-verde.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '4',
            'id_case' => '1',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-teal.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '5',
            'id_case' => '1',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-blue.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '6',
            'id_case' => '1',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-indigo.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '7',
            'id_case' => '1',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhone7-8/iPhone7-8-blanco.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '1',
            'id_case' => '2',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-coral.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '2',
            'id_case' => '2',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-coral.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '3',
            'id_case' => '2',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-verde.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '4',
            'id_case' => '2',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-teal.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '5',
            'id_case' => '2',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-blue.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '6',
            'id_case' => '2',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-indigo.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '7',
            'id_case' => '2',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneX/iPhoneX-blanco.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '1',
            'id_case' => '3',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-coral.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '2',
            'id_case' => '3',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-amarillo.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '3',
            'id_case' => '3',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-verde.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '4',
            'id_case' => '3',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-teal.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '5',
            'id_case' => '3',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-blue.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '6',
            'id_case' => '3',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-indigo.png',
          ]);

          DB::table('cases_color')->insert([
            'id_color' => '7',
            'id_case' => '3',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/iPhoneXR/iPhoneXR-blanco.png',
          ]);

          DB::table('images')->insert([
            'name' => 'aborto legal',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/estampas/abortolegal.png'
          ]);

          DB::table('images')->insert([
            'name' => 'cat',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/estampas/cat.png'
          ]);
          DB::table('images')->insert([
            'name' => 'cobra',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/estampas/cobra.png'
          ]);

          DB::table('images')->insert([
            'name' => 'elephant mandala',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/estampas/elephant-mandala.png'
          ]);

          DB::table('images')->insert([
            'name' => 'girl power',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/estampas/girl-power.png'
          ]);

          DB::table('images')->insert([
            'name' => 'girl',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/estampas/girl.png'
          ]);

          DB::table('images')->insert([
            'name' => 'minion',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/estampas/minion.png'
          ]);

          DB::table('images')->insert([
            'name' => 'palmeras',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/estampas/palmeras.png'
          ]);

          DB::table('images')->insert([
            'name' => 'stitch',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/estampas/stitch.png'
          ]);

          DB::table('images')->insert([
            'name' => 'sin estampa',
            'path' => 'https://iawbucket.s3.amazonaws.com/coti/imagenes-proyecto2/estampas/sin-estampa.png'
          ]);
  
    }
}
