<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminHistoriesTable extends Migration
{
    const TABLE_NAME = 'admin_histories';

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(self::TABLE_NAME, function (Blueprint $table) {
            $table->id();
            $table->bigInteger('admin_user_id')->comment('管理员用户id');
            $table->ipAddress('ip');
            $table->string('path')->comment('访问路径');
            $table->string('query')->nullable()->comment('请求的 query string');
            $table->string('method')->comment('Http 请求方法');
            $table->string('os')->comment('请求机器的操作系统');
            $table->string('browser')->comment('请求的浏览器名');
            $table->string('referer')->nullable()->comment('请求来源，若直接在浏览器输入为 null');
            $table->timestamps();
        });

        DB::statement(make_table_comment(self::TABLE_NAME, '管理员访问日志表'));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin_histories');
    }
}
