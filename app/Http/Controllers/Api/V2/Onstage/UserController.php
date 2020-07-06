<?php

namespace App\Http\Controllers\Api\V2\Onstage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function info()
    {
        return api()->success(auth()->user());
    }
}
