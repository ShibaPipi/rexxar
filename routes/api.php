<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Api\V2\Onstage')
    ->prefix('v2')
    ->middleware('api.guard')
    ->group(function () {
        Route::get('index', 'IndexController@index')->name('index');
        Route::prefix('posts')->name('posts')->group(function () {
            Route::get('', 'PostController@index')->name('index');
            Route::get('{post}', 'PostController@show')->name('show');
        });
        Route::post('login', 'UserController@login')->name('login');
        Route::post('register', 'UserController@register')->name('register');

        Route::middleware('api.refresh:api')->group(function () {
            Route::get('logout', 'UserController@logout')->name('logout');

            Route::prefix('my')->name('my.')->group(function () {
                Route::get('info', 'UserController@info')->name('info');
                Route::get('notices', 'UserController@notices')->name('notices');
            });

            Route::post('posts', 'PostController@store')->name('posts.store');
        });

        Route::post('compare', 'ZYZController@compare');
    });

include_once 'api_admin.php';
