<?php

namespace App\Enums;

enum AttachmentsFileTypes: string
{
    case PDF = 'pdf';
    case DOC = 'doc';
    case DOCX = 'docx';
    case XLS = 'xls';
    case XLSX = 'xlsx';
    case PPT = 'ppt';
    case PPTX = 'pptx';
    case TXT = 'txt';
    case CSV = 'csv';
    case ZIP = 'zip';
    case RAR = 'rar';
    case JPEG = 'jpeg';
    case JPG = 'jpg';
    case PNG = 'png';
    case GIF = 'gif';
    case SVG = 'svg';
    case MP3 = 'mp3';
    case MP4 = 'mp4';
    case WAV = 'wav';
    case AVI = 'avi';
    case MOV = 'mov';
    case MKV = 'mkv';
}
