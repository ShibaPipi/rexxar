<?php

namespace App\Http\Controllers\Onstage;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\PostTopic;
use App\Models\Topic;

class TopicController extends Controller
{
    /*
     * topic详情页
     */
    public function show(Topic $topic)
    {
        // 带文章数的专题
        $topic = Topic::query()->withCount('postTopics')->find($topic->id);

        // 专题的文章列表，按照创建时间倒序排列，前10个
        $posts = $topic->posts()->orderBy('created_at', 'desc')->take(10)->get();

        //  是与我的文章，但是为投稿
        $myposts = Post::query()->authorBy(auth()->id())->topicNotBy($topic->id)->get();

        return view('onstage.topic.show', compact('topic', 'posts', 'myposts'));
    }

    /*
     * 投稿
     */
    public function submit(Topic $topic)
    {
        $this->validate(request(),[
            'post_ids' => 'array'
        ]);

        // 确认这些post都是属于当前用户的
//        $posts = Post::find(request(['post_ids']));
//        foreach ($posts as $post) {
//            if ($post->user_id != \Auth::id()) {
//                return back()->withErrors(array('message' => '没有权限'));
//            }
//        }

        $post_ids = request('post_ids');
        $topic_id = $topic->id;

        foreach ($post_ids as $post_id){
            PostTopic::query()->firstOrCreate(compact('topic_id', 'post_id'));
        }

        return back();
    }
}
