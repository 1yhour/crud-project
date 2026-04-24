<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Student;
use App\Models\Course;
class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $std = Student::factory(20)->create();
        $course = Course::factory(10)->create();
        $std->each(function ($st) use ($course){
            $st->courses()->attach($course->random(rand(1,5))->pluck('id'));
        });
    }
}
