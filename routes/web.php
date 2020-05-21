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

    Route::name('login.')->group(function () {
        // 登录页面
        Route::get('/login', 'LoginController@index')->name('index');
        // 登录行为
        Route::post('/login', 'LoginController@login')->name('login');
    });

// 登出行为
    Route::get('/logout', 'LoginController@logout')->name('logout');

    /**
     * 文章模块
     */
//  列表
    Route::get('/posts', 'PostController@index');
//  详情
    Route::get('/posts/{post}', 'PostController@show')->where('post', '[0-9]+')->name('show');

// 专题展示
    Route::get('/topic/{topic}', 'TopicController@show');

    Route::group(['middleware' => 'auth:web'], function() {

        //  创建
        Route::get('/posts/create', 'PostController@create');
        Route::post('/posts', 'PostController@store');

        //  编辑
        Route::get('/posts/{post}/edit', 'PostController@edit');
        Route::put('/posts/{post}', 'PostController@update');

        //  删除
        Route::get('/posts/{post}/delete', 'PostController@delete');

        //  上传图片
        Route::post('/posts/img/upload', 'PostController@imageUpload');

        //  提交评论
        Route::post('/posts/{post}/comment', 'PostController@comment');

        //  赞
        Route::get('/posts/{post}/zan', 'PostController@zan');
        Route::get('/posts/{post}/unzan', 'PostController@unzan');

        // 搜索
        Route::get('/posts/search', 'PostController@search');

        // 个人主页
        Route::get('/user/{user}', 'UserController@show');
        Route::post('/user/{user}/fan', 'UserController@fan');
        Route::post('/user/{user}/unfan', 'UserController@unfan');

        // 个人设置
        Route::get('/user/{user}/setting', 'UserController@setting');
        Route::post('/user/{user}/setting', 'UserController@settingStore');

        // 专题
        Route::get('/topic/{topic}/submit', 'TopicController@submit');

        // 通知
        Route::get('/notices', 'NoticeController@index');
    });
});

include_once 'web_admin.php';
