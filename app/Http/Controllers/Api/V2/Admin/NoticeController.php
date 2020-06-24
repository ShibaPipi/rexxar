<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Models\Notice;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    public function index()
    {
        return api()->success(
            Notice::query()
                ->select('id', 'title')
                ->latest()
                ->paginate()
        );
    }
}
