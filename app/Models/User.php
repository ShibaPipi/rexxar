<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /*
     * 将密码进行加密
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    // 文章列表
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    /*
     * 关注我的人
     */
    public function followers()
    {
        return $this->hasMany(Follower::class, 'star_id');
    }

    /*
     * 我关注的人
     */
    public function stars()
    {
        return $this->hasMany(Follower::class, 'follower_id');
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
        return $this->belongsToMany(Notice::class, 'user_notice', 'user_id', 'notice_id')->withPivot(['user_id', 'notice_id']);
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
}
