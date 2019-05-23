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
            'jugador_dos_id'=> '54',  //kohlscreiber
            'ronda'=>'8',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '28', //ruud
            'jugador_dos_id'=> '7',  //delpo
            'ronda'=>'8',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '38', //berretini
            'jugador_dos_id'=> '42',  //peque
            'ronda'=>'8',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '27', //struf
            'jugador_dos_id'=> '6',  //nishikori
            'ronda'=>'8',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '8', //tsitipas
            'jugador_dos_id'=> '10',  //fognini
            'ronda'=>'8',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '13', //coric
            'jugador_dos_id'=> '3',  //roger
            'ronda'=>'8',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '33', //verdasco
            'jugador_dos_id'=> '11',  //kachanov
            'ronda'=>'8',
        ]);
        DB::table('partidos')->insert([
            'jugador_uno_id' => '14', 
            'jugador_dos_id'=> '2',  //nadal
            'ronda'=>'8',
        ]);
    }
}
