<?php

namespace App\Http\Requests\Api\V2\Onstage;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
                    'name' => 'required|min:3|unique:users,name',
                    'email' => 'required|unique:users,email|email',
                    'password' => 'required|min:6|confirmed'
                ];
            default:
                return [];
        }
    }
}
