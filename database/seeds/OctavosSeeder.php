<?php

use Illuminate\Database\Seeder;

class OctavosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('partidos')->insert([
            'jugador_uno_id' => '1',  //nole
            'jugador_dos_id'=> '531',  //kohlscreiber
            'ronda'=>'8',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '71', //tsitipas
            'jugador_dos_id'=> '91',  //fognini
            'ronda'=>'8',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '271', //ruud
            'jugador_dos_id'=> '61',  //delpo
            'ronda'=>'8',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '121', //coric
            'jugador_dos_id'=> '21',  //roger
            'ronda'=>'8',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '371', //berretini
            'jugador_dos_id'=> '411',  //peque
            'ronda'=>'8',
        ]); 
        DB::table('partidos')->insert([
            'jugador_uno_id' => '321', //verdasco
            'jugador_dos_id'=> '101',  //kachanov
            'ronda'=>'8',
        ]);

        DB::table('partidos')->insert([
            'jugador_uno_id' => '361', //struf
            'jugador_dos_id'=> '51',  //nishikori
            'ronda'=>'8',
        ]);
      
      
        DB::table('partidos')->insert([
            'jugador_uno_id' => '131', 
            'jugador_dos_id'=> '11',  //nadal
            'ronda'=>'8',
        ]);
    }
}
