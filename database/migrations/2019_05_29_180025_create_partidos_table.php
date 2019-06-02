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

            $table->unsignedBigInteger('prode_id');
            $table->foreign('prode_id')->references('id')->on('prodes');

            $table->unsignedBigInteger('nro_partido');

            $table->unsignedBigInteger('nro_partidoProximo')->nullable();

            $table->unsignedBigInteger('nro_partidoEquipo1')->nullable();

            $table->unsignedBigInteger('nro_partidoEquipo2')->nullable();

            $table->unsignedBigInteger('id_equipo1');
            $table->foreign('id_equipo1')->references('id')->on('teams');

            $table->unsignedBigInteger('id_equipo2')->nullable();
            $table->foreign('id_equipo2')->references('id')->on('teams');

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
