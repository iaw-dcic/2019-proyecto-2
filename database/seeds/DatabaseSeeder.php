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
        // $this->call(UsersTableSeeder::class);

        //SABORES
        DB::table('sabor')->insert([
            'nombre' => 'Vainilla',
            'url' => 'img/Donas/donaVainilla.png',
        ]);

        DB::table('sabor')->insert([
            'nombre' => 'Chocolate',
            'url' => 'img/Donas/donaChocolate.png',
        ]);

        DB::table('sabor')->insert([
            'nombre' => 'Mixta',
            'url' => 'img/Donas/donaMixta.png',
        ]);

        DB::table('sabor')->insert([
            'nombre' => 'Vacia',
            'url' => 'img/Donas/decoracionVacio.png',
        ]);

        //GLASEADOS
        DB::table('glaseado')->insert([
            'nombre' => 'Blanco',
            'url' => 'img/Donas/glaseadoBlanco.png',
        ]);

        DB::table('glaseado')->insert([
            'nombre' => 'Chocolate',
            'url' => 'img/Donas/glaseadoChocolate.png',
        ]);

        DB::table('glaseado')->insert([
            'nombre' => 'Rosa',
            'url' => 'img/Donas/glaseadoRosa.png',
        ]);

        DB::table('glaseado')->insert([
            'nombre' => 'Celeste',
            'url' => 'img/Donas/glaseadoCeleste.png',
        ]);

        DB::table('glaseado')->insert([
            'nombre' => 'Naranja',
            'url' => 'img/Donas/glaseadoNaranja.png',
        ]);

        DB::table('glaseado')->insert([
            'nombre' => 'Vacia',
            'url' => 'img/Donas/glaseadoVacio2.png',
        ]);

        //DECORACION
        DB::table('decorado')->insert([
            'nombre' => 'Chispas1',
            'url' => 'img/Donas/chispas1.png',
        ]);

        DB::table('decorado')->insert([
            'nombre' => 'Chispas2',
            'url' => 'img/Donas/chispas2.png',
        ]);

        DB::table('decorado')->insert([
            'nombre' => 'Chispas3',
            'url' => 'img/Donas/chispas3.png',
        ]);

        DB::table('decorado')->insert([
            'nombre' => 'Glaseado1',
            'url' => 'img/Donas/glaseado1.png',
        ]);

        DB::table('decorado')->insert([
            'nombre' => 'Glaseado2',
            'url' => 'img/Donas/glaseado2.png',
        ]);

        DB::table('decorado')->insert([
            'nombre' => 'Vacio',
            'url' => 'img/Donas/decoracionVacio.png',
        ]);
    }
}
