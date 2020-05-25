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
        $user = User::query()->withCount(['stars', 'followers', 'posts'])->find($user->id);

        // 这个人的文章列表 10条
        $posts = $user->posts()->latest()->take(10)->get();

        // 这个人粉了的人的关注／粉丝／文章
        $stars = $user->stars;
        $starUsers = User::query()->whereIn('id', $stars->pluck('star_id'))->withCount(['stars', 'followers', 'posts'])->get();

        // 这个人的粉丝的关注／粉丝／文章
        $followers = $user->followers;
        $followedUsers = User::query()->whereIn('id', $followers->pluck('follower_id'))->withCount(['stars', 'followers', 'posts'])->get();

        return view('onstage.user.show', compact('user', 'posts', 'followedUsers', 'starUsers'));
    }

    public function fan(User $user)
    {
        $me = auth()->user();
        $me->doFan($user->id);

        return [
            'error' => 0,
            'msg' => ''
        ];
    }

    public function unfan(User $user)
    {
        $me = auth()->user();
        $me->doUnFan($user->id);

        return [
            'error' => 0,
            'msg' => ''
        ];
    }
}
