<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAvatarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avatars', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');

            $table->string('name');

            $table->unsignedBigInteger('body_id');
            $table->foreign('body_id')->references('id')->on('bodies');

            $table->unsignedBigInteger('hair_id');
            $table->foreign('hair_id')->references('id')->on('hairs');

            $table->unsignedBigInteger('eyes_id');
            $table->foreign('eyes_id')->references('id')->on('eyes');

            $table->unsignedBigInteger('nose_id');
            $table->foreign('nose_id')->references('id')->on('noses');

            $table->unsignedBigInteger('mouth_id');
            $table->foreign('mouth_id')->references('id')->on('mouths');

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
        Schema::dropIfExists('avatars');
    }
}
