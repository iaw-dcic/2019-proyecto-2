<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSemifinalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('semifinals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('final_id');
            $table->string('teamname1');
            $table->string('teamname2');
            $table->string('teamname3');
            $table->string('teamname4');
            $table->timestamps();

            $table->foreign('final_id')->references('id')->on('objfinals')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('semifinals');
    }
}
