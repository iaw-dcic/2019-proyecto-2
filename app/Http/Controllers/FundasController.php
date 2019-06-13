<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Funda;
 
class FundasController extends Controller
{
    public function index()
    {
        $fundas=Funda::all();

        return $fundas->toJson();
    }
}