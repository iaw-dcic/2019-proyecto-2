<?php

namespace App\Http\Controllers;

use App\BodyItem;
use Illuminate\Http\Request;

class BodyItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'items' => BodyItem::all(),
            'status' => 'success'
            ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($bodyItem)    
    {
        return response()->json([
            'item' => BodyItem::find($bodyItem),
            'status' => 'success'
            ], 200);
    }
}
