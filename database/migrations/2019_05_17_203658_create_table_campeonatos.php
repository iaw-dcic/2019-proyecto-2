<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableCampeonatos extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('campeonatos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre', 100);
            $table->string('image_url', 250);
            $table->string('image_id', 100);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('campeonatos');
    }
}
