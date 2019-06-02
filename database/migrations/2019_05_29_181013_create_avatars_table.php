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
            $table->unsignedSmallInteger('body_id')->default(1);
            $table->unsignedSmallInteger('head_id')->default(1);
            $table->unsignedSmallInteger('upperbody_id')->default(1);
            $table->unsignedSmallInteger('lowerbody_id')->default(1);
            $table->unsignedSmallInteger('extra_id')->default(1);
            $table->timestamps();
        });

        Schema::table('avatars', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('body_id')->references('id')->on('body_items');
            $table->foreign('head_id')->references('id')->on('head_items');
            $table->foreign('upperbody_id')->references('id')->on('upper_body_items');
            $table->foreign('lowerbody_id')->references('id')->on('lower_body_items');
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
