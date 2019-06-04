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
            $table->unsignedBigInteger('torneo_id');
            
            $table->foreign('torneo_id')
                    ->references('id')
                    ->on('torneos')
                    ->onDelete('cascade');

            $table->string('equipo1')
                    ->nullable();
            $table->string('equipo2')
                    ->nullable();
                    
            $table->unsignedInteger('posicion_en_tablero');
            $table->boolean('jugado');
            $table->unsignedInteger('estado');
            
            $table->timestamps();
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
