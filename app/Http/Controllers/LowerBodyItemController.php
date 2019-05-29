<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LowerBodyItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LowerBodyItem::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\LowerBodyItem  $lowerbodyItem
     * @return \Illuminate\Http\Response
     */
    public function show(BodyItem $lowerbodyItem)
    {
        return $lowerbodyItem;
    }
}
