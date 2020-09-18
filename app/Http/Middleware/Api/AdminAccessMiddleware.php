<?php

namespace App\Http\Middleware\Api;

use App\Events\AdminAccess;
use Closure;

class AdminAccessMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        event(new AdminAccess($request));

        return $next($request);
    }
}
