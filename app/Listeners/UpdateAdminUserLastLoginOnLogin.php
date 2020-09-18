<?php

namespace App\Listeners;

use App\Events\AdminLogin;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateAdminUserLastLoginOnLogin
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param AdminLogin $event
     * @return void
     */
    public function handle(AdminLogin $event)
    {
        $event->adminUser->last_login_at = now();
        $event->adminUser->save();
    }
}
