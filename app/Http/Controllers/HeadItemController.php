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
            'items' => HeadItem::all(),
            'status' => 'success'
            ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($headItem)
    {
        return response()->json([
            'item' => HeadItem::find($headItem),
            'status' => 'success'
            ], 200);
    }
}
