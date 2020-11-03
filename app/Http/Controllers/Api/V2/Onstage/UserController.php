<?php

namespace App\Http\Controllers\Api\V2\Onstage;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Onstage\LoginRequest;
use App\Http\Requests\Api\V2\Onstage\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function login(LoginRequest $request)
    {
        $currentGuard = Auth::getDefaultDriver();

        if ($token = Auth::claims(['guard' => $currentGuard])
            ->attempt($request->only('name', 'password'))) {
            return api_response()->ok([
                'token' => 'bearer ' . $token,
                'user' => auth()->user()]);
        }

        return api_response()->badRequest('账号密码错误');
    }

    public function uploadAvatar()
    {
        $path = request()->file('avatar')->store('public/images/avatars');
        $path = 'storage' . str_replace('public/', '/', $path);

        Storage::delete(str_replace('storage/', 'public/', auth()->user()->avatar));
        auth()->user()->avatar = $path;
        auth()->user()->save();

        return api_response()->createdOrUpdated(['src' => asset($path)]);
    }

    public function update(UserRequest $request)
    {
        auth()->user()->name = $request->name;
        auth()->user()->introduction = $request->introduction;
        auth()->user()->save();

        return api_response()->createdOrUpdated();
    }

    public function info()
    {
        return api_response()->ok(auth()->user()->info());
    }

    public function show(User $user)
    {
        return api_response()->ok($user->info());
    }

    public function register(UserRequest $request)
    {
        User::query()->create($request->only(['name', 'email', 'password']));

        return api_response()->createdOrUpdated('注册成功...');
    }

    public function logout()
    {
        auth()->logout();

        return api_response()->noContent('退出成功...');
    }

    public function notices()
    {
        $notices = auth()->user()->notices()->paginate(5);

        return api_response()->ok($notices);
    }
}
