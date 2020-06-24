<?php

namespace App\Http\Middleware\Api;

use Closure;

class AdminGuardMiddleware
{
    /**
     * 将默认守卫修改为 api_admin
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        config(['auth.defaults.guard' => 'api_admin']);

        return $next($request);
    }
}
