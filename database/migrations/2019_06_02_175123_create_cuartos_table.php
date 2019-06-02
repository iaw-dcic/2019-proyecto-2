<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCuartosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cuartos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('semifinal_id');
            $table->string('teamname1');
            $table->string('teamname2');
            $table->string('teamname3');
            $table->string('teamname4');
            $table->string('teamname5');
            $table->string('teamname6');
            $table->string('teamname7');
            $table->string('teamname8');
            $table->timestamps();

            $table->foreign('semifinal_id')->references('id')->on('semifinals')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cuartos');
    }
}
