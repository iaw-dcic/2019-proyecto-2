<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBurgerIngredientTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('burger_ingredient', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('burger_id')->unsigned();
            $table->bigInteger('ingredient_id')->unsigned();
            $table->foreign('burger_id')->references('id')->on('burgers')->onDelete('cascade');
            $table->foreign('ingredient_id')->references('id')->on('ingredients')->onDelete('cascade');
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
        Schema::dropIfExists('burger_ingredient');
    }
}
