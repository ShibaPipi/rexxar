<?php

namespace App\Jobs;

use App\Models\User;
use App\Models\Notice;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SendNotices implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $notice;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Notice $notice)
    {
        $this->notice = $notice;
    }

    /**
     * 通知每个用户系统消息
     *
     * @return void
     */
    public function handle()
    {
        foreach (User::all() as $user) {
            $user->addNotice($this->notice);
        }
    }
}
