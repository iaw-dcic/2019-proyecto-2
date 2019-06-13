<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Team; 
use App\Http\Resources\Team as TeamResource; 

class TeamsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $teams = Team::all();

        return TeamResource::collection($teams);
    }

}
