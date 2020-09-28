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

    // mock 数据
    Route::prefix('vue-element-admin')->group(function () {
        Route::get('transaction/list', function () {
            return api_response()->success(json_decode('{"total":20,"items":[{"order_no":"CD7dfEA9-cF7E-F72B-8EC2-44f5c6c99f4d","timestamp":22946233883,"username":"Laura Walker","price":4833,"status":"pending"},{"order_no":"BC445bBD-381A-e3A0-a41C-68f89193F464","timestamp":22946233883,"username":"Nancy Anderson","price":11700,"status":"success"},{"order_no":"6f6656Bd-235B-692c-CBcd-96dAE3D9b44e","timestamp":22946233883,"username":"Patricia Jackson","price":12216.14,"status":"success"},{"order_no":"867AafFF-eAEc-A120-f0C2-d8D7d34FBc4e","timestamp":22946233883,"username":"Christopher Johnson","price":9557,"status":"success"},{"order_no":"737Ad597-bdd1-c4bB-f2b1-A3AE623ee34f","timestamp":22946233883,"username":"James Clark","price":1990,"status":"success"},{"order_no":"673c7Bd0-E9B2-e121-65ca-f4ab90FBDCdb","timestamp":22946233883,"username":"Laura Hernandez","price":5558.6,"status":"success"},{"order_no":"11DC7C85-A5C5-A8D1-cAFf-2Be879B7aBDE","timestamp":22946233883,"username":"Joseph Hernandez","price":6841,"status":"success"},{"order_no":"d233DbEC-b2B6-29d3-8370-FFbd9BDe2CAA","timestamp":22946233883,"username":"Maria Perez","price":11721.6,"status":"success"},{"order_no":"8347FDb2-F5f4-91C8-D15B-cf84A5eD1c04","timestamp":22946233883,"username":"Anthony Jones","price":11589.07,"status":"success"},{"order_no":"70Abcb1f-e9E8-3bd6-eD3d-EEe3C27AebCc","timestamp":22946233883,"username":"George Young","price":8895,"status":"success"},{"order_no":"23Cfc8e1-1D84-ABE9-C26b-25fffaC394f6","timestamp":22946233883,"username":"Brenda Robinson","price":12068.4,"status":"success"},{"order_no":"D3EAb4E8-c26d-D416-ddEF-27Ccb93dB491","timestamp":22946233883,"username":"Matthew Martin","price":8224,"status":"pending"},{"order_no":"ecaAF20A-Ff5f-bbe1-1A6c-6afEcFd57Bb4","timestamp":22946233883,"username":"Donna Walker","price":1653.8,"status":"pending"},{"order_no":"c9b7d2c2-D1BF-ec4D-AeEf-cC7Bdd723b3C","timestamp":22946233883,"username":"Kimberly Hall","price":8178.59,"status":"pending"},{"order_no":"c5Bd2E8C-7a68-946C-caC0-ABECC1066EaF","timestamp":22946233883,"username":"Joseph Wilson","price":7626.3,"status":"pending"},{"order_no":"e02Ea348-eAfd-Be9f-c8fc-65C9C4D2faa2","timestamp":22946233883,"username":"Donna Anderson","price":5401.2,"status":"pending"},{"order_no":"83f9E9D2-3906-AEa9-AfbB-CaeeDD6AAFdc","timestamp":22946233883,"username":"Jose Smith","price":13584.32,"status":"pending"},{"order_no":"9E631c8b-34e4-5B4D-5ef1-5e7e2eF5c758","timestamp":22946233883,"username":"Kimberly Hernandez","price":2645.4,"status":"success"},{"order_no":"21ABd7f7-C712-A259-C1Cf-8Fd2fAeA4cce","timestamp":22946233883,"username":"Betty Walker","price":11830,"status":"pending"},{"order_no":"8BB9BDb9-cB7E-69Cf-66D0-aADf62C57Fc1","timestamp":22946233883,"username":"Deborah Anderson","price":3592.2,"status":"success"}]}', true));
        });
        Route::get('article/list', function () {
            return api_response()->success(json_decode('{"total":100,"items":[{"id":1,"timestamp":318943719576,"author":"Matthew","reviewer":"Christopher","title":"Cdhjilsen Iootdfcor Dkpdvdg Zjlck Usheoqvdvp Ooy Scuh Dciyjh","content_short":"mock data","content":"<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":26.82,"importance":3,"type":"JP","status":"draft","display_time":"1982-11-20 16:38:02","comment_disabled":true,"pageviews":707,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},{"id":2,"timestamp":948599355028,"author":"Jose","reviewer":"Anthony","title":"Ygdjsu Gcqx Zmqwnb Wbgyfamm Didlif Xixnruiytr","content_short":"mock data","content":"<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":95.97,"importance":2,"type":"US","status":"draft","display_time":"1995-08-15 06:50:48","comment_disabled":true,"pageviews":4600,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},{"id":3,"timestamp":1040803979122,"author":"Jason","reviewer":"Jason","title":"Xtsczhswo Mjwhirb Ogyembejs Pjlkeayhl Lbnpkf Mtmi Gtofpe Gbyzm Fuus Pngyqqvkh","content_short":"mock data","content":"<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":78.83,"importance":3,"type":"US","status":"draft","display_time":"2015-11-13 23:59:05","comment_disabled":true,"pageviews":1710,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},{"id":4,"timestamp":996398814563,"author":"John","reviewer":"Patricia","title":"Wwcpn Avoqvkp Irxh Zhmpvbtu Cxffnrfk Wetmb","content_short":"mock data","content":"<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":14.31,"importance":1,"type":"JP","status":"draft","display_time":"1994-04-14 15:26:40","comment_disabled":true,"pageviews":1628,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},{"id":5,"timestamp":361516003288,"author":"Mary","reviewer":"Joseph","title":"Ulqaarn Pktpr Hxodfd Hlyef Ykqoxzmr Oxaqwozxt Dpotrqgw","content_short":"mock data","content":"<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":52.16,"importance":2,"type":"JP","status":"draft","display_time":"1995-12-02 11:19:56","comment_disabled":true,"pageviews":2997,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},{"id":6,"timestamp":37396253439,"author":"Edward","reviewer":"Jessica","title":"Ggsyajyl Urjnirrla Uiepcpp Qnlz Nmpsi Cyy","content_short":"mock data","content":"<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":92.66,"importance":2,"type":"JP","status":"published","display_time":"2005-05-18 10:51:53","comment_disabled":true,"pageviews":4764,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},{"id":7,"timestamp":105403255473,"author":"Barbara","reviewer":"Amy","title":"Onlfsu Uofln Oeahb Fkmsn Yzbjjv Xkshgvll","content_short":"mock data","content":"<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":6.63,"importance":1,"type":"CN","status":"draft","display_time":"1974-07-18 18:03:33","comment_disabled":true,"pageviews":1588,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},{"id":8,"timestamp":1447217869446,"author":"Eric","reviewer":"Christopher","title":"Jjlkseboi Uulgwq Goovswfn Fhrcpheboo Kknxygjxt","content_short":"mock data","content":"<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":10.62,"importance":2,"type":"JP","status":"published","display_time":"2019-08-31 03:22:04","comment_disabled":true,"pageviews":1775,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},{"id":9,"timestamp":686747725910,"author":"George","reviewer":"Maria","title":"Yluhtfbl Ggxpdwguy Ywywit Xhsw Axnmxblm Bmwvnk Ettheeew","content_short":"mock data","content":"<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":45.72,"importance":2,"type":"JP","status":"published","display_time":"2016-05-22 01:56:32","comment_disabled":true,"pageviews":3619,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},{"id":10,"timestamp":865018893389,"author":"Daniel","reviewer":"Nancy","title":"Hxjhqf Imiwq Dwm Mwj Nbkoy","content_short":"mock data","content":"<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":78.42,"importance":3,"type":"US","status":"published","display_time":"2007-08-17 22:52:24","comment_disabled":true,"pageviews":510,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]}]}', true));
        });
    });

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
