<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EncuentrosTabla extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('encuentros', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('cruce_id')->unsigned();
            $table->bigInteger('id_A')->unsigned();
            $table->bigInteger('id_B')->unsigned();
            $table->string('resultado_A')->nullable();
            $table->string('resultado_B')->nullable();
            $table->bigInteger('pasa')->unsigned();

            $table->timestamps();

             //relacion constraint
             $table->foreign('cruce_id')->references('id')->on('cruces')->onDelete('cascade');
             $table->foreign('id_A')->references('id')->on('equipos')->onDelete('cascade');
             $table->foreign('id_B')->references('id')->on('equipos')->onDelete('cascade');
             $table->foreign('pasa')->references('id')->on('equipos')->onDelete('cascade');
             
             

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('encuentros');
    }
}
