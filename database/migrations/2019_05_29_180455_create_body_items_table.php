<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBodyItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('body_items', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('avatar_id');
            $table->string('resource');
            $table->timestamps();
        });

        Schema::table('body_items', function (Blueprint $table) {
            $table->foreign('avatar_id')->references('id')->on('avatars');
        });
    }
    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('body_items');
    }
}
