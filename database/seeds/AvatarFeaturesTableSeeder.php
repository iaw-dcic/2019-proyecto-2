<?php

use Illuminate\Database\Seeder;
use App\AvatarFeature;

class AvatarFeaturesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        //
        $af = new AvatarFeature();
        $af->feature_name = "Piel";
        $af->save();

        $af = new AvatarFeature();
        $af->feature_name = "Pelo";
        $af->save();

        $af = new AvatarFeature();
        $af->feature_name = "Color del pelo";
        $af->save();

        $af = new AvatarFeature();
        $af->feature_name = "Ropa";
        $af->save();

        $af = new AvatarFeature();
        $af->feature_name = "Color de la Ropa";
        $af->save();
    }
}
