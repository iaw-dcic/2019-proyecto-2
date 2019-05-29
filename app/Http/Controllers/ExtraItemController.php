<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExtraItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ExtraItem::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ExtraItem  $extraItem
     * @return \Illuminate\Http\Response
     */
    public function show(BodyItem $extraItem)
    {
        return $extraItem;
    }
}
