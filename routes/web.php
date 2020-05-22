<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::namespace('Onstage')->group(function () {
    Route::get('/', 'IndexController@index')->name('index');

    /**
     *  登录模块
     */
    Route::prefix('register')->name('register.')->group(function () {
        // 注册页面
        Route::get('', 'RegisterController@index')->name('index');
        // 注册行为
        Route::post('', 'RegisterController@register')->name('register');
    });

    Route::prefix('login')->name('login.')->group(function () {
        // 登录页面
        Route::get('', 'LoginController@index')->name('index');
        // 登录行为
        Route::post('', 'LoginController@login')->name('login');
    });

    // 登出行为
    Route::get('/logout', 'LoginController@logout')->name('logout');

    /**
     * 文章模块
     */
    Route::prefix('posts')->name('posts.')->group(function () {
        // 列表
        Route::get('', 'PostController@index')->name('index');
        // 详情
        Route::get('{post}', 'PostController@show')->where('post', '[0-9]+')->name('show');
    });

    // 专题展示
    Route::get('/topic/{topic}', 'TopicController@show');

    Route::group(['middleware' => 'auth:web'], function () {
        Route::prefix('posts')->name('posts.')->group(function () {
            // 创建
            Route::get('create', 'PostController@create')->name('create');
            Route::post('', 'PostController@store')->name('store');
            // 编辑
            Route::get('{post}/edit', 'PostController@edit')->name('edit');
            Route::put('{post}', 'PostController@update')->name('update');
            // 删除
            Route::get('{post}/delete', 'PostController@delete')->name('delete');
            // 上传图片
            Route::post('img/upload', 'PostController@imageUpload')->name('imageUpload');
            // 提交评论
            Route::post('{post}/comment', 'PostController@comment')->name('comment');
            // 赞
            Route::get('{post}/zan', 'PostController@zan')->name('zan');
            Route::get('{post}/unzan', 'PostController@unzan')->name('unzan');
            // 搜索
            Route::get('search', 'PostController@search')->name('search');
        });

        /**
         * 用户
         */
        Route::prefix('users/{user}')->name('users.')->group(function () {
            // 个人主页
            Route::get('', 'UserController@show')->name('show');
            Route::post('fan', 'UserController@fan')->name('fan');
            Route::post('unfan', 'UserController@unfan')->name('unfan');
            // 个人设置
            Route::get('setting', 'UserController@setting')->name('setting');
            Route::post('setting', 'UserController@settingStore')->name('settingStore');

        });

        // 专题
        Route::get('/topics/{topic}/submit', 'TopicController@submit')->name('topics.submit');

        // 通知
        Route::get('/notices', 'NoticeController@index')->name('notices.index');
    });
});

include_once 'web_admin.php';
