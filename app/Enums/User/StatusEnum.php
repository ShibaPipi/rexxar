<?php
/**
 *
 * User: sun.yaopeng
 * Date: 2020/6/24
 */

namespace App\Enums\User;

use App\Enums\Enum;

class StatusEnum implements Enum
{
    const DISABLED = 0;
    const ENABLED = 1;

    /**
     * @param $value
     * @return string
     */
    public static function get(string $value): string
    {
        switch ($value) {
            case self::DISABLED:
                return '封禁';
            case self::ENABLED:
                return '正常';
            default:
                return '未知';
        }
    }
}
