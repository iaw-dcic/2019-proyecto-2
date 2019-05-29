<?php

use Illuminate\Database\Seeder;

use App\BodyItem;
use App\HeadItem;
use App\ExtraItem;
use App\UpperBodyItem;
use App\LowerBodyItem;

class AvatarItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Creo 5 items de cada parte del avatar
        for ($i = 1; $i <= 5; $i++) {            
            // Body items
            BodyItem::create([
                'resource' => ('bodyitem_'.$i.'.png')
            ]);
    
            // Head items
            HeadItem::create([
                'resource' => ('headitem_'.$i.'.png')
            ]);
    
            // Extra items
            ExtraItem::create([
                'resource' => ('extraitem_'.$i.'.png')
            ]);
    
            // UpperBody items
            UpperBodyItem::create([
                'resource' => ('upperbodyitem_'.$i.'.png')
            ]);
    
            // LowerBody items
            LowerBodyItem::create([
                'resource' => ('lowerbodyitem_'.$i.'.png')
            ]);
        }
    }
}
