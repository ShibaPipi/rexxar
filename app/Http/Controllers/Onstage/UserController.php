<?php

namespace App\Http\Controllers\Onstage;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    //个人设置页面
    public function setting()
    {
        return view('onstage.user.setting');
    }

    //个人设置行为
    public function settingStore()
    {

    }

    /*
     * 个人介绍页面
     */
    public function show(User $user)
    {
        // 这个人的关注／粉丝／文章
        $user = $user->info();

        // 这个人的文章列表 10条
        $posts = $user->posts;

        // 这个人粉了的人的关注／粉丝／文章
        $starUsers = $user->stars;

        // 这个人的粉丝的关注／粉丝／文章
        $followedUsers = $user->followers;

        return view('onstage.user.show', compact('user', 'posts', 'followedUsers', 'starUsers'));
    }

    public function follow(User $user)
    {
        $user->follow($user->id);

        return [
            'error' => 0,
            'msg' => ''
        ];
    }

    public function cancelFollow(User $user)
    {
        $user->cancelFollow($user->id);

        return [
            'error' => 0,
            'msg' => ''
        ];
    }
}
