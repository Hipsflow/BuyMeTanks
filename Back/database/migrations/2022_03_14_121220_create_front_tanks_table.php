<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFrontTanksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('front_tanks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('tank_id')->unsigned();
            $table->foreign('tank_id')->references('id')->on('tanks')->onDelete('cascade');
            $table->integer('front_id')->unsigned();
            $table->foreign('front_id')->references('id')->on('fronts')->onDelete('cascade');
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
        Schema::dropIfExists('front_tanks');
    }
}
