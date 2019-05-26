<?php

use Illuminate\Database\Seeder;

class SeleccionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('selecciones')->insert([
            'codigo' => 'BRA',
            'name' => 'Brasil'
            ]);
        DB::table('selecciones')->insert([
            'codigo' => 'BOL',
            'name' => 'Bolivia'
            ]);
        DB::table('selecciones')->insert([
            'codigo' => 'VEN',
            'name' => 'Venezuela'
            ]);
        DB::table('selecciones')->insert([
            'codigo' => 'PER',
            'name' => 'Perú'
            ]);
        DB::table('selecciones')->insert([
            'codigo' => 'ARG',
            'name' => 'Argentina'
            ]);
        DB::table('selecciones')->insert([
            'codigo' => 'COL',
            'name' => 'Colombia'
            ]);
        DB::table('selecciones')->insert([
            'codigo' => 'PAR',
            'name' => 'Paraguay'
            ]);
        DB::table('selecciones')->insert([
            'codigo' => 'QAT',
            'name' => 'Qatar'
            ]);
        DB::table('selecciones')->insert([
            'codigo' => 'URU',
            'name' => 'Uruguay'
            ]); 
        DB::table('selecciones')->insert([
            'codigo' => 'ECU',
            'name' => 'Ecuador'
            ]); 
        DB::table('selecciones')->insert([
            'codigo' => 'JPN',
            'name' => 'Japón'
            ]);
        DB::table('selecciones')->insert([
            'codigo' => 'CHI',
            'name' => 'Chile'
            ]);
    }
          
}
