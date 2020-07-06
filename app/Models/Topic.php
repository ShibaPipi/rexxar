<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\Topic
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Post[] $posts
 * @property-read int|null $posts_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Topic newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Topic newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Topic onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Topic query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Topic whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Topic whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Topic whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Topic whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Topic whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Topic withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Topic withoutTrashed()
 * @mixin \Eloquent
 */
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
