<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Events\AdminLogin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Admin\AdminUserRequest;
use App\Models\AdminUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminUserController extends Controller
{
    public function index()
    {
        return api_response()->success(AdminUser::paginate());
    }

    public function store(AdminUserRequest $request)
    {
        AdminUser::create($request->only('name', 'password'));

        return api_response()->createdOrUpdated();
    }

    public function info()
    {
        $roles = auth()->user()->roles->pluck('name')->toArray();

        return api_response()->success(array_merge(auth()->user()->toArray(), compact('roles')));
    }

    public function login(Request $request)
    {
        $currentGuard = Auth::getDefaultDriver();

        if ($token = Auth::claims(['guard' => $currentGuard])->attempt(['name' => $request->name, 'password' => $request->password])) {
            event(new AdminLogin(auth()->user()));
            return api_response()->setStatusCode(201)->success([
                'token' => 'bearer ' . $token
            ]);
        }

        return api_response()->failed('账号密码错误', 400);
    }

    public function logout()
    {
        auth()->logout();

        return api_response()->success('退出成功。。。');
    }

    public function permissions()
    {
        $adminPermissions = auth()
            ->user()
            ->load('roles.permissions')
            ->roles
            ->pluck('permissions')
            ->collapse()
            ->pluck('name')
            ->toArray();

        $sidebar = config('rexxar.sidebar');
        foreach ($sidebar as $key => $menu) {
            if ($menu['children']) {
                foreach ($menu['children'] as $subKey => $submenu) {
                    if (!in_array($submenu['index'], $adminPermissions)) {
                        $sidebar[$key]['children'][$subKey]['disabled'] = true;
                    }
                }
            } elseif (!in_array($menu['index'], $adminPermissions)) {
                $sidebar[$key]['disabled'] = true;
            }
        }

        return api_response()->success($sidebar);
    }
}
