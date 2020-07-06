<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Admin\PostRequest;
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
            ->paginate(50)
        );
    }

    public function update(PostRequest $request, Post $post)
    {
        $post->update($request->toArray());

        return api()->createdOrUpdated();
    }
}
