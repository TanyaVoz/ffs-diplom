<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'number', 'status',
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];
}
