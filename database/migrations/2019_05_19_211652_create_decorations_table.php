<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDecorationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('decorations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('decoration_item');
            $table->bigInteger('shirt_id')->unsigned();
            $table->foreign('shirt_id')->references('id')->on('shirts')->onDelete('cascade');
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
        Schema::dropIfExists('decorations');
    }
}
