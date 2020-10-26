<?php

namespace App\Http\Controllers\Api\V2\Onstage;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Onstage\LoginRequest;
use App\Http\Requests\Api\V2\Onstage\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login(LoginRequest $request)
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

    public function register(UserRequest $request)
    {
        User::query()->create($request->only(['name', 'email', 'password']));

        return api_response()->success('注册成功。。。');
    }

    public function logout()
    {
        auth()->logout();

        return api_response()->message('退出成功。。。');
    }

    public function notices()
    {
        $notices = auth()->user()->notices()->paginate(5);

        return api_response()->success($notices);
    }
}
