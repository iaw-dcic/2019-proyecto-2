<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTablePartidoProde extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partido_prode', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('prode_id');
            $table->integer('partido_id');
            $table->foreign('prode_id')->references('id')->on('prodes');
            $table->foreign('partido_id')->references('id')->on('partidos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('partido_prode');
    }
}
