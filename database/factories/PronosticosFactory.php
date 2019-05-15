<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Pronostico;
use Faker\Generator as Faker;

$factory->define(Pronostico::class, function (Faker $faker) {
    return [
        'evento_id' => App\User::all()->random()->id,
        'user_id' => App\Evento::all()->random()->id,
        'opinion' => $faker->text(240),
        'created_at' => now(),
        'updated_at' => now()
    ];
});
