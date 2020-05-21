<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;

class PostController extends Controller
{
    // 首页
    public function index()
    {
        $posts = Post::query()
            ->withoutGlobalScope('available')
            ->where('status', 0)
            ->latest()
            ->paginate(10);

        return view('admin.post.index', compact('posts'));
    }

    /*
     * 修改文章的状态
     */
    public function status(Post $post)
    {
        $this->validate(request(), [
            'status' => 'required|in:-1,1',
        ]);

        $post->status = request('status');
        $post->save();

        return [
            'error' => 0,
            'msg' => ''
        ];
    }
}
