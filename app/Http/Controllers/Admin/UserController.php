<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminRole;
use App\Models\AdminUser;

class UserController extends Controller
{
    // 管理员列表页面
    public function index()
    {
        $users = AdminUser::query()->paginate(10);

        return view('admin.user.index', compact('users'));
    }

    // 管理员创建页面
    public function create()
    {
        return view('admin.user.create');
    }

    // 创建操作
    public function store()
    {
        $this->validate(request(), [
            'name' => 'required|min:3',
            'password' => 'required',
        ]);

        AdminUser::query()->create(request(['name', 'password']));

        return redirect()->route('admin.users.index');
    }

    // 用户角色页面
    public function role(AdminUser $user)
    {
        $roles = AdminRole::all();
        $myRoles = $user->roles;
        return view('admin/user/role', compact('roles', 'myRoles', 'user'));
    }

    // 储存用户角色
    public function storeRole(AdminUser $user)
    {
        $this->validate(request(),[
            'roles' => 'required|array'
        ]);

        $roles = AdminRole::query()->findMany(request('roles'));
        $myRoles = $user->roles;

        // 对已经有的权限
        // 要增加的
        $addRoles = $roles->diff($myRoles);
        foreach ($addRoles as $role) {
            $user->assignRole($role);
        }

        // 要删除的
        $deleteRoles = $myRoles->diff($roles);
        foreach ($deleteRoles as $role) {
            $user->deleteRole($role);
        }

        return back();
    }
}
