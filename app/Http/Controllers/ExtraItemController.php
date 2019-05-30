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
            'items' => ExtraItem::all(),
            'status' => 'success'
            ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($extraItem)
    {
        return response()->json([
            'item' => ExtraItem::find($extraItem),
            'status' => 'success'
            ], 200);
    }
}
