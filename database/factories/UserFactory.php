<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'username' => $faker->username,
        'email' => $faker->unique()->safeEmail,
    ];
});
