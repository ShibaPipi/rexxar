<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model as BaseModel;

/**
 * App\Models\Model
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Model newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Model newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Model query()
 * @mixin \Eloquent
 */
class Model extends BaseModel
{
    /**
     * @var array 不可以注入的字段
     */
    protected $guarded = [];

    /**
     * 为数组 / JSON 序列化准备日期。
     *
     * @param DateTimeInterface $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format($this->dateFormat ?: 'Y-m-d H:i:s');
    }
}
