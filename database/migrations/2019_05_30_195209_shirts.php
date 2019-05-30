<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Shirts extends Migration
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
            $table->string('nombre')->index();
            $table->timestamp('created_at')->nullable();
            $table->unsignedBigInteger('stampa_id')->nullable();
            $table->foreign('stampa_id')->references('id')->on('stampas');
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
