<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Prediction extends Model
{
  protected $fillable = [
     'user_id',
     'name'
 ];

   public function partidos(){
       return $this->hasMany(Match::class);
   }

   public function user(){
     return $this->belongsTo(User::class);
   }

}
