<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Shirt;
use Faker\Generator as Faker;

$factory->define(Shirt::class, function (Faker $faker) {
    return [
        'user_id' => rand(1,4),
        'design_name' => Str::random(10),
    ];
});
