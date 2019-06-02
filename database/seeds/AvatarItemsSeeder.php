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
        // Creo los items de avatares
        for ($i = 0; $i < 7; $i++) {            
            // 7 body items
            BodyItem::create([
                'resource' => ('/avatars/body/bodyitem_'.$i.'.png')
            ]);
        }

        for ($i = 0; $i < 7; $i++) {            
            // 7 head items
            HeadItem::create([
                'resource' => ('/avatars/head/headitem_'.$i.'.png')
            ]);
        }

        for ($i = 0; $i < 5; $i++) {            
            // 5 upperbody items
            UpperBodyItem::create([
                'resource' => ('/avatars/upperbody/upperbodyitem_'.$i.'.png')
            ]);
        }

        for ($i = 0; $i < 4; $i++) {            
            // 4 lowerbody items
            LowerBodyItem::create([
                'resource' => ('/avatars/lowerbody/lowerbodyitem_'.$i.'.png')
            ]);
        }

        for ($i = 0; $i < 5; $i++) {            
            // 5 extra items
            ExtraItem::create([
                'resource' => ('/avatars/extra/extraitem_'.$i.'.png')
            ]);
        }
    
    }
}

