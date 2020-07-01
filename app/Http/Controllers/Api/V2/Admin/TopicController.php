<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Admin\TopicRequest;
use App\Models\Topic;

class TopicController extends Controller
{
    public function index()
    {
        return api()->success(
            Topic::query()
                ->select('id', 'name')
                ->latest()
                ->paginate()
        );
    }

    public function store(TopicRequest $request)
    {
        Topic::create($request->only('name'));

        return api()->created();
    }

    public function destroy()
    {
        Topic::destroy(request('id'));

        return api()->deleted();
    }
}
