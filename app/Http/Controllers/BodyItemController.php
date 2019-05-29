<?php

namespace App\Http\Controllers;

use App\BodyItem;
use Illuminate\Http\Request;

class BodyItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return BodyItem::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BodyItem  $bodyItem
     * @return \Illuminate\Http\Response
     */
    public function show(BodyItem $bodyItem)
    {
        return $bodyItem;
    }
}
