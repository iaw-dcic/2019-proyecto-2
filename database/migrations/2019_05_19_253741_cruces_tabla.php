<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrucesTabla extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cruces', function (Blueprint $table) {
            $table->bigInteger('prode_id')->unsigned();
            $table->bigIncrements('id');
            $table->bigInteger('llave_nro');
            
        

            $table->timestamps();

             //relacion constraint
             $table->foreign('prode_id')->references('id')->on('prodes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cruces');
    }
}
