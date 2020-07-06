<?php
/**
 * 枚举接口类
 *
 * User: sun.yaopeng
 * Date: 2020-6-10
 */

namespace App\Enums;

interface Enum
{
    /**
     * 获取枚举值
     *
     * @param $value
     * @return string
     */
    public static function get(string $value): string;
}