<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableProdes extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('prodes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('partido_id')->nullable(false);
            $table->integer('user_id')->nullable(false);
            $table->integer('resultado_local')->nullable(false);
            $table->integer('resultado_visitante')->nullable(false);
            $table->boolean('gano');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('prodes');
    }
}
