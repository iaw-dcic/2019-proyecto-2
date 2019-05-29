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
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('name')->nullable();
            $table->unsignedInteger('body_id');
            $table->unsignedInteger('head_id');
            $table->unsignedInteger('upperbody_id');
            $table->unsignedInteger('lowerbody_id');
            $table->unsignedInteger('extra_id');
            $table->timestamps();
        });

        Schema::table('avatars', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('body_id')->references('id')->on('body_items');
            $table->foreign('head_id')->references('id')->on('head_items');
            $table->foreign('upperbody_id')->references('id')->on('upperbody_items');
            $table->foreign('lowerbody_id')->references('id')->on('lowerbody_items');
            $table->foreign('extra_id')->references('id')->on('extra_items');
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
