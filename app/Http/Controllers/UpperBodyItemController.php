<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UpperBodyItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UpperBodyItem::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UpperBodyItem  $upperbodyItem
     * @return \Illuminate\Http\Response
     */
    public function show(BodyItem $upperbodyItem)
    {
        return $upperbodyItem;
    }
}
