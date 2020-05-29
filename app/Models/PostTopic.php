<?php

namespace App\Models;

/**
 * App\Models\PostTopic
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\PostTopic inTopic($topic_id)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\PostTopic newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\PostTopic newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\PostTopic query()
 * @mixin \Eloquent
 */
class PostTopic extends Model
{
    public function scopeInTopic($query, $topic_id)
    {
        return $query->where('topic_id', $topic_id);
    }
}
