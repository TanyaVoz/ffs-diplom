<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'session_id',
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];

    public function session(): belongsTo
    {
        return $this->belongsTo(Session::class, 'session_id');
    }
    public function seats(): BelongsToMany
    {
        return $this->belongsToMany(Seat::class);
    }
}