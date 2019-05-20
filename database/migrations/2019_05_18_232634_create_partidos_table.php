<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partidos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->unsignedBigInteger('jugador_uno_id');
            $table->unsignedBigInteger('jugador_dos_id');
            $table->integer('resultado')->nullable();  // 1 o 2 dependiendo jugador
            $table->integer('sets')->nullable(); // 2 o 3 
            $table->integer('ronda'); //32 16 8vos 4tos 2(semi) 1(final)
            $table->unsignedBigInteger('pronostico')->nullable();
            
            $table->foreign('jugador_uno_id')->references('id')->on('jugadores');
            $table->foreign('jugador_dos_id')->references('id')->on('jugadores');
            $table->foreign('pronostico')->references('id')->on('pronosticos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('partidos');
    }
}
 