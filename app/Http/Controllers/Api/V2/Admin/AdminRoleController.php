<?php

namespace App\Http\Controllers\Api\V2\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminRole;
use Illuminate\Http\Request;

class AdminRoleController extends Controller
{
    public function index()
    {
        return api()->success(
            AdminRole::query()
                ->select('id', 'name', 'description')
                ->paginate()
        );
    }
}
