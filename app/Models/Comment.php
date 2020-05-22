<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes;

    //  评论所属文章
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    //  评论所属用户
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
