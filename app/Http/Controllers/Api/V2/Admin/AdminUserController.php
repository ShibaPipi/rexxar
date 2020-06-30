<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminUserController extends Controller
{
    public function index()
    {
        return api()->success(AdminUser::paginate());
    }

    public function info()
    {
        return api()->success(auth()->user());
    }

    public function login(Request $request)
    {
        $currentGuard = Auth::getDefaultDriver();

        if ($token = Auth::claims(['guard' => $currentGuard])->attempt(['name' => $request->name, 'password' => $request->password])) {
            return api()->setStatusCode(201)->success([
                'token' => 'bearer ' . $token
            ]);
        }

        return api()->failed('账号密码错误', 400);
    }

    public function logout()
    {
        auth()->logout();

        return api()->success('退出成功。。。');
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

        return api()->success($sidebar);
    }
}
