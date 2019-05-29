<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExtraItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('extra_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('avatar_id');
            $table->string('resource');
            $table->timestamps();
        });

        Schema::table('extra_items', function (Blueprint $table) {
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
        Schema::dropIfExists('extra_items');
    }
}
