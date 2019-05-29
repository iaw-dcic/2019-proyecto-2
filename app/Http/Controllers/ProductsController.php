<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Product;
 
class ProductsController extends Controller
{
 
    public function index()
    {
        $products=Product::all();

        return $products->toJson();
    }
 
    public function show($id)
    {
        $product=Product::find($id);

        return $product;
    }
 
    public function store()
    {
        $user=Auth::user();

        $data=request()->all();

        $product = Product::create([
            'id_user'=>$user->id,
            'id_case'=>$data['id_case'],
            'id_color'=>$data['id_color'],
            'id_image'=>$data['id_image'],
        ]);
 
        return response()->json($product, 201);
    }
 
    public function update($id)
    {
        $user=Auth::user();

        $product=Product::find($id);

        $data=request()->all();

        $product->update([
            'id_case'=>$data['id_case'],
            'id_color'=>$data['id_color'],
            'id_image'=>$data['id_image'],
        ]);
 
        return response()->json($product, 200);
    }
 
    public function delete($id)
    {
        $product=Product::find($id);
        
        $product->delete();
 
        return response()->json(null, 204);
    }
 
}