<?php

namespace App\Exceptions;

use Shibapipi\Utils\ExceptionReport;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param \Throwable $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * AJAX 请求我们才捕捉异常
     * 将方法拦截到自己的 ExceptionReport
     * 声明一个需要被拦截的异常数组，拦截异常
     * 如果未开启 APP_DEBUG，则直接返回 5XX 错误
     *
     * @param \Illuminate\Http\Request $request
     * @param \Throwable $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if ($request->ajax()) {
            $reporter = ExceptionReport::make($exception);

            if ($reporter->shouldReturn()) {
                return $reporter->report();
            }

            if (!config('APP_DEBUG')) {
                return $reporter->prodReport();
            }
        }

        return parent::render($request, $exception);
    }
}
