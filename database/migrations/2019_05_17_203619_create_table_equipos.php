<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableEquipos extends Migration{
    /**
     * Run the migrations.
     * @return void
     */
    public function up(){
        Schema::create('equipos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code', 10)->nullable(true);
            $table->string('nombre', 50);
            $table->string('image_url', 250);
            $table->string('image_id', 100);
        });
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down(){
        Schema::dropIfExists('equipos');
    }
}
