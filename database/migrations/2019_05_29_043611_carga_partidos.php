<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CargaPartidos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        //Partidos iniciales
        App\Partido::create([
            'prode_id'=>'1',
            'equipo_1_id'=>'1',
            'equipo_2_id'=>'2',
            'equipo_1_goles'=>'0',
            'equipo_2_goles'=>'0'
        ]);
        App\Partido::create([
            'prode_id'=>'1',
            'equipo_1_id'=>'3',
            'equipo_2_id'=>'4',
            'equipo_1_goles'=>'0',
            'equipo_2_goles'=>'0'
        ]);
        App\Partido::create([
            'prode_id'=>'1',
            'equipo_1_id'=>'5',
            'equipo_2_id'=>'6',
            'equipo_1_goles'=>'0',
            'equipo_2_goles'=>'0'
        ]);
        App\Partido::create([
            'prode_id'=>'1',
            'equipo_1_id'=>'7',
            'equipo_2_id'=>'8',
            'equipo_1_goles'=>'0',
            'equipo_2_goles'=>'0'
        ]);
        App\Partido::create([
            'prode_id'=>'1',
            'equipo_1_id'=>'9',
            'equipo_2_id'=>'10',
            'equipo_1_goles'=>'0',
            'equipo_2_goles'=>'0'
        ]);
        App\Partido::create([
            'prode_id'=>'1',
            'equipo_1_id'=>'11',
            'equipo_2_id'=>'12',
            'equipo_1_goles'=>'0',
            'equipo_2_goles'=>'0'
        ]);
        App\Partido::create([
            'prode_id'=>'1',
            'equipo_1_id'=>'13',
            'equipo_2_id'=>'14',
            'equipo_1_goles'=>'0',
            'equipo_2_goles'=>'0'
        ]);
        App\Partido::create([
            'prode_id'=>'1',
            'equipo_1_id'=>'15',
            'equipo_2_id'=>'16',
            'equipo_1_goles'=>'0',
            'equipo_2_goles'=>'0'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
