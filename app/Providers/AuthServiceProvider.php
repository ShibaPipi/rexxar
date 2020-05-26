<?php

namespace App\Providers;

use App\Models\AdminPermission;
use App\Models\AdminUser;
use App\Models\Post;
use App\Policies\PostPolicy;
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
        Post::class => PostPolicy::class,
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
