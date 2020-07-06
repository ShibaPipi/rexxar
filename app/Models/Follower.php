<?php

namespace App\Models;

/**
 * App\Models\Follower
 *
 * @property int $id
 * @property int $follower_id
 * @property int $star_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User|null $followedUser
 * @property-read \App\Models\User|null $starUser
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Follower newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Follower newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Follower query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Follower whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Follower whereFollowerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Follower whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Follower whereStarId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Follower whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Follower extends Model
{
    /*
     * 粉丝用户
     */
    public function followedUser()
    {
        return $this->hasOne(User::class, 'id', 'follower_id');
    }

    /*
     * 明星用户
     */
    public function starUser()
    {
        return $this->hasOne(User::class, 'id', 'star_id');
    }
}
