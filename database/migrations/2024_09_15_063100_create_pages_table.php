<?php

use App\Enums\PostsStatus;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('content')->nullable();
            $table->foreignIdFor(User::class);
            $table->dateTime('published_at')->nullable();
            $table->string('slug')->unique();
            $table->enum('status', array_column(PostsStatus::cases(), 'value'))->default(PostsStatus::DRAFT->value);
            $table->longText('seo_title')->default('');
            $table->longText('seo_description')->default('');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
