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
            $table->timestamp('created_at')->nullable();

            $table->unsignedBigInteger('stampa_id')->nullable();
            $table->unsignedBigInteger('colour_id')->nullable();
            $table->unsignedBigInteger('user_id');
            
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('stampa_id')->references('id')->on('stampas');
            $table->foreign('colour_id')->references('id')->on('colours');

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
