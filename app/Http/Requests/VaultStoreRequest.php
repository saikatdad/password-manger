<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VaultStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'category'  => 'required|string',
            'name'      => 'required|string',
            'user_name' => 'nullable|string',
            'email'     => 'nullable|string',
            'password'  => 'nullable|string',
            'url'       => 'nullable|string',
            'notes'     => 'nullable|string'
        ];
    }
}