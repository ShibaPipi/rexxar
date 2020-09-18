<?php

namespace App\Providers;

use App\Models\Topic;
use App\Models\User;
use Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // 激活 debugbar
        if ('production' !== $this->app->environment()) {
            $this->app->register(IdeHelperServiceProvider::class);
        }

        // 给视图合成器传递参数
        view()->composer('onstage.layouts.sidebar', function ($view) {
            $topics = Topic::all();
            $view->with('topics', $topics);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
