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
            $table->increments('id');
            $table->timestamps();
            $table->unsignedInteger('team1_id');
            $table->unsignedInteger('team2_id');
            $table->unsignedInteger('num')->nullable();
            $table->unsignedInteger('prediction')->nullable();
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
