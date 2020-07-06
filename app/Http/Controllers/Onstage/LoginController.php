<?php

namespace App\Http\Controllers\Onstage;

use App\Http\Controllers\Auth\LoginController as AuthLoginController;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;

class LoginController extends AuthLoginController
{
    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    //  登录页面
    public function showLoginForm()
    {
        return view('onstage.login.index');
    }

//    //  登录行为
//    public function login(Request $request)
//    {
//        $this->validate($request,[
//            'email' => 'required|email',
//            'password' => 'required|min:5',
//            'is_remember' => 'integer'
//        ]);
//
//        $user = $request->only(['email', 'password']);
//        $is_remember = boolval(request('is_remember'));
//
//        if (auth()->attempt($user, $is_remember)) {
//            return redirect()->route('posts.index');
//        }
//
//        return back()->withErrors('用户名密码错误');
//    }

    //  登出行为
    public function logout(Request $request)
    {
        auth()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('login.index');
    }
}
