<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Match extends Model
{
    protected $fillable = [
        'ronda',
        'team1_id'
        'team2_id'
        'prediction'
    ];
}
