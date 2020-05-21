<?php

namespace App\Http\Controllers\Onstage;

use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    //  登录页面
    public function index()
    {
        return view('onstage.login.index');
    }

    //  登录行为
    public function login()
    {
        //  验证
        $this->validate(request(),[
            'email' => 'required|email',
            'password' => 'required|min:5',
            'is_remember' => 'integer'
        ]);

        //  逻辑
        $user = request(['email', 'password']);
        $is_remember = boolval(request('is_remember'));
        if (auth()->attempt($user, $is_remember)) {
            return redirect('/posts');
        }
        //  渲染
        return back()->withErrors('用户名密码错误');
    }

    //  登出行为
    public function logout()
    {
        auth()->logout();

        return redirect('/login');
    }
}
