<?php

namespace App\Models;

/**
 * App\Models\AdminRole
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\AdminPermission[] $permissions
 * @property-read int|null $permissions_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminRole newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminRole newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminRole query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminRole whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminRole whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminRole whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class AdminRole extends Model
{
    /*
     * 当前角色的所有权限
     */
    public function permissions()
    {
        return $this->belongsToMany(
            AdminPermission::class,
            'admin_permission_role',
            'role_id',
            'permission_id'
        )->withPivot(['permission_id', 'role_id']);
    }

    /*
     * 给角色授权
     */
    public function grantPermission($permission)
    {
        return $this->permissions()->save($permission);
    }

    /*
     * 删除role和permission的关联
     */
    public function deletePermission($permission)
    {
        return $this->permissions()->detach($permission);
    }

    /*
     * 角色是否有权限
     */
    public function hasPermission($permission)
    {
        return $this->permissions->contains($permission);
    }
}
