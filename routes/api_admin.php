<?php
/**
 *
 * User: sun.yaopeng
 * Date: 2020/6/23
 */

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

Route::namespace('Api\V2\Admin')->prefix('v2/admin')->middleware('api_admin.guard')->group(function () {
    Route::get('/users', 'UserController@index')->name('users.index');

    Route::post('login', 'AdminUserController@login')->name('login');

    Route::middleware('api.refresh:api_admin')->group(function () {
        Route::get('logout', 'AdminUserController@logout')->name('logout');

        Route::prefix('admin_users')->name('admin_users.')->group(function () {
            Route::get('', 'AdminUserController@index')->name('index');
            Route::get('info', 'AdminUserController@info')->name('info');
        });

        Route::prefix('admin_roles')->name('admin_roles.')->group(function () {
            Route::get('', 'AdminRoleController@index')->name('index');
        });

        Route::prefix('admin_permissions')->name('admin_permissions.')->group(function () {
            Route::get('', 'AdminPermissionController@index')->name('index');
            Route::get('all', 'AdminPermissionController@getAllNames')->name('all');
        });

        Route::prefix('posts')->name('posts.')->group(function () {
            Route::get('', 'PostController@index')->name('index');
        });

        Route::prefix('topics')->name('topics.')->group(function () {
            Route::get('', 'TopicController@index')->name('index');
        });

        Route::prefix('notices')->name('notices.')->group(function () {
            Route::get('', 'NoticeController@index')->name('index');
        });
    });
});
