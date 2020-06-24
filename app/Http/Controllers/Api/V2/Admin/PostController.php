<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V2\Admin\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // 首页
    public function index()
    {
        return api()->success(Post::query()
            ->select('id', 'title', 'status', 'created_at')
            ->withoutGlobalScope('available')
            ->latest()
            ->paginate(10)
        );
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

        return api()->updated();
    }
}
