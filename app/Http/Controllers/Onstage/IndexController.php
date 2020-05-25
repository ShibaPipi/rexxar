<?php
/**
 * Created by PhpStorm.
 * User: sunyaopeng
 * Date: 2018/7/30
 * Time: 17:52
 */

namespace App\Http\Controllers\Onstage;

use App\Http\Controllers\Controller;
use App\Models\Post;

class IndexController extends Controller
{
    public function index()
    {
        $posts = Post::query()
            ->withCount(['comments', 'likes'])
            ->latest()
            ->limit(3)
            ->get();

        return view('onstage.index.index', compact('posts'));
    }
}
