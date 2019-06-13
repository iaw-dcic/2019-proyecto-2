<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Image;
 
class ImagesController extends Controller
{
    public function index()
    {
        $images=Image::all();

        return $images->toJson();
    }

    public function show($id_image)
    {
        $image = Image::where([
            ['id', '=', $id_image],
        ])->get();

        return $image->toJson();
    }
}