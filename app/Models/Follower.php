<?php

namespace App\Models;

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
