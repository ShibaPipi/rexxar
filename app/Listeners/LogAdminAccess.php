<?php

namespace App\Listeners;

use App\Events\AdminAccess;
use App\Models\AdminHistory;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class LogAdminAccess
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
     * @param AdminAccess $event
     * @return void
     */
    public function handle(AdminAccess $event)
    {
        $request = $event->request;
        AdminHistory::create([
            'admin_user_id' => auth()->guest() ? 0 : auth()->id(),
            'ip' => $request->ip(),
            'path' => $request->path(),
            'query' => $request->server('QUERY_STRING'),
            'method' => $request->method(),
            'os' => request_os($request->header('User-Agent')),
            'browser' => request_browser($request->header('User-Agent')),
            'referer' => $request->header('referer')
        ]);
    }
}
