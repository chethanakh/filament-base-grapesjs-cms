<?php

namespace App\Filament\Resources;

use App\Enums\NavigationGroups;
use App\Enums\NavigationLabel;
use App\Enums\NavigationSorting;
use App\Enums\PageStatus;
use App\Filament\Resources\PageResource\Pages;
use App\Livewire\OpenPageBuilderActionComponent;
use App\Models\Page;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Components\Livewire;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PageResource extends Resource
{
    protected static ?string $model = Page::class;

    protected static ?string $navigationGroup = NavigationGroups::SiteManageMent->value;

    protected static ?int $navigationSort = NavigationSorting::Page->value;

    protected static ?string $navigationLabel = NavigationLabel::Page->value;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

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
                Forms\Components\Select::make('user_id')
                    ->label('Author')
                    ->options(User::all()->pluck('name', 'id'))
                    ->searchable()
                    ->default(Auth::id()),
                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->unique(Page::class, 'slug', ignoreRecord: true),
                Forms\Components\Section::make('Page Content')
                    ->description('This will open the inbuild page builder.Then You can customize your page using drag and drop components')
                    ->schema([
                        Livewire::make(OpenPageBuilderActionComponent::class,
                            ['pageId' => Arr::get($form->getRecord(), 'id') ?? null]),
                    ])->hidden(empty($form->getRecord())),
                Forms\Components\Section::make('SEO Details')
                    ->description('This SEO information are used to optimize search engine appearance of your news')
                    ->schema([
                            Forms\Components\TextInput::make('seo_title')
                                ->label('SEO Description'),
                            Forms\Components\Textarea::make('seo_description')
                                ->label('SEO Description'),
                    ]),
            ]);
    }

    public function afterSave($record): void
    {
        $savedModelId = $record->id;

        dd($savedModelId);
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
                        PageStatus::DRAFT->value => 'gray',
                        PageStatus::PUBLISHED->value => 'success',
                        PageStatus::UNPUBLISHED->value => 'danger',
                    })->formatStateUsing(function (string $state) {
                        return ucfirst($state);
                    })->icon(fn (string $state): string => match ($state) {
                        PageStatus::DRAFT->value => 'heroicon-o-pencil',
                        PageStatus::PUBLISHED->value => 'heroicon-o-check-circle',
                        PageStatus::UNPUBLISHED->value => 'heroicon-o-clock',
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
            'index' => Pages\ListPages::route('/'),
            'create' => Pages\CreatePage::route('/create'),
            'edit' => Pages\EditPage::route('/{record}/edit'),
        ];
    }
}
