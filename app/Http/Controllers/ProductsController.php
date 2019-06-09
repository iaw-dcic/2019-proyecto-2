<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Product;
use App\ColorCase;
use App\User;
 
class ProductsController extends Controller
{
 
    public function index()
    {
        $user=Auth::user();

        $products=Product::where([
            ['id_user', '=', $user->id]
        ])->get();

        return $products->toJson();
    }
 
    public function show($id)
    {
        $product=Product::find($id);

        return $product;
    }

    public function getFunda($id)
    {
        $product=Product::find($id);

        $colorCase=ColorCase::where([
            ['id','=',$product['id_case_color']],
        ])->get();

        return $colorCase[0];
    }
 
    public function store()
    {
        $user=Auth::user();
                
        $data=request()->all();

        $colorCase = ColorCase::where([
            ['id_color', '=', $data['id_color']],
            ['id_case', '=', $data['id_case']],
        ])->get();

        $product=new Product();

        $product->id_user=$user->id;
        $product->id_case_color=$colorCase[0]['id'];
        $product->id_image=$data['id_image'];
        $product->name=$data['name'];

        $product->save();

        return response()->json($product, 201);
    }
 
    public function update($id)
    {
        $user=Auth::user();

        $product=Product::find($id);

        $data=request()->all();
 
        $colorCase = ColorCase::where([
            ['id_color', '=', $data['id_color']],
            ['id_case', '=', $data['id_case']],
        ])->get();

        $product->update([
            'name'=>$data['name'],
            'id_case_color'=>$colorCase[0]['id'],
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