<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAvatarsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up () {
        Schema::create('avatars', function (Blueprint $table) {
            $table->increments ('avatar_id');
            $table->string ('avatar_name');
            $table->string ('owner');
            $table->string ('hair');
            $table->string ('shirt');
            $table->string ('beard');
            $table->timestamps ();
        });

        Schema::table ('avatars', function ($table) {
            $table->foreign ('owner')->references ('name')->on ('users')->onDelete ('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down () {
        Schema::dropIfExists ('avatars');
    }
}
