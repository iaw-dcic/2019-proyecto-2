<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Shirt extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'color' => $this->color,
            'type' => $this->type,
            'design_name' => $this->design_name,
            'user_id' => $this->user_id,
            'decoration' => $this->decoration,
        ];
    }
}
