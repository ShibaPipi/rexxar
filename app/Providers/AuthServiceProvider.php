<?php

namespace App\Providers;

use App\Models\AdminPermission;
use App\Models\AdminUser;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
        'App\Post' => 'App\Policies\PostPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        if (!app()->runningInConsole()) {
            /**
             * 权限注册
             */
            $permissions = AdminPermission::all();

            foreach ($permissions as $permission) {
                Gate::define($permission->name, function (AdminUser $user) use ($permission) {
                    return $user->hasPermission($permission);
                });
            }
        }
    }
}
