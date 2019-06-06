<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDonutTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('donut', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('sabor_id')->unsigned();
            $table->foreign('sabor_id')->references('id')->on('sabor')->onDelete('cascade');
            $table->integer('glaseado_id')->unsigned();
            $table->foreign('glaseado_id')->references('id')->on('glaseado')->onDelete('cascade');
            $table->integer('decorado_id')->unsigned();
            $table->foreign('decorado_id')->references('id')->on('decorado')->onDelete('cascade');
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
        Schema::dropIfExists('donut');
    }
}
