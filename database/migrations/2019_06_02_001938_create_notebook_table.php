<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotebookTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notebooks', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('sizeid');
            $table->foreign('sizeid')->references('id')->on('sizes');
            $table->unsignedInteger('modelid');
            $table->foreign('modelid')->references('id')->on('modelos');
            $table->unsignedInteger('colorid');
            $table->foreign('colorid')->references('id')->on('colors');
            $table->string('url');
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
        Schema::dropIfExists('notebooks');
    }
}
