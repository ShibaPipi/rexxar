<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    // 登录展示页面
    public function index()
    {
        return view('admin.home.index');
    }
}
