<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTablePosicionesCampeonatos extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('posiciones_campeonatos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('campeonato_id');
            $table->integer('equipo_id');
            $table->string('grupo');
            $table->integer('posicion');
            $table->integer('partidos_jugados');
            $table->integer('partidos_ganados');
            $table->integer('partidos_empatados');
            $table->integer('partidos_perdidos');
            $table->integer('puntos');
            $table->integer('goles_a_favor');
            $table->integer('goles_en_contra');
            $table->integer('diferencia_de_goles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posiciones_campeonatos');
    }
}
