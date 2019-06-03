<?php

use Illuminate\Database\Seeder;
use App\AvatarFeatureOption;

class AvatarFeatureOptionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $afo = new AvatarFeatureOption();
        $afo->option_name = "Clara";
        $afo->avatar_feature = "Piel";
        $afo->save();

        $afo = new AvatarFeatureOption();
        $afo->option_name = "Oscura";
        $afo->avatar_feature = "Piel";
        $afo->save();

        $afo = new AvatarFeatureOption();
        $afo->option_name = "Corto";
        $afo->avatar_feature = "Pelo";
        $afo->save();

        $afo = new AvatarFeatureOption();
        $afo->option_name = "LargoLiso";
        $afo->avatar_feature = "Pelo";
        $afo->save();

        $afo = new AvatarFeatureOption();
        $afo->option_name = "Rubio";
        $afo->avatar_feature = "Color del pelo";
        $afo->save();

        $afo = new AvatarFeatureOption();
        $afo->option_name = "Negro";
        $afo->avatar_feature = "Color del pelo";
        $afo->save();

        $afo = new AvatarFeatureOption();
        $afo->option_name = "Buzo";
        $afo->avatar_feature = "Ropa";
        $afo->save();

        $afo = new AvatarFeatureOption();
        $afo->option_name = "Sueter";
        $afo->avatar_feature = "Ropa";
        $afo->save();

        $afo = new AvatarFeatureOption();
        $afo->option_name = "Negro";
        $afo->avatar_feature = "Color de la Ropa";
        $afo->save();

        $afo = new AvatarFeatureOption();
        $afo->option_name = "Azul";
        $afo->avatar_feature = "Color de la Ropa";
        $afo->save();
    }
}
