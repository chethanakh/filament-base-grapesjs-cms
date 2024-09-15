<?php

namespace App\Enums;

enum PostsStatus: string
{
    case PUBLISHED = 'published';
    case UNPUBLISHED = 'un-published';
    case DRAFT = 'draft';
}
