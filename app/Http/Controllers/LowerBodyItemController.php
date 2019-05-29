<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\LowerBodyItem;

class LowerBodyItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'items' => LowerBodyItem::all()
            ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\LowerBodyItem  $lowerbodyItem
     * @return \Illuminate\Http\Response
     */
    public function show(LowerBodyItem $lowerbodyItem)
    {
        return $lowerbodyItem;
    }
}
