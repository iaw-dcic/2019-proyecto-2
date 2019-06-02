<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSaborTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sabor', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->string('url');
            // $table->integer('donut_id')->unsigned();
            // $table->foreign('donut_id')->references('id')->on('donut')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sabor');
    }
}
