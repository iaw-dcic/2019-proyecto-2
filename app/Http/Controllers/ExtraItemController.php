<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ExtraItem;

class ExtraItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'items' => ExtraItem::all()
            ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ExtraItem  $extraItem
     * @return \Illuminate\Http\Response
     */
    public function show(ExtraItem $extraItem)
    {
        return $extraItem;
    }
}
