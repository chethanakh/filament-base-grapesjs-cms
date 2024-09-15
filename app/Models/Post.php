<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'author',
        'published_at',
        'slug',
        'image',
        'tags',
        'status',
        'user_id',
        'feature_image',
        'seo_description',
    ];

    protected $casts = [
        'tags' => 'array',
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
