<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matches', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->unsignedBigInteger('team1_id');
            $table->unsignedBigInteger('team2_id');
            $table->unsignedBigInteger('prediction')->nullable();
            $table->integer('ronda');
        });

        Schema::table('matches', function (Blueprint $table) {
             $table->foreign('team1_id')->references('id')->on('teams');
             $table->foreign('team2_id')->references('id')->on('teams');
             $table->foreign('prediction')->references('id')->on('predictions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::disableForeignKeyConstraints();
     Schema::drop('matches');
     Schema::enableForeignKeyConstraints();
    }
}
