<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

class Topic extends Model
{
    use SoftDeletes;

    /**
     * 获取专题的所有文章
     *
     * @return mixed
     */
    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_topics', 'topic_id', 'post_id');
    }

    // 专题的文章数，用于withcount
    public function postTopics()
    {
        return $this->hasMany(PostTopic::class, 'topic_id');
    }
}
