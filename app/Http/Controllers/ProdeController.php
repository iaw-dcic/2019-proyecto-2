<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//TODO LO QUE SEA PROPIO TENEMOS QUE LLAMARLO SIEMPRE CON APP
use App\Models\Prode;
use Validator;

class ProdeController extends Controller
{
    /**
     * Se encarga de listar todos los prodes.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prodes = Prode::all();
        return response()->json([
            "ok" => true,
            "data" => $prodes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        dd('desde prodecontroller.store');

        $input = $request->all();
        try{
          Prode::create($input);
          return response()->json([
              "ok"=> true,
              "message"=>"Se regitró con éxito"
          ]);
        }catch(\Exception $ex){
            return response()->json([
                "ok"=>false,
                "error"=>$ex->getMessage()
            ]);
        }

     }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $prode = Prode::where('id',$id)->first();
        return response()->json([
            "ok" => true,
            "data" => $prode
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
