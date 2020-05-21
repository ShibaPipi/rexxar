<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    // 登录展示页面
    public function index()
    {
        return view('admin.login.index');
    }

    // 登录操作
    public function login()
    {
        //  验证
        $this->validate(request(), [
            'name' => 'required|min:2',
            'password' => 'required|min:5',
        ]);

        //  逻辑
        $user = request(['name', 'password']);
        if (auth('admin')->attempt($user)) {
            return redirect()->route('admin.home');
        }
        //  渲染
        return back()->withErrors("用户名密码不匹配");
    }

    // 登出
    public function logout()
    {
        auth('admin')->logout();

        return redirect()->route('admin.login.index');
    }
}
