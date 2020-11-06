<?php

namespace App\Http\Controllers\Api\V2\Onstage;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Onstage\GoodsRequest;
use App\Models\PddProduct;

class GoodsController extends Controller
{
    public function index(GoodsRequest $request)
    {
        $where = [];
        if ($request->optId) {
            $where[] = ['optId', $request->optId];
        }
        if ($request->goodsFactPriceMax) {
            $where[] = ['goodsFactPrice', '<=', $request->goodsFactPriceMax];
        }
        if ($request->goodsFactPriceMin) {
            $where[] = ['goodsFactPrice', '>=', $request->goodsFactPriceMin];
        }

        $goods = PddProduct::query()->where($where)->paginate(20);
        return api_response()->ok($goods);
    }
}
