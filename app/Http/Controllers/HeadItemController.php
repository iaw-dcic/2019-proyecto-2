<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HeadItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return HeadItem::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\HeadItem  $headItem
     * @return \Illuminate\Http\Response
     */
    public function show(BodyItem $headItem)
    {
        return $headItem;
    }
}
