<?php

namespace App\Http\Controllers\Onstage;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class RegisterController extends Controller
{
    public function index()
    {
        return view('onstage.register.index');
    }

    public function register()
    {
        $this->validate(request(), [
            'name' => 'required|min:3|unique:users,name',
            'email' => 'required|unique:users,email|email',
            'password' => 'required|min:5|confirmed',
        ]);

        User::query()->create(request(['name', 'email', 'password']));

        return redirect()->route('login.login');
    }
}
