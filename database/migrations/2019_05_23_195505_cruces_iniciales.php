<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrucesIniciales extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cruces_iniciales', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('llave_nro');
            $table->bigInteger('id_A')->unsigned();
            $table->bigInteger('id_B')->unsigned();
        

            $table->timestamps();

             //relacion constraint
             $table->foreign('id_A')->references('id')->on('equipos')->onDelete('cascade');
             $table->foreign('id_B')->references('id')->on('equipos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
