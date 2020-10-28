<?php

namespace App\Http\Controllers\Api\V2\Onstage;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Topic;
use App\Repositories\PostRepository;

class IndexController extends Controller
{
    public function index()
    {
        $banners = [
            'http://www.shibapipi.com/images/44287191gw1excbq6tb3rj21400migrz.jpg',
            'http://www.shibapipi.com/images/44287191gw1excbq5iwm6j21400min3o.jpg',
            'http://www.shibapipi.com/images/44287191gw1excbq4kx57j21400migs4.jpg'
        ];
        $posts = Post::list()->with('topics')->limit(config('rexxar.index.post_num'))->get()->makeHidden('content');
        (new PostRepository($posts))->handleList();

        $topics = Topic::query()->get(['id', 'name']);

        $founderPosts = Post::query()
            ->where('user_id', config('rexxar.founder_id'))
            ->with('topics')
            ->latest()
            ->limit(config('rexxar.index.founder_post_num'))
            ->get(['id', 'title', 'created_at']);
        $founderPostResp = new PostRepository($founderPosts);
        $founderPostResp->topicName();

        $aphorism = [
            'Stay hungry, stay foolish.',
            'You have to believe in yourself. That\'s the secret of success.',
            'Talk is cheap, show me the code.'];

        $keyword = ['Design', 'Fashion', 'Graphic', 'News',
            'Personal', 'Branding', 'Lifestyle', 'Travel'];

        return api_response()->success(compact(
            'banners', 'posts', 'topics', 'founderPosts', 'aphorism', 'keyword'));
    }
}
