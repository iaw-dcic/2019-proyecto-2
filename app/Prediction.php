<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Prediction extends Model
{
  protected $fillable = [
     'user_id',
     'name',
 ];
}
