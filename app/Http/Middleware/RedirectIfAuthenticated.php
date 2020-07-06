<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @param string|null $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (auth()->guard($guard)->check()) {
            // 根据不同 guard 跳转到不同的页面
            return redirect($guard
                ? RouteServiceProvider::ADMIN_HOME
                : RouteServiceProvider::HOME
            );
        }

        return $next($request);
    }
}
