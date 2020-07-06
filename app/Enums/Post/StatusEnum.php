<?php
/**
 *
 * User: sun.yaopeng
 * Date: 2020/6/24
 */

namespace App\Enums\Post;

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
                return '待审核';
            case self::ENABLED:
                return '已通过';
            default:
                return '未知';
        }
    }
}
