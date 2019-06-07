<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use SplQueue;

class Node extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'HI', 'HD',
    ];

    public function getNombresArbolEnArreglo()
    {
        $arr = [];
        array_push($arr,'-');
        $queue = new SplQueue();
        $queue->enqueue($this);

        while(!($queue->isEmpty())){
            $nodo = $queue->dequeue();
            array_push($arr,$nodo->name);
            if($nodo->HI!=null){
                $izq = Node::where('id',$nodo->HI)->first();
                $queue->enqueue($izq);
            }
            if($nodo->HD!=null){
                $der = Node::where('id',$nodo->HD)->first();
                $queue->enqueue($der);
            }
        }

        return $arr;
    }

    public function getArbolEnArreglo()
    {
        $arr = [];
        $queue = new SplQueue();
        $queue->enqueue($this);

        while(!($queue->isEmpty())){
            $nodo = $queue->dequeue();
            array_push($arr,$nodo);
            if($nodo->HI!=null){
                $izq = Node::where('id',$nodo->HI)->first();
                $queue->enqueue($izq);
            }
            if($nodo->HD!=null){
                $der = Node::where('id',$nodo->HD)->first();
                $queue->enqueue($der);
            }
        }

        return $arr;
    }
}
