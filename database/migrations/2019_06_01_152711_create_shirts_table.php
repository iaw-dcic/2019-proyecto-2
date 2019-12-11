<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShirtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shirts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('tela');
            $table->string('talle');
            $table->unsignedBigInteger('user_id');
            $table->string('color');
            $table->string('logo')->nullable();
          
            /**Llave a otras tablas */
            $table->foreign('tela')->references('tela')->on('telas');
            $table->foreign('talle')->references('talle')->on('talles');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('color')->references('color')->on('colours');
            $table->foreign('logo')->references('logo')->on('logos');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shirts');
    }
}
