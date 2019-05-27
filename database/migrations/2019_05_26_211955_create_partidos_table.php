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
            $table->unsignedInteger('lista_partido_id');
            $table->unsignedInteger('numero_partido');
            $table->string('etapa');
            $table->string('equipo1');
            $table->string('equipo2');
            $table->boolean('boton1');
            $table->boolean('boton2');
            $table->integer('resultado1');
            $table->integer('resultado2');
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
