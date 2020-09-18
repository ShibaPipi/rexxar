<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Admin\AdminUserRoleRequest;
use App\Models\AdminRole;
use App\Models\AdminUser;

class AdminUserRoleController extends Controller
{
    /**
     * 获取所有管理员用户角色和当前管理员用户角色
     *
     * @param AdminUser $adminUser
     * @return mixed
     */
    public function index(AdminUser $adminUser)
    {
        $roles = AdminRole::all();

        $userRoles = $adminUser->roles->pluck('id');

        return api_response()->success(compact('roles', 'userRoles'));
    }

    /**
     * 差分新旧角色，赋予新增的，删除去掉的
     *
     * @param AdminRole $adminRole
     * @return mixed
     */
    public function store(AdminUserRoleRequest $request, AdminUser $adminUser)
    {
        $newRoles = AdminRole::query()->findMany($request->adminUserRoleList);

        $oldRoles = $adminUser->roles;

        foreach ($newRoles->diff($oldRoles) as $role) {
            $adminUser->assignRole($role);
        }

        foreach ($oldRoles->diff($newRoles) as $role) {
            $adminUser->deleteRole($role);
        }

        return api_response()->createdOrUpdated();
    }
}
