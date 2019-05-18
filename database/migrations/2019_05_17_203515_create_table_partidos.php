<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTablePartidos extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('partidos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('campeonato_id');
            $table->string('grupo')->nullable(false);
            $table->integer('local_id')->nullable(false);
            $table->integer('visitante_id')->nullable(false);
            $table->integer('goles_local')->nullable();
            $table->integer('goles_visitante')->nullable();
            $table->string('resultado')->nullable();
            $table->string('ganador')->nullable();
            $table->dateTime('fecha')->nullable(false);
            $table->string('finalizado');
            $table->foreign('local_id')->references('id')->on('equipos');
            $table->foreign('visitante_id')->references('id')->on('equipos');
            $table->foreign('campeonato_id')->references('id')->on('campeonatos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('partidos');
    }
}
