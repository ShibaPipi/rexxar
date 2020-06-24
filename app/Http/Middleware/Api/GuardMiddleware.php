<?php

namespace App\Http\Middleware\Api;

use Closure;

class GuardMiddleware
{
    /**
     * 将默认守卫修改为 api
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        config(['auth.defaults.guard' => 'api']);

        return $next($request);
    }
}
