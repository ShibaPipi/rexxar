<?php
/**
 * Repositories
 * User: sun.yaopeng
 * Date: 2020/10/16
 */

namespace App\Repositories;

use Illuminate\Support\Str;

class PostRepository
{
    public $posts;

    public function __construct($posts)
    {
        $this->posts = $posts;
    }

    /**
     * 将文章多余的文字用...进行省略，并且将文章的发布时间转换为更可读时间
     */
    public function handleList()
    {
        $this->topicName();
    }

    /**
     * 将文章多余的文字用...进行省略
     * @return mixed
     */
    public function limitContent()
    {
        return $this->posts->each(function ($post) {
            $post->content = Str::limit($post->content, config('rexxar.post.content_limit'), '...');
        });
    }

    /**
     * 将文章的发布时间转换为更可读时间
     * @return mixed
     */
    public function handlePublishedAt()
    {
        return $this->posts->each(function ($post) {
            $post->published_at = $post->created_at->diffForHumans();
        });
    }

    /**
     * 未收录到任何专题的文章赋予默认值
     * @return mixed
     */
    public function topicName()
    {
        return $this->posts->each(function ($post) {
            $post->topics->isEmpty() && $post->topics->push([
                'topic_id' => 0,
                'name' => '未收录'
            ]);
        });
    }
}
