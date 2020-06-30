<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminPermission;
use Illuminate\Http\Request;

class AdminPermissionController extends Controller
{
    public function index()
    {
        return api()->success(
            AdminPermission::query()
                ->select('id', 'name', 'description')
                ->latest()
                ->paginate()
        );
    }
}
