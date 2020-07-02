<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Admin\AdminPermissionRequest;
use App\Models\AdminPermission;

class AdminPermissionController extends Controller
{
    public function index()
    {
        return api()->success(
            AdminPermission::query()
                ->select('id', 'name', 'description')
                ->paginate()
        );
    }

    public function store(AdminPermissionRequest $request)
    {
        AdminPermission::create($request->only('name', 'description'));

        return api()->createdOrUpdated();
    }
}
