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
            $table->integer('local_id')->nullable(false);
            $table->integer('visitante_id')->nullable(false);
            $table->string('fase')->nullable(true);
            $table->integer('goles_local')->nullable(true);
            $table->integer('goles_visitante')->nullable(true);
            $table->foreign('local_id')->references('id')->on('equipos');
            $table->foreign('visitante_id')->references('id')->on('equipos');
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
