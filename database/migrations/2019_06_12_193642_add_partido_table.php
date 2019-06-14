<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPartidoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partido', function (Blueprint $table) {
             $table->increments('id')->unsigned();
            $table->integer('id_equipo_local')->unsigned();
            $table->integer('id_equipo_visitante')->unsigned();            
            $table->integer('id_equipo_ganador')->unsigned();                
            $table->integer('id_torneo')->unsigned();      
            $table->timestamps();

            $table->foreign('id_equipo_local')->references('id')->on('equipo');
            $table->foreign('id_equipo_visitante')->references('id')->on('equipo');            
            $table->foreign('id_equipo_ganador')->references('id')->on('equipo');  
        $table->foreign('id_torneo')->references('id')->on('torneo')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('partido');
    }
}
