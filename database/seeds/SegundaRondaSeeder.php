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
            'jugador_dos_id'=> '27',  
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '54',
            'jugador_dos_id'=> '16',  //cechinato
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '44', //krygios
            'jugador_dos_id'=> '28',  //ruud
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '45', //goffin
            'jugador_dos_id'=> '7',  //delpo
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '4', //zverev
            'jugador_dos_id'=> '38',  //berretini
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '42', //peque
            'jugador_dos_id'=> '24',  //ramos
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '9', //cilic
            'jugador_dos_id'=> '27',  //struff
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '49', //fritz
            'jugador_dos_id'=> '6',  //nishikori
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '8', //TSITSIPAS 
            'jugador_dos_id'=> '52',  //Sinner 
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '47', //albot 
            'jugador_dos_id'=> '10',  //fognini 
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '13', //coric 
            'jugador_dos_id'=> '23',  //norrie 
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '41', //sousa 
            'jugador_dos_id'=> '3',  //roger 
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '5', //thiem 
            'jugador_dos_id'=> '33',  //verdasco 
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '20', //augut 
            'jugador_dos_id'=> '11',  //khachanov 
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '14', //Basilashvili  
            'jugador_dos_id'=> '32',  //Djere  
            'resultado'=>'1',
            'ronda'=>'16',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '17', //chady  
            'jugador_dos_id'=> '2',  //nadal  
            'resultado'=>'2',
            'ronda'=>'16',
        ]);
    }
}
