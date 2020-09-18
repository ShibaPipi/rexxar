<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Admin\TopicRequest;
use App\Models\Topic;

class TopicController extends Controller
{
    public function index()
    {
        return api_response()->success(
            Topic::query()
                ->select('id', 'name')
                ->latest()
                ->paginate()
        );
    }

    public function store(TopicRequest $request)
    {
        Topic::create($request->only('name'));

        return api_response()->createdOrUpdated();
    }

    /**
     * @param Topic $topic
     * @return mixed
     * @throws \Exception
     */
    public function destroy(Topic $topic)
    {
        $topic->delete();

        return api_response()->deleted();
    }
}
