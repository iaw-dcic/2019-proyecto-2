<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class notebookuser extends Model
{
    //
    protected $fillable = [
        'notebookid','userid','stickerurl',
    ];
}
