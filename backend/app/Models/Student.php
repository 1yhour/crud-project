<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Student extends Model
{
   use HasFactory; 
   protected $fillable = [
        'name',
        'email',
    ]; 
    public function courses():BelongsToMany
    {
        return $this->belongsToMany(Course::class,'course_students');
    }
}
