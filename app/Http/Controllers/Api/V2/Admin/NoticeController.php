<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Admin\NoticeRequest;
use App\Jobs\SendNotices;
use App\Models\Notice;

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

    public function store(NoticeRequest $request)
    {
        SendNotices::dispatch(
            Notice::create($request->only('title', 'content'))
        );

        return api()->createdOrUpdated();
    }
}
