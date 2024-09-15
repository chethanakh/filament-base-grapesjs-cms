<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Enums\PostsStatus;
use App\Filament\Resources\PostResource;
use App\Models\Post;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPost extends EditRecord
{
    protected static string $resource = PostResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\Action::make('publish')
                ->label('Publish')
                ->color('success')
                ->icon('heroicon-o-check')
                ->action(function (Post $post) {
                    $post->status = PostsStatus::PUBLISHED->value;
                    $post->published_at = now();
                    $this->save();

                })
                ->visible(),
            Actions\Action::make('un-publish')
                ->label('Un Publish')
                ->color('gray')
                ->icon('heroicon-o-document')
                ->action(function (Post $post) {
                    $post->status = PostsStatus::UNPUBLISHED->value;
                    $post->published_at = null;
                    $this->save();
                })->visible($this->data['status'] != PostsStatus::UNPUBLISHED->value),
            Actions\Action::make('daft')
                ->label('Save as Draft')
                ->color('primary')
                ->icon('heroicon-o-document')
                ->action(function (Post $post) {
                    $post->status = PostsStatus::DRAFT->value;
                    $post->published_at = null;
                    $this->save();
                })->visible($this->data['status'] == PostsStatus::DRAFT->value),
        ];
    }

    protected function getFormActions(): array
    {
        return [];
    }
}
