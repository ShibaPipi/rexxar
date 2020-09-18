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

    Route::post('login', 'AdminUserController@login')->name('login');

    Route::middleware(['admin_history', 'api.refresh:api_admin'])->group(function () {
        Route::get('logout', 'AdminUserController@logout')->name('logout');

        Route::prefix('admin_users')->name('admin_users.')->group(function () {
            Route::get('info', 'AdminUserController@info')->name('info');
            Route::middleware('can:admin_users')->get('permissions', 'AdminUserController@permissions')->name('permissions');
        });

        Route::middleware('can:admin_users')->group(function () {
            Route::apiResource('admin_users', 'AdminUserController')
                ->only(['index', 'store']);
            Route::apiResource('admin_users.admin_roles', 'AdminUserRoleController')
                ->only(['index', 'store']);
        });

        Route::middleware('can:admin_roles')->group(function () {
            Route::apiResource('admin_roles', 'AdminRoleController')
                ->only(['index', 'store']);
            Route::apiResource('admin_roles.admin_permissions', 'AdminRolePermissionController')
                ->only(['index', 'store']);
        });

        Route::middleware('can:admin_permissions')->apiResource('admin_permissions', 'AdminPermissionController')
            ->only(['index', 'store']);

        Route::middleware('can:admin_history')->apiResource('admin_history', 'AdminHistoryController')
            ->only('index');

        Route::middleware('can:users')->apiResource('users', 'UserController')
            ->only('index');

        Route::middleware('can:posts')->apiResource('posts', 'PostController')
            ->only(['index', 'update']);

        Route::middleware('can:topics')->apiResource('topics', 'TopicController')
            ->only(['index', 'store', 'destroy']);

        Route::middleware('can:notices')->apiResource('notices', 'NoticeController')
            ->only(['index', 'store']);
    });
});
