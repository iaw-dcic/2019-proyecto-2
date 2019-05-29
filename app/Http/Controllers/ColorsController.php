<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Color;
 
class ColorsController extends Controller
{
    public function index()
    {
        $colors=Color::all();

        return $colors->toJson();
    }
}