<?php

namespace App\Http\Controllers\Api\V2\Onstage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $currentGuard = Auth::getDefaultDriver();

        if ($token = Auth::claims(['guard' => $currentGuard])
            ->attempt($request->only('name', 'password'))) {
            return api_response()->setStatusCode(201)->success([
                'token' => 'bearer ' . $token
            ]);
        }

        return api_response()->failed('账号密码错误', 400);
    }

    public function info()
    {
        return api_response()->success(auth()->user());
    }

    public function logout()
    {
        auth()->logout();

        return api_response()->success('退出成功。。。');
    }
}
