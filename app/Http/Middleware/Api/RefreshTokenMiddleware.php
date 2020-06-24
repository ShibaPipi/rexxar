<?php

namespace App\Http\Middleware\Api;

use Closure;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class RefreshTokenMiddleware extends BaseMiddleware
{
    /**
     * 检查此次请求中是否带有 token，如果没有则抛出异常。
     * 捕捉 token 过期所抛出的 TokenExpiredException 异常
     * 检测用户的登录状态，如果正常则通过
     * 如果捕获到了 token 过期所抛出的 TokenExpiredException 异常，我们在这里需要做的是刷新该用户的 token 并将它添加到响应头中
     * 如果捕获到 JWTException 异常，即代表 refresh 也过期了，用户无法刷新令牌，需要重新登录。
     * 在响应头中返回新的 token
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     *
     * @throws JWTException
     */
    public function handle($request, Closure $next, $guard = 'api')
    {
        $this->checkForToken($request);
        $currentGuard = Auth::getDefaultDriver();
        $payload = Auth::manager()->getJWTProvider()->decode(Auth::getToken()->get());

        if (empty($payload['guard']) || $payload['guard'] != $currentGuard) {
            throw new TokenInvalidException();
        }

        try {
            if ($this->auth->parseToken()->authenticate()) {
                return $next($request);
            }

            throw new UnauthorizedHttpException('jwt-auth', '未登录');
        } catch (TokenExpiredException $exception) {
            try {
                $token = $this->auth->refresh();
                // 使用一次性登录以保证此次请求的成功
                auth($guard)->onceUsingId($this->auth->manager()->getPayloadFactory()->buildClaimsCollection()->toPlainArray()['sub']);
            } catch (JWTException $exception) {
                throw new UnauthorizedHttpException('jwt-auth', $exception->getMessage());
            }
        }

        return $this->setAuthenticationHeader($next($request), $token);
    }
}
