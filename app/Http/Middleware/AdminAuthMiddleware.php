<?php

namespace App\Http\Middleware;

use Closure;

class AdminAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (auth()->guard($guard)->guest()) {
            return $request->ajax() || $request->wantsJson()
                ? response('Unauthorized.', 401)
                : redirect()->route('admin.login.index');
        }

        return $next($request);
    }
}
