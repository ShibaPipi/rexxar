<?php

namespace App\Http\Controllers\Api\V2\Onstage;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Repositories\PostRepository;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::list()->paginate(
            request('perPage') ?? config('rexxar.post.page_size'));

        (new PostRepository($posts))->handleList();

        return api_response()->success($posts);
    }
}
