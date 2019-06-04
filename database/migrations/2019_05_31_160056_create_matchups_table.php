<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMatchupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matchups', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('bracket_id');
            $table->foreign('bracket_id')->references('id')->on('brackets');
            $table->unsignedBigInteger('team1');
            $table->foreign('team1')->references('id')->on('teams');
            $table->unsignedBigInteger('team2');
            $table->foreign('team2')->references('id')->on('teams');
            $table->unsignedBigInteger('result')->nullable();
            $table->integer('match_no');
            $table->foreign('result')->references('id')->on('teams');
            $table->enum('phase', ['eighth', 'quarter', 'semis', 'final']);
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
        Schema::dropIfExists('matchups');
    }
}
