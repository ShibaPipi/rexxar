<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminPermission;
use App\Models\AdminRole;

class AdminRolePermissionController extends Controller
{
    /**
     * 获取所有权限和当前角色的权限
     *
     * @param AdminRole $adminRole
     * @return mixed
     */
    public function index(AdminRole $adminRole)
    {
        $permissions = AdminPermission::all();

        $rolePermissions = $adminRole->permissions->pluck('id');

        return api()->success(compact('permissions', 'rolePermissions'));
    }

    /**
     * 差分新旧权限，赋予新增的，删除去掉的
     *
     * @param AdminRole $adminRole
     * @return mixed
     */
    public function store(AdminRole $adminRole)
    {
        $newPermissions = AdminPermission::query()->findMany(request('adminRolePermissionList'));

        $oldPermissions = $adminRole->permissions;

        foreach ($newPermissions->diff($oldPermissions) as $permission) {
            $adminRole->grantPermission($permission);
        }

        foreach ($oldPermissions->diff($newPermissions) as $permission) {
            $adminRole->deletePermission($permission);
        }

        return api()->createdOrUpdated();
    }
}
