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
        return $this->belongsToMany(Post::class);
    }
}
