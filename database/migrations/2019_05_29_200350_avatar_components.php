<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AvatarComponents extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up () {
        Schema::create('avatarcomponents', function (Blueprint $table) {
            $table->increments ('avatar_id');
            $table->string ('element_type');
            $table->string ('element_source');
            $table->string ('element_var');
            $table->timestamps ();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down () {
        Schema::dropIfExists('avatarcomponents');
    }
}
