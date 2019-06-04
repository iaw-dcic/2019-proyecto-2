<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StampaController extends Controller
{
    public function getImage(){
        return Stampa::get(['url']);
    }
}
