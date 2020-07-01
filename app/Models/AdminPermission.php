<?php

namespace App\Models;

/**
 * App\Models\AdminPermission
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\AdminRole[] $roles
 * @property-read int|null $roles_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminPermission newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminPermission newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminPermission query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminPermission whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminPermission whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminPermission whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminPermission whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminPermission whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class AdminPermission extends Model
{
    /*
     * 权限属于哪些角色
     */
    public function roles()
    {
        return $this->belongsToMany(
            AdminRole::class,
            'admin_permission_role',
            'permission_id',
            'role_id'
        )->withPivot(['permission_id', 'role_id']);
    }

}
