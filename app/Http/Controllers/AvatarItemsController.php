<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BodyItem;
use App\HeadItem;
use App\UpperBodyItem;
use App\LowerBodyItem;
use App\ExtraItem;

class AvatarItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'items' => [
                'bodyitems' => BodyItem::all(),
                'headitems' => HeadItem::all(),
                'upperbodyitems' => UpperBodyItem::all(),
                'lowerbodyitems' => LowerBodyItem::all(),
                'extraitems' => ExtraItem::all(),
            ],
            'status' => 'success'
            ], 200);
    }
}
