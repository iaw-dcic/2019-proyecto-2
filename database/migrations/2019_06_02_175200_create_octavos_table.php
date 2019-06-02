<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOctavosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('octavos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('cuartos_id');
            $table->string('teamname1');
            $table->string('teamname2');
            $table->string('teamname3');
            $table->string('teamname4');
            $table->string('teamname5');
            $table->string('teamname6');
            $table->string('teamname7');
            $table->string('teamname8');
            $table->string('teamname9');
            $table->string('teamname10');
            $table->string('teamname11');
            $table->string('teamname12');
            $table->string('teamname13');
            $table->string('teamname14');
            $table->string('teamname15');
            $table->string('teamname16');
            $table->timestamps();

            $table->foreign('cuartos_id')->references('id')->on('cuartos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('octavos');
    }
}