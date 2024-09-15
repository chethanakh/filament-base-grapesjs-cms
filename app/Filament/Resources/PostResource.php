<?php

namespace App\Filament\Resources;

use App\Enums\NavigationGroups;
use App\Enums\NavigationLabel;
use App\Enums\NavigationSorting;
use App\Enums\PostsStatus;
use App\Filament\Resources\PostResource\Pages;
use App\Models\Post;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationGroup = NavigationGroups::SiteManageMent->value;

    protected static ?int $navigationSort = NavigationSorting::Posts->value;

    protected static ?string $navigationLabel = NavigationLabel::Posts->value;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->columnSpan(2)
                    ->live(onBlur: true)
                    ->afterStateUpdated(function (Get $get, Set $set, ?string $old, ?string $state) {
                        if (($get('slug') ?? '') !== Str::slug($old)) {
                            return;
                        }
                        $set('slug', Str::slug($state));
                    }),
                Forms\Components\RichEditor::make('content')
                    ->required()
                    ->columnSpan(2),
                Forms\Components\Select::make('user_id')
                    ->options(User::all()->pluck('name', 'id'))
                    ->searchable()
                    ->default(Auth::id()),
                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->unique(Post::class, 'slug', ignoreRecord: true),
                Forms\Components\FileUpload::make('feature_image')
                    ->label('Feature Image')
                    ->directory('posts/feature_image')
                    ->image()
                    ->imageEditor()
                    ->columnSpan(2),
                Forms\Components\TagsInput::make('tags'),
                Forms\Components\Section::make('SEO Details')
                    ->description('This SEO information are used to optimize search engine appearance of your news')
                    ->schema([
                        Forms\Components\Textarea::make('seo_description')
                            ->label('SEO Description'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('slug'),
                Tables\Columns\TextColumn::make('status')->sortable()
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        PostsStatus::DRAFT->value => 'gray',
                        PostsStatus::PUBLISHED->value => 'success',
                        PostsStatus::UNPUBLISHED->value => 'danger',
                    })->formatStateUsing(function (string $state) {
                        return ucfirst($state);
                    })->icon(fn (string $state): string => match ($state) {
                        PostsStatus::DRAFT->value => 'heroicon-o-pencil',
                        PostsStatus::PUBLISHED->value => 'heroicon-o-check-circle',
                        PostsStatus::UNPUBLISHED->value => 'heroicon-o-clock',
                    }),
                Tables\Columns\TextColumn::make('published_at')->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'edit' => Pages\EditPost::route('/{record}/edit'),
        ];
    }
}
