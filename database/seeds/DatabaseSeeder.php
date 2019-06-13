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
