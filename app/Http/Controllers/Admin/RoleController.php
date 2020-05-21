<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminPermission;
use App\Models\AdminRole;

class RoleController extends Controller
{
    // 角色列表
    public function index()
    {
        $roles = AdminRole::query()->paginate(10);

        return view('admin.role.index', compact('roles'));
    }

    // 角色创建
    public function create()
    {
        return view('admin.role.add');
    }

    // 角色创建行为
    public function store()
    {
        $this->validate(request(), [
            'name' => 'required|min:3',
            'description' => 'required',
        ]);

        AdminRole::query()->create(request(['name', 'description']));

        return redirect('/admin/roles');
    }

    // 角色权限关系页面
    public function permission(AdminRole $role)
    {
        // 获取所有权限
        $permissions = AdminPermission::all();

        // 获取当前角色的权限
        $myPermissions = $role->permissions;

        return view('admin.role.permission', compact('permissions', 'myPermissions', 'role'));
    }

    // 角色权限储存行为
    public function storePermission(AdminRole $role)
    {
        $this->validate(request(), [
            'permissions' => 'required|array'
        ]);

        $permissions = AdminPermission::query()->findMany(request('permissions'));
        $myPermissions = $role->permissions;

        // 对已经有的权限
        $addPermissions = $permissions->diff($myPermissions);
        foreach ($addPermissions as $permission) {
            $role->grantPermission($permission);
        }

        $deletePermissions = $myPermissions->diff($permissions);
        foreach ($deletePermissions as $permission) {
            $role->deletePermission($permission);
        }

        return back();
    }
}
