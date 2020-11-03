<?php

namespace App\Models;

use App\Enums\User\StatusEnum;
use DateTimeInterface;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Follower[] $followers
 * @property-read int|null $followers_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Notice[] $notices
 * @property-read int|null $notices_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Post[] $posts
 * @property-read int|null $posts_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Follower[] $stars
 * @property-read int|null $stars_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\User onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\User withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\User withoutTrashed()
 * @mixin \Eloquent
 * @property \Illuminate\Support\Carbon|null $last_login_at 用户上次登录时间
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User whereLastLoginAt($value)
 * @property int $status 用户状态
 * @property-read string $status_name
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\User whereStatus($value)
 */
class User extends Authenticatable implements JWTSubject
{
    use Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'last_login_at'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['last_login_at'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'email_verified_at',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * 追加到模型数组表单的访问器。
     *
     * @var array
     */
    protected $appends = ['status_name', 'avatar_src'];

    /*
     * 将密码进行加密
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    /**
     * 获取用户的头像
     *
     * @return string
     */
    public function getAvatarSrcAttribute()
    {
        return $this->attributes['avatar'] ? asset($this->attributes['avatar']) : '';
    }

    /**
     * 获取用户的自我介绍
     *
     * @return string
     */
    public function getIntroductionAttribute()
    {
        return $this->attributes['introduction'] ?: $this->attributes['name'] . '很懒，什么都没有写，所以我给他写了点没用的。。。';
    }

    /**
     * 获取用户的状态
     *
     * @return string
     */
    public function getStatusNameAttribute()
    {
        return is_numeric($this->status) ? __(StatusEnum::get($this->status)) : '';
    }

    /**
     * 格式化上次登录时间
     */
    public function getLastLoginAtAttribute($value)
    {
        return $value ? now()->parse($value)->diffForHumans() : '-';
    }

    /**
     * 为数组 / JSON 序列化准备日期。
     *
     * @param DateTimeInterface $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format($this->dateFormat ?: 'Y-m-d H:i:s');
    }

    // 文章列表
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    /*
     * 关注我的人（粉丝）
     */
    public function followers()
    {
        return $this->belongsToMany(self::class, 'followers', 'star_id', 'follower_id');
    }

    /*
     * 我关注的人
     */
    public function stars()
    {
        return $this->belongsToMany(self::class, 'followers', 'follower_id', 'star_id');
    }

    /**
     * 关注某人
     *
     * @param $userId
     * @return mixed
     */
    public function follow($userId)
    {
        $follower = new Follower();
        $follower->star_id = $userId;

        return $this->stars()->save($follower);
    }

    /**
     * 取消关注
     *
     * @param $userId
     * @return mixed
     */
    public function cancelFollow($userId)
    {
        $follower = new Follower();
        $follower->star_id = $userId;

        return $this->stars()->delete($follower);
    }

    /*
     * 当前这个人是否被uid粉了
     */
    public function hasFollower($userId)
    {
        return $this->followers()->where('follower_id', $userId)->count();
    }

    /*
     * 当前这个人是否关注uid了
     */
    public function hasStar($userId)
    {
        return $this->stars()->where('star_id', $userId)->count();
    }

    /*
     * 我收到的通知
     */
    public function notices()
    {
        return $this->belongsToMany(Notice::class, 'user_notice', 'user_id', 'notice_id');
    }

    /*
     * 增加通知
     */
    public function addNotice($notice)
    {
        return $this->notices()->save($notice);
    }

    /*
     * 减少通知
     */
    public function deleteNotice($notice)
    {
        return $this->notices()->detach($notice);
    }

    public function info()
    {
        return $this->loadCount('posts', 'followers', 'stars')
            ->load(['posts' => function ($query) {
                $query->list()->limit(10);
            }])
            ->load(['followers' => function ($query) {
                $query->withCount('posts', 'followers', 'stars');
            }])
            ->load(['stars' => function ($query) {
                $query->withCount('posts', 'followers', 'stars');
            }]);
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
