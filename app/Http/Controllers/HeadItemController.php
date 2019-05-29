<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\HeadItem;

class HeadItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'items' => HeadItem::all()
            ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\HeadItem  $headItem
     * @return \Illuminate\Http\Response
     */
    public function show(HeadItem $headItem)
    {
        return $headItem;
    }
}
