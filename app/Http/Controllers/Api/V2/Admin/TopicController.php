<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Models\Topic;
use Illuminate\Http\Request;

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

    public function destroy()
    {
        Topic::destroy(request('id'));

        return api()->deleted();
    }
}
