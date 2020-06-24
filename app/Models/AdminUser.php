<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use DateTimeInterface;

/**
 * App\Models\AdminUser
 *
 * @property int $id
 * @property string $name
 * @property string $password
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\AdminRole[] $roles
 * @property-read int|null $roles_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminUser newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminUser newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminUser query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminUser whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminUser whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminUser whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminUser wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminUser whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class AdminUser extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $rememberTokenName = '';

    protected $guarded = [];

    protected $hidden = [
        'password'
    ];

    /*
     * 将密码进行加密
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
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

    // 用户有哪一些角色
    public function roles()
    {
        return $this->belongsToMany(AdminRole::class, 'admin_role_user', 'user_id', 'role_id')
            ->withPivot(['user_id', 'role_id']);
    }

    // 判断是否有某个角色，某些角色
    public function isInRoles($roles)
    {
        return !!$roles->intersect($this->roles)->count();
    }

    // 给用户分配角色
    public function assignRole($role)
    {
        return $this->roles()->save($role);
    }

    // 取消给用户分配的角色
    public function deleteRole($role)
    {
        return $this->roles()->detach($role);
    }

    // 用户是否有权限
    public function hasPermission($permission)
    {
        return $this->isInRoles($permission->roles);
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
