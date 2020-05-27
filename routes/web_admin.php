<?php

// 管理后台
use Illuminate\Support\Facades\Route;

Route::namespace('Admin')->prefix('admin')->name('admin.')->group(function () {
    Route::get('aaa', 'IndexController@index');

    Route::prefix('login')->name('login.')->group(function () {
        Route::get('', 'LoginController@showLoginForm')->name('index');
        Route::post('', 'LoginController@login')->name('login');
    });

    Route::get('/logout', 'LoginController@logout')->name('logout');

    Route::middleware(['auth.admin:admin', 'auth:admin'])->group(function () {
        Route::redirect('/', '/admin/home');
        Route::get('/home', 'HomeController@index')->name('home');

        Route::middleware('can:system')->group(function () {
            /**
             * 用户管理
             */
            Route::prefix('users')->name('users.')->group(function () {
                Route::get('', 'UserController@index')->name('index');
                Route::get('create', 'UserController@create')->name('create');
                Route::post('store', 'UserController@store')->name('store');

                Route::prefix('{user}/roles')->name('roles.')->group(function () {
                    Route::get('', 'UserController@role')->name('index');
                    Route::post('', 'UserController@storeRole')->name('store');
                });
            });

            /**
             * 角色管理
             */
            Route::prefix('/roles')->name('roles.')->group(function () {
                Route::get('', 'RoleController@index')->name('index');
                Route::get('create', 'RoleController@create')->name('create');
                Route::post('store', 'RoleController@store')->name('store');

                Route::prefix('{role}/permission')->name('permissions.')->group(function () {
                    Route::get('', 'RoleController@permission')->name('index');
                    Route::post('', 'RoleController@storePermission')->name('store');
                });
            });

            /**
             * 权限管理
             */
            Route::resource('permissions', 'PermissionController', [
                'only' => ['index', 'create', 'store'],
            ]);
        });

        Route::middleware('can:post')->group(function () {
            // 文章审核模块
            Route::prefix('posts')->name('posts.')->group(function () {
                Route::get('', 'PostController@index')->name('index');
                Route::post('{post}/status', 'PostController@status')->name('status');
            });
        });

        // 专题模块
        Route::middleware('can:topic')->group(function () {
            Route::resource('topics', 'TopicController', [
                'only' => ['index', 'create', 'store', 'destroy']
            ]);
        });

        // 通知模块
        Route::middleware('can:notice')->group(function () {
            Route::resource('notices', 'NoticeController', [
                'only' => ['index', 'create', 'store']
            ]);
        });
    });
});
