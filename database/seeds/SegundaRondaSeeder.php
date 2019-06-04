<?php

use Illuminate\Database\Seeder;

class SegundaRondaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('partidos')->insert([
            'jugador_uno_id' => '1',
            'jugador_dos_id'=> '261',  
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '531',
            'jugador_dos_id'=> '151',  //cechinato
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '431', //krygios
            'jugador_dos_id'=> '271',  //ruud
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '441', //goffin
            'jugador_dos_id'=> '61',  //delpo
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '31', //zverev
            'jugador_dos_id'=> '371',  //berretini
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '411', //peque
            'jugador_dos_id'=> '231',  //ramos
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '81', //cilic
            'jugador_dos_id'=> '361',  //struff
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '481', //fritz
            'jugador_dos_id'=> '51',  //nishikori
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '71', //TSITSIPAS 
            'jugador_dos_id'=> '511',  //Sinner 
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '461', //albot 
            'jugador_dos_id'=> '91',  //fognini 
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '121', //coric 
            'jugador_dos_id'=> '221',  //norrie 
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '401', //sousa 
            'jugador_dos_id'=> '21',  //roger 
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '41', //thiem 
            'jugador_dos_id'=> '321',  //verdasco 
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '191', //augut 
            'jugador_dos_id'=> '101',  //khachanov 
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '131', //Basilashvili  
            'jugador_dos_id'=> '311',  //Djere  
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '171', //chady  
            'jugador_dos_id'=> '11',  //nadal  
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
    }
}
