<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Auth\LoginController as AuthLoginController;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends AuthLoginController
{
    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::ADMIN_HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:admin', ['except' => 'logout']);
    }

    /**
     * 重写登录视图页面
     *
     * @return mixed
     */
    public function showLoginForm()
    {
        return view('admin.login.index');
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function username()
    {
        return 'name';
    }

    /**
     * 自定义认证驱动
     *
     * @return mixed
     */
    protected function guard()
    {
        return auth()->guard('admin');
    }

//    // 登录操作
//    public function login(Request $request)
//    {
//        $this->validate($request, [
//            'name' => 'required|min:2',
//            'password' => 'required|min:5',
//        ]);
//
//        $user = $request->only(['name', 'password']);
//
//        if (auth('admin')->attempt($user)) {
//            return redirect()->route('admin.home');
//        }
//
//        return back()->withErrors("用户名密码不匹配");
//    }

    // 登出
    public function logout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('admin.login.index');
    }
}
