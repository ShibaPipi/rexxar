<?php

namespace App\Providers;

use App\Models\Topic;
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
        view()->composer('onstage.layout.sidebar', function ($view) {
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
