<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Partidos extends Migration
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
            $table->unsignedBigInteger('pronostico_id');
            $table->string('codigo_sel_A')->nullable();
            $table->foreign('codigo_sel_A')->references('codigo')->on('selecciones');
            $table->string('codigo_sel_B')->nullable();
            $table->foreign('codigo_sel_B')->references('codigo')->on('selecciones');
            $table->integer('goles_B')->nullable();
            $table->integer('goles_A')->nullable();
            $table->boolean('ingreso_goles');
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
