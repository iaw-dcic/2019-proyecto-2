<?php

namespace App\Http\Controllers;

use App\Avatar;
use App\AvatarFeature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AvatarController extends Controller
{

    public function getCaracteristicas(){
        $features = AvatarFeature::all('feature');
        return json_encode($features);
    }

    // Retorna un JSON con el siguiente formato
    // { {'feature': '', options: ['','','',...]}, {...}, {...}, ... }
    public function caracteristicasConOpciones(){
        $ret = []; // arreglo de entrys
        $features = AvatarFeature::all();
        foreach ($features as $feature) {
            $entry = [
                'feature' => $feature->feature_name,
                'options' => []
            ];
            $options = $feature->options;
            foreach ($options as $option) {
                array_push($entry['options'], $option->option_name);
            }
            array_push($ret, $entry);
            // echo json_encode($ret);
            // echo '<br>';
        }
        // echo '<br>';
        return json_encode($ret);
    }

    // Segun la query string que se reciba retorna un loading.gif, la imagen de un avatar o una imagen not found.
    public function foto(Request $request){
        $loading = $request->query('wait');
        if($loading){
            return redirect(url("/img/loading.gif"));
        }
        $Piel = $request->query('Piel');
        $Pelo = $request->query('Pelo');
        $Color_del_pelo = $request->query('Color_del_pelo');
        $Ropa = $request->query('Ropa');
        $Color_de_la_ropa = $request->query('Color_de_la_ropa');
        $fileName = $Piel.$Pelo.$Color_del_pelo.$Ropa.$Color_de_la_ropa;
        // foreach ($queries as $key => $value) {
        //     if($value != null){
        //         $fileName = $fileName.$value;
        //     }
        // }
        $path = "/img/".$fileName.".png";
        $path = url($path);
        return redirect($path);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Avatar  $avatar
     * @return \Illuminate\Http\Response
     */
    public function show(Avatar $avatar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Avatar  $avatar
     * @return \Illuminate\Http\Response
     */
    public function edit(Avatar $avatar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Avatar  $avatar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Avatar $avatar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Avatar  $avatar
     * @return \Illuminate\Http\Response
     */
    public function destroy(Avatar $avatar)
    {
        //
    }
}
