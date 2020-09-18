<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V2\Admin\AdminRoleRequest;
use App\Models\AdminRole;

class AdminRoleController extends Controller
{
    public function index()
    {
        return api_response()->success(
            AdminRole::query()
                ->select('id', 'name', 'description')
                ->paginate()
        );
    }

    public function store(AdminRoleRequest $request)
    {
        AdminRole::create($request->only('name', 'description'));

        return api_response()->createdOrUpdated();
    }
}
