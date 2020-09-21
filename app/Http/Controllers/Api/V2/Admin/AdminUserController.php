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
        $user = '{"roles":["admin"],"introduction":"I am a super administrator","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif","name":"Super Admin"}';
        return api_response()->success(json_decode($user));
//        return api_response()->success(auth()->user());
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
