<?php

namespace App\Models;

use App\Enums\Post\StatusEnum;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Laravel\Scout\Searchable;

/**
 * App\Models\Post
 *
 * @property int $id
 * @property string $title
 * @property string $content
 * @property int $user_id
 * @property int $status 审核状态
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Comment[] $comments
 * @property-read int|null $comments_count
 * @property-read mixed $content_limit
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Like[] $likes
 * @property-read int|null $likes_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Topic[] $topics
 * @property-read int|null $topics_count
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post authorBy($user_id)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Post onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post topicNotBy($topic_id)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Post whereUserId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Post withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Post withoutTrashed()
 * @mixin \Eloquent
 * @property-read string $status_name
 * @method static Builder|Post list()
 */
class Post extends Model
{
    //use Searchable;
    use SoftDeletes;

    /**
     * 追加到模型数组表单的访问器。
     *
     * @var array
     */
    protected $appends = ['content_limit', 'published_at'];

//    /**
//     * 获取文章的状态
//     *
//     * @return string
//     */
//    public function getStatusNameAttribute()
//    {
//        return is_numeric($this->status) ? __(StatusEnum::get($this->status)) : '';
//    }

    /**
     * 将文章的发布时间转换为更可读时间
     *
     * @return string
     */
    public function getPublishedAtAttribute()
    {
        return now()->parse($this->attributes['created_at'])->diffForHumans();
    }

    /**
     * 将文章多余的文字用...进行省略
     *
     * @return string
     */
    public function getContentLimitAttribute()
    {
        return isset($this->attributes['content']) ? Str::limit($this->attributes['content'], config('rexxar.post.content_limit'), '...') : '';
    }

    /*
     * 搜索的type
     */
    public function searchableAs()
    {
        return 'post';
    }

    //  定义有哪些字段需要被搜索
    public function toSearchableArray()
    {
        return [
            'title' => $this->title,
            'content' => $this->content,
        ];
    }

    //  关联用户
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //  评论模型
    public function comments()
    {
        return $this->hasMany(Comment::class)->latest();
    }

    //  赞和用户进行关联
    public function like($userId)
    {
        return $this->hasOne(Like::class)->where('user_id', $userId);
    }

    //  文章的所有赞
    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    // 属于某个作者的文章
    public function scopeAuthorBy(Builder $query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    public function topics()
    {
        return $this->belongsToMany(Topic::class)->select('topic_id', 'name');
    }

    // 不属于某个专题的文章
    public function scopeTopicNotBy(Builder $query, $topicId)
    {
        return $query->doesntHave('topics', 'and', function ($q) use ($topicId) {
            $q->where('topic_id', $topicId);
        });
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    public function scopeList(Builder $query)
    {
        return $query->select('id', 'user_id', 'title', 'content', 'created_at')
            ->with('user')
            ->withCount('comments', 'likes')
            ->latest();
    }

    // 全局scope的方式
    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub

        static::addGlobalScope('available', function (Builder $builder) {
        });
    }
}
