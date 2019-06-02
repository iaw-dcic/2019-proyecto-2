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
        DB::table('seleccions')->insert([
            'codigo' => 'BRA',
            'name' => 'Brasil'
            ]);
        DB::table('seleccions')->insert([
            'codigo' => 'BOL',
            'name' => 'Bolivia'
            ]);
        DB::table('seleccions')->insert([
            'codigo' => 'VEN',
            'name' => 'Venezuela'
            ]);
        DB::table('seleccions')->insert([
            'codigo' => 'PER',
            'name' => 'Perú'
            ]);
        DB::table('seleccions')->insert([
            'codigo' => 'ARG',
            'name' => 'Argentina'
            ]);
        DB::table('seleccions')->insert([
            'codigo' => 'COL',
            'name' => 'Colombia'
            ]);
        DB::table('seleccions')->insert([
            'codigo' => 'PAR',
            'name' => 'Paraguay'
            ]);
        DB::table('seleccions')->insert([
            'codigo' => 'QAT',
            'name' => 'Qatar'
            ]);
        DB::table('seleccions')->insert([
            'codigo' => 'URU',
            'name' => 'Uruguay'
            ]); 
        DB::table('seleccions')->insert([
            'codigo' => 'ECU',
            'name' => 'Ecuador'
            ]); 
        DB::table('seleccions')->insert([
            'codigo' => 'JPN',
            'name' => 'Japón'
            ]);
        DB::table('seleccions')->insert([
            'codigo' => 'CHI',
            'name' => 'Chile'
            ]);
    }
          
}
