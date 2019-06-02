<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\ColorCase;
 
class ColorCasesController extends Controller
{
    public function show($id_case,$id_color)
    {
        $colorCase = ColorCase::where([
            ['id_color', '=', $id_color],
            ['id_case', '=', $id_case],
        ])->get();

        return $colorCase->toJson();
    }
}