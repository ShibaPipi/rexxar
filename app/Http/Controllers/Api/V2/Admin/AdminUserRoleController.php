<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminRole;
use App\Models\AdminUser;
use Illuminate\Http\Request;

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

        return api()->success(compact('roles', 'userRoles'));
    }

    public function store(AdminUser $adminUser)
    {

    }
}
