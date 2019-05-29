<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Node;

class Playoff extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'raiz',
    ];

    public function playoff()
    {
        $raiz = Node::where('id',$this->raiz)->first();
        return $raiz->getNombresArbolEnArreglo();
    }
}
