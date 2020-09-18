<?php

namespace App\Http\Controllers\Api\V2\Onstage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ZYZController extends Controller
{
    public function compare(Request $request)
    {
        $arr1 = array_unique(mb_str_split($request->textarea1));
        $arr2 = array_unique(mb_str_split($request->textarea2));

        $res = array_values(array_intersect($arr1, $arr2));

        return api_response()->success($res);
    }
}
