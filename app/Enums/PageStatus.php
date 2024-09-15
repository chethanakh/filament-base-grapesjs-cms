<?php

namespace App\Enums;

enum PageStatus: string
{
    case PUBLISHED = 'published';
    case UNPUBLISHED = 'un-published';
    case DRAFT = 'draft';
}
