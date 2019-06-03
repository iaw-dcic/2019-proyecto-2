<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotebookusersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('notebookusers', function (Blueprint $table) {
          $table->increments('id');
          $table->unsignedInteger('notebookid');
          $table->foreign('notebookid')->references('id')->on('notebooks');
          $table->unsignedInteger('userid');
          $table->foreign('userid')->references('id')->on('users');
          $table->string('stickerurl');
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
        Schema::dropIfExists('notebookusers');
    }
}
