<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

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

        api()->success($posts);
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

        return api()->success();
    }
}
