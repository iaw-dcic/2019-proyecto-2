<?php

namespace App\Http\Controllers;

use File;
use Illuminate\Support\Facades\Response;

class StaticImageController extends Controller
{

    public function getAllShirts()
    {
        return Response::json(array(
            'tshirt' => $this->getTShirts(),
            'longsleeve' => $this->getLongsleeves(),
        ));
    }

    protected function getTShirts()
    {
        $TshirtsFilepath = public_path() . '/img/shirts/tshirt/';
        $tshirts = [
            'FFFFFF' => base64_encode(File::get($TshirtsFilepath . 'FFFFFF.png')),
            '1B998B' => base64_encode(File::get($TshirtsFilepath . '1B998B.png')),
            'ED217C' => base64_encode(File::get($TshirtsFilepath . 'ED217C.png')),
            'FF9B71' => base64_encode(File::get($TshirtsFilepath . 'FF9B71.png')),
            '55DDFF' => base64_encode(File::get($TshirtsFilepath . '55DDFF.png')),
        ];
        return $tshirts;
    }

    protected function getLongsleeves()
    {
        $LongsleeveFilepath = public_path() . '/img/shirts/longsleeve/';
        $longsleeve = array(
            'FFFFFF' => base64_encode(File::get($LongsleeveFilepath . 'FFFFFF.png')),
            '1B998B' => base64_encode(File::get($LongsleeveFilepath . '1B998B.png')),
            'ED217C' => base64_encode(File::get($LongsleeveFilepath . 'ED217C.png')),
            'FF9B71' => base64_encode(File::get($LongsleeveFilepath . 'FF9B71.png')),
            '55DDFF' => base64_encode(File::get($LongsleeveFilepath . '55DDFF.png')),
        );
        return $longsleeve;
    }

    public function getShirtImage($type, $color)
    {
        $filepath = public_path() . '/img/shirts/' . $type . '/' . $color . '.png';
        if (file_exists($filepath)) {
            return Response::json(array(
                'content' => base64_encode(File::get($filepath)),
            ));
        }
    }

    public function getAllDecorations()
    {
        $filepath = public_path() . '/img/decorations';
        $count = sizeof(File::files($filepath));
        $decorations = [];
        for ($i = 0; $i < $count; $i++) {
            array_push($decorations, ['id' => $i, 'content' => base64_encode(File::get($filepath . '/' . $i . '.png'))]);
        }
        return Response::json($decorations);
    }

    public function getDecorationImage($id)
    {
        $filepath = public_path() . '/img/decorations/' . $id . '.png';
        if (file_exists($filepath)) {
            return Response::json(array(
                'decoration' => base64_encode(File::get($filepath)),
            ));
        }
    }
}
