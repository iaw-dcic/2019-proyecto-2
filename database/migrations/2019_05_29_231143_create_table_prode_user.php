<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableProdeUser extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('prode_user', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('prode_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('prode_id')->references('id')->on('prodes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('prode_user');
    }
}
