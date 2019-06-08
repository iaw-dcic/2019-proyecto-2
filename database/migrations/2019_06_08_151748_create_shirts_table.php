<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShirtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shirts', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->timestamp('created_at')->nullable();

            $table->string('stampa')->nullable();
            $table->string('colour')->nullable();
            $table->string('size')->nullable();
            $table->unsignedBigInteger('user_id');
            
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('stampa')->references('url')->on('stampas');
            $table->foreign('colour')->references('url')->on('colours');
            $table->foreign('size')->references('size')->on('sizes');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shirts');
    }
}
