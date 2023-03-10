<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VaultResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'folder_id' => $this->folder_id,
            'folder' => $this->folder->name ?? '',
            'category' => $this->category,
            'email' => $this->email,
            'name' => $this->name,
            'user_name' => $this->user_name,
            'password' => $this->password,
            'url' => $this->url,
            'card_holder_name'=> $this->card_holder_name,
            'card_number'=> $this->card_number,
            'card_expiration_date'=> $this->card_expiration_date,
            'card_security_code'=> $this->card_security_code,
            'notes' => $this->notes
        ];
    }
}
