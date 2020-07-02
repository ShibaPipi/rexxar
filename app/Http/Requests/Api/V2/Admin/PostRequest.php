<?php

namespace App\Http\Requests\Api\V2\Admin;

use App\Enums\Post\StatusEnum;
use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
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
            case 'PUT':
                return [
                    'status' => 'in:' . StatusEnum::DISABLED . ',' . StatusEnum::ENABLED
                ];
            default:
                return [];
        }
    }
}
