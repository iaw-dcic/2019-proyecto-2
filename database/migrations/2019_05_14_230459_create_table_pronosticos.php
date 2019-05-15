<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTablePronosticos extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('pronosticos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('partido_id');
            $table->integer('user_id');
            $table->string('opinion');
            $table->integer('prediccion'); // -1 = Empate---Id_ganador1---Id_Ganador2
            $table->string('resultado'); // 1-0
            $table->boolean('activo')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::table('pronosticos', function (Blueprint $table) {
            //
        });
    }
}
