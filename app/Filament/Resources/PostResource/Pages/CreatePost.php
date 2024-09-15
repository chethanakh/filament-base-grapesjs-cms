<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Enums\PostsStatus;
use App\Filament\Resources\PostResource;
use App\Models\Post;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreatePost extends CreateRecord
{
    protected static string $resource = PostResource::class;

    protected function getActions(): array
    {
        return [
            Actions\Action::make('Publish')
                ->label('Publish')
                ->color('success')
                ->icon('heroicon-o-check')
                ->action(function (Post $post) {
                    $post->status = PostsStatus::PUBLISHED->value;
                    $this->create();
                }),
            Actions\Action::make('Draft')
                ->label('Save as Draft')
                ->color('primary')
                ->icon('heroicon-o-document')
                ->action(function (Post $post) {
                    $post->status = PostsStatus::DRAFT->value;
                    $this->create();
                }),
        ];
    }
}
