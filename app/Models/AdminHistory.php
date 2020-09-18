<?php

namespace App\Models;

use App\Models\Model as BaseModel;

/**
 * App\Models\AdminHistory
 *
 * @property int $id
 * @property int $admin_user_id 管理员用户id
 * @property string $ip
 * @property string $path 访问路径
 * @property string|null $query 请求的 query string
 * @property string $method Http 请求方法
 * @property string $os 请求机器的操作系统
 * @property string $browser 请求的浏览器名
 * @property string|null $referer 请求来源，若直接在浏览器输入为 null
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory whereAdminUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory whereBrowser($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory whereIp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory whereMethod($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory whereOs($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory wherePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory whereQuery($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory whereReferer($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\AdminHistory whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class AdminHistory extends BaseModel
{
    //
}
