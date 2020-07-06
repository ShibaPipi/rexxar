<?php

namespace App\Http\Requests\Api\V2\Admin;

use Illuminate\Foundation\Http\FormRequest;

class AdminRoleRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'POST':
                return [
                    'name' => 'required|min:2',
                    'description' => 'required|min:3'
                ];
            default:
                return [];
        }
    }
}
