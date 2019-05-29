<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UpperBodyItem;

class UpperBodyItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'items' => UpperBodyItem::all()
            ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UpperBodyItem  $upperbodyItem
     * @return \Illuminate\Http\Response
     */
    public function show(UpperBodyItem $upperbodyItem)
    {
        return $upperbodyItem;
    }
}
