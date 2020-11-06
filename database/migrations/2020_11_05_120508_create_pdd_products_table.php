<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePddProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pdd_products', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('goodsId');
            $table->string('goodsName');
            $table->integer('optId');
            $table->integer('minOnSaleNormalPrice');
            $table->integer('goodsFactPrice');
            $table->boolean('hasCoupon');
            $table->integer('couponPrice');
            $table->string('goodsPic');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pdd_products');
    }
}
