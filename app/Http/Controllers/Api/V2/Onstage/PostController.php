<?php

namespace App\Http\Controllers\Api\V2\Onstage;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Onstage\PostRequest;
use App\Models\Post;
use App\Repositories\PostRepository;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::list()->with('user')
            ->paginate(request('perPage') ?? config('rexxar.post.page_size'));

        (new PostRepository($posts))->handleList();

        return api_response()->ok($posts);
    }

    public function store(PostRequest $request)
    {
        auth()->user()->posts()->create($request->only('title', 'content'));

        return api_response()->createdOrUpdated();
    }

    public function show(Post $post)
    {
        return api_response()->ok($post->load('user', 'comments.user')->loadCount('likes', 'comments')
            ->makeHidden('content_limit'));
    }
}
