<?php

use Illuminate\Database\Seeder;

class PartidosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        DB::table('partidos')->insert([
            'codigo_sel_A' => 'BRA',
            'codigo_sel_B' => 'PAR',
            'ingreso_goles' => false
            ]);
        DB::table('partidos')->insert([
            'codigo_sel_A' => 'PER',
            'codigo_sel_B' => 'COL',
            'ingreso_goles' => false
            ]);
        DB::table('partidos')->insert([
            'codigo_sel_A' => 'ARG',
            'codigo_sel_B' => 'CHI',
            'ingreso_goles' => false
            ]);
        DB::table('partidos')->insert([
            'codigo_sel_A' => 'URU',
            'codigo_sel_B' => 'ECU',
            'ingreso_goles' => false
            ]);
    }
          
}