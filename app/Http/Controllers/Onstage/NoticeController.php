<?php

namespace App\Http\Controllers\Onstage;

use App\Http\Controllers\Controller;

class NoticeController extends Controller
{
    /*
     * 消息页面
     */
    public function index()
    {
        // 获取我收到的消息
        $user = auth()->user();

        $notices = $user->notices;

        return view('onstage.notice.index', compact('notices'));
    }
}
