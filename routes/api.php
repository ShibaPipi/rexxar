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

Route::namespace('Api\V2\Onstage')->prefix('v2')->middleware('api.guard')->group(function () {
    Route::prefix('users')->middleware('api.refresh:api')->name('users.')->group(function () {
        Route::get('info', 'UserController@info')->name('info');
    });
});

include_once 'api_admin.php';
