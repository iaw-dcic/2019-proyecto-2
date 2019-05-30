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
            'items' => LowerBodyItem::all(),
            'status' => 'success'
            ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($lowerbodyItem)
    {
        return response()->json([
            'item' => LowerBodyItem::find($lowerbodyItem),
            'status' => 'success'
            ], 200);
    }
}
