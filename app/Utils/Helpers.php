<?php
/**
 * 自定义助手函数
 *
 * User: sun.yaopeng
 * Date: 2020/4/27
 */

use App\Utils\ApiResponse;
use Illuminate\Support\Facades\DB;

if (!function_exists('api')) {
    /**
     * 处理 api / ajax 形式的返回结果。
     *
     * User: sun.yaopeng
     * Date: 2020/4/27
     *
     * @return ApiResponse
     */
    function api()
    {
        return app(ApiResponse::class);
    }
}

if (!function_exists('table_comment')) {
    /**
     * 给一个数据表添加注释。
     *
     * User: sun.yaopeng
     * Date: 2020/4/27
     *
     * @param string $tableName 表名
     * @param string $comment 注释内容
     */
    function table_comment($tableName, $comment)
    {
        DB::statement("ALTER TABLE `" . config('database.connections.mysql.prefix') . $tableName . "` COMMENT '" . $comment . "'");
    }
}

if (!function_exists('build_where')) {
    /**
     * 将传入的字段和查询条件运算符转换为 ORM 的查询条件数组。
     *
     * User: sun.yaopeng
     * Date: 2020/5/8
     *
     * @param array $where
     * @return array
     */
    function build_where(array $where): array
    {
        $whereBuilder = [];
        $request = request()->all();

        foreach ($where as $key => $value) {
            if (!isset($request[$value]) || !$request[$value]) {
                continue;
            }

            if (is_int($key)) {
                $whereBuilder[] = [$value, $request[$value]];
            } else {
                if ('like' === $key) {
                    $whereBuilder[] = [$value, $key, '%' . $request[$value] . '%'];
                } else {
                    $whereBuilder[] = [$value, $key, $request[$value]];
                }
            }
        }

        return $whereBuilder;
    }
    
    if (!function_exists('deal_price')) {
        /**
         * 处理价格
         * @param $price
         * @param int $decimals
         * @return string
         */
        function deal_price($price, $decimals = 2)
        {
            return number_format($price, $decimals, '.', '');
        }
    }
}
